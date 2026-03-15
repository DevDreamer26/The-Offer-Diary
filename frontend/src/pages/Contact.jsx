import React, { useState } from 'react';
import { Mail, MessageSquare, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
          <CheckCircle size={40} className="text-green-600 dark:text-green-400" />
        </div>
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-4">Message Sent!</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          Thanks for reaching out. Our support team will get back to you within 24 hours.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="text-blue-600 font-bold hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-black text-gray-900 dark:text-white mb-4">Contact Support</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Have questions or found a bug? We're here to help.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Your Name</label>
              <input required type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-none rounded-xl outline-none focus:ring-2 focus:ring-blue-500 dark:text-white" placeholder="Yourname" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Email Address</label>
              <input required type="email" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-none rounded-xl outline-none focus:ring-2 focus:ring-blue-500 dark:text-white" placeholder="hello@example.com" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Subject</label>
            <input required type="text" className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-none rounded-xl outline-none focus:ring-2 focus:ring-blue-500 dark:text-white" placeholder="How can we help?" />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-700 dark:text-gray-300">Message</label>
            <textarea required rows={5} className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-none rounded-xl outline-none focus:ring-2 focus:ring-blue-500 dark:text-white resize-none" placeholder="Write your message here..." />
          </div>

          <button type="submit" className="w-full flex items-center justify-center gap-2 py-4 bg-gray-900 dark:bg-blue-600 text-white font-black rounded-2xl transition-all hover:bg-black dark:hover:bg-blue-700 shadow-lg">
            <Send size={20} /> Send Message
          </button>
        </form>
      </div>
    </div>
  );
}