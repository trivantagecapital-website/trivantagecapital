import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WP_API_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/vantagepoint37.wordpress.com/posts/slug:';

async function getPost(slug) {
    const res = await fetch(`${WP_API_URL}${slug}`, { next: { revalidate: 60 } });
    if (!res.ok) return null;
    return res.json();
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
        <article className="min-h-screen pt-32 pb-24">
            <div className="max-w-[800px] mx-auto px-6 lg:px-10">
                {/* Back link */}
                <Link href="/#blogs" className="inline-flex items-center text-xs font-bold tracking-widest text-primary/60 uppercase font-display mb-10 hover:text-primary transition-colors">
                    ← Back to VantagePoint
                </Link>

                {/* Category & Date */}
                <div className="flex items-center text-xs font-bold tracking-widest text-primary uppercase font-display mb-4">
                    <span>{Object.keys(post.categories || {})[0] || 'Article'}</span>
                    <span className="mx-2 text-primary/60">|</span>
                    <span>{formatDate(post.date)}</span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-serif text-primary leading-[1.15] tracking-tight mb-8">
                    {post.title}
                </h1>

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
                    className="prose prose-lg max-w-none text-primary/85 font-display
                        prose-headings:font-serif prose-headings:text-primary
                        prose-a:text-primary prose-a:underline
                        prose-strong:text-primary"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </article>
    );
}