import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Lightbulb, Building2, Calendar, User } from 'lucide-react';
import api from '../api/axios';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        console.error("Error fetching post:", err);
        setError("Could not find this diary entry.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-500 dark:text-gray-400 font-medium animate-pulse">
          Opening the diary...
        </p>
      </div>
    );
  }

  // Error State UI
  if (error || !post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{error}</h2>
        <Link to="/" className="text-blue-600 hover:underline flex items-center justify-center gap-2">
          <ArrowLeft size={18} /> Back to Feed
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(post.created_at).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Navigation */}
      <Link to="/" className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-8 group">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Feed
      </Link>

      {/* Header Section */}
      <header className="mb-10">
        <div className="flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">
          <Building2 size={16} /> {post.company}
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-gray-500 text-sm py-6 border-y border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <User size={14} className="text-blue-600 dark:text-blue-400" />
            </div>
            <Link to={`/profile/${post.author.username}`} className="font-medium text-gray-800 dark:text-gray-200">{post.author?.username || "Anonymous"}</Link>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} /> {formattedDate}
          </div>
        </div>
      </header>

      {/* Content Section */}
      <article className="prose prose-blue lg:prose-xl max-w-none">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4 tracking-tight">
          The Experience
        </h3>
        
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-10 whitespace-pre-wrap">
          {post.content}
        </p>

        {/* Conditional Tips Section */}
        {post.tips && (
          <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 rounded-r-2xl my-10">
            <div className="flex items-center gap-2 text-yellow-700 dark:text-yellow-500 font-bold mb-3">
              <Lightbulb size={20} />
              <span>Interview Tips & Tricks</span>
            </div>
            <p className="text-yellow-800 dark:text-yellow-200 italic leading-relaxed">
              "{post.tips}"
            </p>
          </div>
        )}
      </article>

      <div className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-800">
        <p className="text-gray-400 text-sm italic">
          Shared on The Offer Diary. Helping candidates ace their next big move.
        </p>
      </div>
    </div>
  );
}

