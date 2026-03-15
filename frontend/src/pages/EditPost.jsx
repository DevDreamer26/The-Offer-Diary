import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Save, Loader2, ArrowLeft } from 'lucide-react';
import api from '../api/axios';

export default function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    content: '',
    tips: ''
  });

  // Load existing post data
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        const { title, company, content, tips } = response.data;
        setFormData({ title, company, content, tips });
      } catch (error) {
        console.error("Failed to fetch post", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.put(`/posts/${id}`, formData);
      navigate(`/post/${id}`); 
    } catch (error) {
      alert("Failed to update post. Make sure you are the owner.");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="text-center py-20">Loading your data...</div>;

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 mb-6 hover:text-blue-600 transition-colors">
        <ArrowLeft size={18} /> Back
      </button>

      <h1 className="text-3xl font-black mb-8">Edit Your Experience</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
        <div>
          <label className="block text-sm font-bold mb-2">Company Name</label>
          <input 
            required
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Interview Role</label>
          <input 
            required
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">The Story</label>
          <textarea 
            required
            rows={8}
            className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            value={formData.content}
            onChange={(e) => setFormData({...formData, content: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2 text-yellow-600">Tips</label>
          <textarea 
            rows={3}
            className="w-full px-4 py-3 bg-yellow-50/50 dark:bg-yellow-900/10 rounded-xl outline-none focus:ring-2 focus:ring-yellow-400 dark:text-white"
            value={formData.tips}
            onChange={(e) => setFormData({...formData, tips: e.target.value})}
          />
        </div>

        <button 
          disabled={submitting}
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-lg disabled:opacity-70"
        >
          {submitting ? <Loader2 className="animate-spin" /> : <><Save size={20} /> Update Experience</>}
        </button>
      </form>
    </div>
  );
}