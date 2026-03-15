import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus } from 'lucide-react';
import PostCard from '../components/PostCard';
import api from '../api/axios';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts/');
        setPosts(response.data);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const postsToShow = filteredPosts.slice(0, visibleCount);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero & Search Section */}
      <section className="text-center mb-16 space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
            The <span className="text-blue-600">Offer</span> Diary
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            Search real interview stories and prepare for your dream role.
          </p>
        </div>

        <div className="relative max-w-xl mx-auto group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
          <input 
            type="text"
            placeholder="Search by company or role..."
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </section>

      {/* Loading State UI */}
      {isLoading ? (
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-500">Loading experiences...</p>
        </div>
      ) : (
        <>
          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {postsToShow.map(post => (
              <Link to={`/post/${post.id}`} key={post.id} className="block transform hover:-translate-y-1 transition-transform">
                <PostCard post={post} />
              </Link>
            ))}
          </div>

          {/* Load More Button */}
          {visibleCount < filteredPosts.length && (
            <div className="flex justify-center">
              <button 
                onClick={() => setVisibleCount(prev => prev + 3)}
                className="flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 font-bold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-blue-300 transition-all shadow-sm"
              >
                <Plus size={18} /> Load More Experiences
              </button>
            </div>
          )}

          {/* No Results State */}
          {filteredPosts.length === 0 && !isLoading && (
            <div className="text-center py-20">
              <p className="text-gray-400 text-lg italic">No diaries found matching "{searchQuery}"</p>
            </div>
          )}
        </>
      )}
    </main>
  );
}