import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from "@/lib/blogUtils";
import { getDesignationByWpAuthor } from "@/lib/teamConfig";


const WP_API_URL = process.env.WP_API_URL;

async function getPost(slug) {
    const res = await fetch(`${WP_API_URL}${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
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
            <div className="max-w-full bg-white mx-auto pb-20">
                {/* Featured Image */}
                {post.featured_image && (
                    <div className="relative aspect-[16/10] md:aspect-[1540/502] h-auto w-full overflow-hidden bg-gray-100">
                        <Image
                            src={post.featured_image}
                            alt={post.title}
                            fill
                            className="object-cover object-bottom"
                            sizes="(max-width: 800px) 100vw, 800px"
                            priority
                        />
                    </div>
                )}

                <div className='bg-primary px-6 md:px-14 py-5 md:py-10'>
                    {/* Category and Date */}
                    <div className="text-sm font-medium tracking-widest text-white uppercase font-display border-b border-white/50 pb-5 md:pb-6 ">
                        <span>{Object.keys(post.categories || {})[0] || 'Article'} | {formatDate(post.date)}</span>
                    </div>

                    <div>
                        {/* Title */}
                        <h1 className="text-4xl md:text-5xl font-semibold font-serif text-white leading-[1.15] tracking-tight mt-5 md:mt-10 mb-10 md:mb-20">
                            {post.title}
                        </h1>

                        {/* Author */}
                        <div className="flex items-center gap-4">
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
                                <p className="text-md font-bold text-white">{post.author?.name || 'Unknown Author'} {getDesignationByWpAuthor(post.author?.name) && <span className='font-normal'>| {getDesignationByWpAuthor(post.author?.name)}</span>}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Area */}
                <div className='max-w-3xl mx-auto px-4 py-10'>
                    {/* Post Content */}
                    <div
                        className="blog-content"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                </div>

            </div>
        </article>
    );
}