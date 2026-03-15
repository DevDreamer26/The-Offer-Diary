import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit3, Trash2, Plus, BookOpen } from 'lucide-react';
import api from '../api/axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function MyPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchMyPosts = async () => {
            try {
                const response = await api.get('/posts/me');
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching your posts:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMyPosts();
    }, []);

    const handleDelete = async (postId) => {
        if (window.confirm("Are you sure you want to delete this experience?")) {
            try {
                await api.delete(`/posts/${postId}`);
                setPosts(posts.filter(p => p.id !== postId)); 
            } catch (error) {
                alert("Failed to delete post.");
            }
        }
    };

    if (loading) return <div className="text-center py-20">Loading your diary...</div>;

    return (
        <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="flex justify-between items-center mb-10">
                <div>
                    <h1 className="text-3xl font-black text-gray-900 dark:text-white">My Interview Diary</h1>
                    <p className="text-gray-500">Manage the experiences you've shared.</p>
                </div>
                <Link to="/create" className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
                    <Plus size={20} /> New Entry
                </Link>
            </div>

            {posts.length === 0 ? (
                <div className="text-center py-20 bg-gray-50 dark:bg-gray-900/50 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-800">
                    <BookOpen className="mx-auto text-gray-300 mb-4" size={48} />
                    <p className="text-gray-500 font-medium">You haven't shared any experiences yet.</p>
                </div>
            ) : (
                <div className="grid gap-6">
                    {posts.map(post => (
                        <div key={post.id} className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div>
                                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{post.company}</span>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{post.title}</h3>
                                <p className="text-sm text-gray-400 mt-1">Created on {new Date(post.created_at).toLocaleDateString()}</p>
                            </div>

                            <div className="flex items-center gap-3 w-full md:w-auto">
                                <Link to={`/post/${post.id}`} className="flex-1 md:flex-none text-center px-4 py-2 text-sm font-bold text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
                                    View
                                </Link>
                                <Link to={`/edit/${post.id}`} className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors">
                                    <Edit3 size={16} /> Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(post.id)}
                                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 text-sm font-bold text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                >
                                    <Trash2 size={16} /> Delete
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}