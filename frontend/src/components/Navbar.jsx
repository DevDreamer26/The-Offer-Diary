import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BookOpen, LogOut, PenSquare, Menu, X, User, BookMarked } from 'lucide-react';
import { AuthContext } from '../context/AuthContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out ?")
    if (confirmLogout) {
      logout();
      navigate('/login');
      setIsOpen(false);
    }

  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="text-blue-600" size={28} />
            <span className="text-xl font-black tracking-tighter text-gray-900 dark:text-white">
              The Offer Diary
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            <ThemeToggle />
            {user ? (
              <>
                <Link
                  to="/myposts"
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-bold hover:text-blue-600 transition-colors"
                >
                  <BookMarked size={18} /> My Diary
                </Link>

                <Link to="/create" className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-500/10">
                  <PenSquare size={18} /> Write
                </Link>

                {/* User Profile Display */}
                <div className="flex items-center gap-2 pl-4 border-l border-gray-100 dark:border-gray-800">
                  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <User size={16} />
                  </div>
                  <Link to={`/profile/${user.username}`} className="text-sm font-bold text-gray-700 dark:text-gray-200 capitalize">
                    {user.username}
                  </Link>
                </div>

                <button
                  onClick={handleLogout}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-600 dark:text-gray-300 font-bold hover:text-blue-600">Login</Link>
                <Link to="/register" className="bg-gray-900 dark:bg-white dark:text-gray-900 text-white px-5 py-2 rounded-xl font-bold">Register</Link>
              </>
            )}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 p-4 space-y-4">
          {user && (
            <div className="flex items-center gap-3 px-2 py-2 mb-2 border-b border-gray-50 dark:border-gray-800">
              <User className="text-blue-600" size={20} />
              <span className="font-bold dark:text-white capitalize">{user.username}</span>
            </div>
          )}

          {user ? (
            <>
              <Link to="/myposts" onClick={() => setIsOpen(false)} className="block text-gray-600 dark:text-gray-300 font-bold px-2 py-2">My Diary</Link>
              <Link to="/create" onClick={() => setIsOpen(false)} className="block w-full text-center bg-blue-600 text-white py-3 rounded-xl font-bold">Write Experience</Link>
              <button onClick={handleLogout} className="w-full text-left px-2 text-red-500 font-bold py-2">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={() => setIsOpen(false)} className="block text-center text-gray-600 dark:text-gray-300 font-bold">Login</Link>
              <Link to="/register" onClick={() => setIsOpen(false)} className="block text-center bg-gray-900 dark:bg-white dark:text-gray-900 text-white py-3 rounded-xl font-bold">Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}