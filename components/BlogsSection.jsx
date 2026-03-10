'use client';

import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Link from 'next/link';

const WP_API_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/vantagepoint37.wordpress.com/posts';

function stripHtml(html) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, '').replace(/&hellip;/g, '…').replace(/&nbsp;/g, ' ').trim();
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' }).toUpperCase();
}

function getPostLink(post, category) {
    if (String(category).toLowerCase() === 'newsletter' && post.content) {
        const match = post.content.match(/href="([^"]*wp-content\/uploads[^"]*)"/);
        if (match) return match[1];

        const objectMatch = post.content.match(/data="([^"]*wp-content\/uploads[^"]*)"/);
        if (objectMatch) return objectMatch[1];
    }
    return `/insights/${post.slug}`;
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
                <div className="max-w-[800px] mb-15 text-center md:text-left">
                    <p className="text-primary/60 text-xs font-bold uppercase tracking-[0.3em] mb-4">
                        INSIGHTS
                    </p>
                    <h2 className="serif-heading text-primary text-4xl md:text-5xl lg:text-6xl mb-6 italic">
                        VantagePoint
                    </h2>
                    <p className="text-xl text-primary/80 mb-8 font-light">
                        Navigating Global Markets with Precision. Strategic analysis and
                        curated perspectives from Trivantage Capital's investment team.
                    </p>
                </div>

                {loading ? (
                    <div className="text-center text-primary/60 py-12">Loading posts...</div>
                ) : posts.length === 0 ? (
                    <div className="text-center text-primary/60 py-12">No posts available.</div>
                ) : (
                    <div className='flex flex-col items-center'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            {posts.slice(0, 3).map((post) => {
                                const category = Object.keys(post.categories || {})[0] || 'Article';
                                return (
                                    <BlogCard
                                        key={post.ID}
                                        imageSrc={post.featured_image || '/hero-skyscraper.png'}
                                        category={category}
                                        date={formatDate(post.date)}
                                        title={post.title}
                                        excerpt={stripHtml(post.excerpt)}
                                        href={getPostLink(post, category)}
                                    />
                                );
                            })}
                        </div>

                        <Link
                            href="/insights"
                            className="mx-auto bg-red- group mt-15 border border-primary px-5 py-4 inline-flex items-center text-xs font-bold tracking-widest text-primary uppercase font-display decoration-2 underline-offset-4 transition-all w-fit"
                        >
                            Read More Insights
                            <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </Link>
                    </div>
                )}

            </div>
        </section>
    );
};

export default BlogsSection;