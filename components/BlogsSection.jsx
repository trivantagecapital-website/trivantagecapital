'use client';

import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const WP_API_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/vantagepoint37.wordpress.com/posts';

function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').replace(/&hellip;/g, '…').replace(/&nbsp;/g, ' ').trim();
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();
}

const BlogsSection = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const res = await fetch(WP_API_URL);
                const data = await res.json();
                setPosts(data.posts || []);
            } catch (err) {
                console.error('Failed to fetch posts:', err);
            } finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    return (
        <section id="blogs" className="bg-primary/5 py-24 md:py-32 scroll-mt-24">
            <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
                <div className="max-w-[800px] mb-20 text-center md:text-left">
                    <p className="text-primary/60 text-xs font-bold uppercase tracking-[0.3em] mb-4">
                        Read Blogs
                    </p>
                    <h2 className="serif-heading text-primary text-4xl md:text-5xl lg:text-6xl mb-6 italic">
                        VantagePoint
                    </h2>
                    <p className="text-xl text-primary/80 mb-8 font-light">
                        Turning insights into high-conviction investments that compound over time.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center text-primary/60 py-12">Loading posts...</div>
                ) : posts.length === 0 ? (
                    <div className="text-center text-primary/60 py-12">No posts available.</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map((post) => {
                            const category = Object.keys(post.categories || {})[0] || 'Article';
                            return (
                                <BlogCard
                                    key={post.ID}
                                    imageSrc={post.featured_image || '/hero-skyscraper.png'}
                                    category={category}
                                    date={formatDate(post.date)}
                                    title={post.title}
                                    excerpt={stripHtml(post.excerpt)}
                                    href={`/vantagepoint/${post.slug}`}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogsSection;