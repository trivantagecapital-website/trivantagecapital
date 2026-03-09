import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


const WP_API_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/vantagepoint37.wordpress.com/posts/slug:';
const WP_RECENT_POSTS_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/vantagepoint37.wordpress.com/posts?number=5';

async function getPost(slug) {
    const res = await fetch(`${WP_API_URL}${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
}

async function getRecentPosts() {
    const res = await fetch(WP_RECENT_POSTS_URL, { next: { revalidate: 60 } });
    if (!res.ok) return { posts: [] };
    return res.json();
}

function getPostLink(post) {
    const category = Object.keys(post.categories || {})[0] || 'Article';
    if (String(category).toLowerCase() === 'newsletter' && post.content) {
        const match = post.content.match(/href="([^"]*wp-content\/uploads[^"]*)"/);
        if (match) return match[1];

        const objectMatch = post.content.match(/data="([^"]*wp-content\/uploads[^"]*)"/);
        if (objectMatch) return objectMatch[1];
    }
    return `/vantagepoint/${post.slug}`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPost(slug);
    return {
        title: post?.title || 'VantagePoint',
    };
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const post = await getPost(slug);
    const recentPostsData = await getRecentPosts();
    const recentPosts = recentPostsData.posts || [];

    if (!post || post.error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-serif text-primary mb-4">Post Not Found</h1>
                    <Link href="/#blogs" className="text-primary/70 underline">← Back to blogs</Link>
                </div>
            </div>
        );
    }

    return (
        <article className="min-h-screen">
            <div className="max-w-[1200px] bg-white mx-auto flex flex-col gap-8 px-6  pt-15 pb-20 lg:px-10">
                {/* Back link */}
                {/* <Link href="/#blogs" className="inline-flex items-center text-xs font-bold tracking-widest text-primary/60 uppercase font-display mb-10 hover:text-primary transition-colors">
                    ← Back to VantagePoint
                </Link> */}

                {/* Category */}
                <div className="text-md font-bold tracking-widest text-primary uppercase font-display border-b border-primary/50 pb-4 ">
                    <span>{Object.keys(post.categories || {})[0] || 'Article'}</span>
                </div>

                <div>
                    {/* Title */}
                    <h1 className="text-4xl md:text-4xl font-semibold font-serif text-primary leading-[1.15] tracking-tight mb-8">
                        {post.title}
                    </h1>

                    {/* Author */}
                    <div className="flex items-center gap-4 mb-8">
                        {post.author && post.author.avatar_URL && (
                            <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                                <Image
                                    src={post.author.avatar_URL}
                                    alt={post.author.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}
                        <div>
                            <p className="text-md font-bold text-primary">{post.author?.name || 'Unknown Author'} <span className='font-normal'>, Senior Analyst</span></p>
                        </div>
                    </div>

                    {/* Date */}
                    <span>{formatDate(post.date)}</span>
                </div>

                {/* Content Area */}
                <div className='flex gap-10'>
                    <div className='flex-1'>
                        {/* Featured Image */}
                        {post.featured_image && (
                            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm mb-10 bg-gray-100">
                                <Image
                                    src={post.featured_image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 800px) 100vw, 800px"
                                    priority
                                />
                            </div>
                        )}

                        {/* Post Content */}
                        <div
                            className="blog-content"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </div>
                    <div className='w-[300px] flex flex-col gap-6 top-24 h-fit'>
                        <h3 className="text-md font-bold tracking-widest text-primary uppercase font-display border-b border-primary/50 pb-4">Recent Insights</h3>
                        <div className="flex flex-col gap-8">
                            {recentPosts
                                .filter(p => p.ID !== post.ID)
                                .slice(0, 5)
                                .map(recentPost => (
                                    <Link key={recentPost.ID} href={getPostLink(recentPost)} className="group flex flex-col gap-3">
                                        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-sm bg-gray-100">
                                            <Image
                                                src={recentPost.featured_image || '/hero-skyscraper.png'}
                                                alt={recentPost.title}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                sizes="(max-width: 300px) 100vw, 300px"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-lg leading-snug group-hover:text-primary/70 transition-colors mb-1">{recentPost.title}</h4>
                                            <span className="text-xs text-primary/60 font-display">{formatDate(recentPost.date)}</span>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}