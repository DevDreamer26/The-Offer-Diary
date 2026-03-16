import React from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { Building2, Calendar } from 'lucide-react';

export default function PostCard({ post }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/post/${post.id}`);
  };

  const formattedDate = new Date(post.created_at).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
  });

  return (
    <div 
      onClick={handleCardClick}
      className="cursor-pointer bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all group"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
          <Building2 size={14} /> {post.company}
        </div>
        <span className="text-gray-400 text-xs flex items-center gap-1">
          <Calendar size={12} /> {formattedDate}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
        {post.title}
      </h3>

      <p className="text-gray-500 dark:text-gray-400 text-sm line-clamp-3 mb-6">
        {post.content}
      </p>

      <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
            {post.author?.username?.charAt(0).toUpperCase() || "U"}
          </div>
          
          <Link 
            to={`/profile/${post.author?.username}`}
            onClick={(e) => e.stopPropagation()} 
            className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:text-blue-600 z-10"
          >
            {post.author?.username || "Anonymous"}
          </Link>
        </div>
        
        <span className="text-blue-600 text-xs font-bold group-hover:translate-x-1 transition-transform">
          Read More →
        </span>
      </div>
    </div>
  );
}