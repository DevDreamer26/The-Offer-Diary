import React from 'react';
import { Link } from 'react-router-dom';
import { Ghost, Home as HomeIcon, Search, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full text-center space-y-8">
        
        {/* Animated Icon Container */}
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-full blur-3xl scale-150 animate-pulse"></div>
          <div className="relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 rounded-full shadow-2xl">
            <Ghost size={80} className="text-blue-600 dark:text-blue-400 animate-bounce" />
          </div>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg">
            404 ERROR
          </span>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Diary Entry <span className="text-blue-600">Not Found</span>
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
            Looks like this interview experience hasn't been written yet, or the candidate is still in the "Silent Treatment" phase.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            to="/" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-lg shadow-blue-500/20 active:scale-95"
          >
            <HomeIcon size={18} /> Back to Dashboard
          </Link>
          
          <Link 
            to="/create" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 font-bold px-8 py-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all active:scale-95"
          >
            Share an Experience <ArrowRight size={18} />
          </Link>
        </div>

        {/* Subtle Search Hint */}
        <div className="pt-8 border-t border-gray-100 dark:border-gray-800 flex items-center justify-center gap-2 text-sm text-gray-400">
          <Search size={14} />
          <span>Try searching for a specific company on the home page</span>
        </div>
      </div>
    </div>
  );
}