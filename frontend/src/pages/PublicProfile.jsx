import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { User, Mail, Calendar, BookOpen, ArrowLeft } from 'lucide-react';
import api from '../api/axios';
import PostCard from '../components/PostCard';

export default function PublicProfile() {
  const { username } = useParams();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        setLoading(true);
        const response = await api.get(`/posts/user/${username}`);
        setPosts(response.data);
        
        // Extract the email from the first post's author object
        if (response.data.length > 0) {
          setUserEmail(response.data[0].author.email);
        }
      } catch (error) {
        console.error("User not found or has no posts");
      } finally {
        setLoading(false);
      }
    };
    fetchUserPosts();
  }, [username]);

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
      <p className="text-gray-500">Loading profile...</p>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-8 transition-colors group">
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Feed
      </Link>

      {/* Profile Header Card */}
      <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-100 dark:border-gray-800 mb-12 shadow-sm border-b-4 border-b-blue-600">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Avatar */}
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white text-4xl font-black shadow-lg">
            {username.charAt(0).toUpperCase()}
          </div>

          <div className="flex-1 text-center md:text-left space-y-3">
            <h1 className="text-4xl font-black text-gray-900 dark:text-white capitalize">
              {username}
            </h1>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm">
              {/* Displaying User Email */}
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Mail size={18} className="text-blue-500" />
                <span className="font-medium">{userEmail || "Email Private"}</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-500">
                <Calendar size={18} />
                <span>Member since 2026</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-bold border border-blue-100 dark:border-blue-800">
                <BookOpen size={14} /> {posts.length} Experiences Shared
              </span>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-black mb-8 text-gray-900 dark:text-white flex items-center gap-3">
        Diaries by {username}
      </h2>

      {/* Grid of User's Posts */}
      {posts.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800">
          <p className="text-gray-400 italic text-lg">No public experiences found for this user.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <Link to={`/post/${post.id}`} key={post.id} className="block transform hover:-translate-y-1 transition-transform">
              <PostCard post={post} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}