import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { PenSquare, Building2, Lightbulb, Send, Loader2 } from 'lucide-react';
import api from '../api/axios';

export default function CreatePost() {

  const navigate = useNavigate();

  // const { user } = useContext(AuthContext);
  // useEffect(() => {
  //   if (!user) {
  //     navigate('/login')
  //   }
  // }, [user, navigate]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    content: '',
    tips: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post('/posts/', formData);

      // Redirect to home on success
      navigate('/');
    } catch (error) {
      console.error("Submission failed:", error);
      alert(error.response?.data?.detail || "Failed to save your diary entry. Are you logged in?");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-2">Share Your Experience</h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium">Your story could be the reason someone else gets hired.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl shadow-blue-500/5">

        {/* Company Name */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300">
            <Building2 size={16} /> Company Name
          </label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
            placeholder="e.g. Google, Microsoft, Startup..."
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>

        {/* Job Title */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-bold text-gray-700 dark:text-gray-300">
            <PenSquare size={16} /> Interview Role / Title
          </label>
          <input
            required
            type="text"
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white"
            placeholder="e.g. Frontend Developer Intern Experience"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        {/* The Story */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Full Experience Description</label>
          <textarea
            required
            rows={8}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-none rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all dark:text-white resize-none"
            placeholder="Describe the rounds, the atmosphere, and the difficulty..."
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          />
        </div>

        {/* Tips Section */}
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm font-bold text-yellow-600">
            <Lightbulb size={16} /> Advice for others (Optional)
          </label>
          <textarea
            rows={3}
            className="w-full px-4 py-3 bg-yellow-50/50 dark:bg-yellow-900/10 border-none rounded-xl focus:ring-2 focus:ring-yellow-400 outline-none transition-all dark:text-white resize-none"
            placeholder="What should they study?"
            value={formData.tips}
            onChange={(e) => setFormData({ ...formData, tips: e.target.value })}
          />
        </div>

        {/* Submit Button */}
        <button
          disabled={loading}
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-500/30 disabled:opacity-70 active:scale-[0.98]"
        >
          {loading ? (
            <Loader2 className="animate-spin" size={20} />
          ) : (
            <>
              <Send size={20} /> Publish to the Diary
            </>
          )}
        </button>
      </form>
    </div>
  );
}