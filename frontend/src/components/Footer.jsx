// src/components/Footer.jsx
import { BookOpen, Github, Twitter, Linkedin, Heart, LifeBuoy } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 dark:bg-gray-950 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="text-blue-600" size={24} />
              <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">The Offer Diary</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed dark:text-gray-300">
              Empowering candidates to ace their next interview through community-driven insights and real-world experiences.
            </p>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-blue-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><Github size={20} /></a>
              <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Platform</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><Link to="/" className="hover:text-blue-600 transition-colors">Browse Diaries</Link></li>
              <li><Link to="/create" className="hover:text-blue-600 transition-colors">Share Experience</Link></li>
              <li><Link to="/myposts" className="hover:text-blue-600 transition-colors">My Diary</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors flex items-center gap-2">
                <LifeBuoy size={14} /> Contact Support
              </Link></li>
              <li><a href="/" className="hover:text-blue-600 transition-colors">Interview Prep</a></li>
              <li><a href="/" className="hover:text-blue-600 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm text-gray-500 font-medium">
              <li><Link to="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-50 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} The Offer Diary. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-red-400 fill-red-400" /> by Bidyasagar
          </p>
        </div>
      </div>
    </footer>
  );
}