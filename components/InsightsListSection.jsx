import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { stripHtml, getPostLink } from '@/lib/blogUtils';

const BASE_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/vantagepoint37.wordpress.com';

async function getPosts() {
    try {
        const res = await fetch(`${BASE_URL}/posts?number=40`, { next: { revalidate: 3600 } });
        const data = await res.json();
        const posts = data.posts || [];
        return posts.filter(post =>
            !Object.values(post.categories || {}).some(c => c.slug?.toLowerCase() === 'careers')
        );
    } catch (error) {
        console.error("Error fetching posts:", error);
        return [];
    }
}

async function getCategories() {
    try {
        const res = await fetch(`${BASE_URL}/categories`, { next: { revalidate: 3600 } });
        const data = await res.json();
        return data.categories || [];
    } catch (error) {
        console.error("Error fetching categories:", error);
        return [];
    }
}

const EXCLUDED_CATEGORY_SLUGS = ['careers', 'uncategorized'];

const InsightsListSection = async ({ activeCategory = null }) => {
    let posts = await getPosts();
    const categories = await getCategories();

    // Filter posts by active category (match against slug in category value objects)
    if (activeCategory) {
        posts = posts.filter(post =>
            Object.values(post.categories || {}).some(c => c.slug?.toLowerCase() === activeCategory.toLowerCase())
        );
    }

    // Group posts by Month Year
    const groupArray = [];
    posts.forEach(post => {
        const date = new Date(post.date);
        const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

        let group = groupArray.find(g => g.monthYear === monthYear);
        if (!group) {
            group = { monthYear, posts: [] };
            groupArray.push(group);
        }
        group.posts.push(post);
    });

    const filteredCategories = categories.filter(
        cat => !EXCLUDED_CATEGORY_SLUGS.includes(cat.slug?.toLowerCase())
    );

    return (
        <section className="max-w-300 mx-auto px-5 sm:px-6 lg:px-10 py-10 sm:py-12 md:py-20 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                {/* Posts Column */}
                <div className="lg:col-span-8">
                    {groupArray.length > 0 ? (
                        groupArray.map((group) => (
                            <div key={group.monthYear} className="mb-16 last:mb-0">
                                <div className="border-t border-primary/10 pt-6 sm:pt-8">
                                    <h2 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-primary mb-7 sm:mb-10 block font-sans">
                                        {group.monthYear}
                                    </h2>
                                    <div className="flex flex-col gap-10 sm:gap-12">
                                        {group.posts.map(post => (
                                            <PostItem key={post.ID} post={post} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="py-20 text-center text-primary/60">No insights found.</div>
                    )}
                </div>

                {/* Sidebar */}
                <div className="lg:col-span-4 pl-0 lg:pl-12 border-l border-primary/5 hidden lg:block">
                    <div className="sticky top-24">
                        {/* Categories */}
                        {/* <div className="mb-16">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-6 font-sans">Categories</h3>
                            <ul className="space-y-4">
                                <li>
                                    <Link
                                        href="/insights"
                                        className={`transition-colors text-base font-medium font-serif block ${
                                            !activeCategory ? 'text-primary' : 'text-primary/60 hover:text-primary'
                                        }`}
                                    >
                                        All
                                    </Link>
                                </li>
                                {filteredCategories.map(cat => (
                                    <li key={cat.ID}>
                                        <Link
                                            href={`/insights?category=${cat.slug}`}
                                            className={`transition-colors text-base font-medium font-serif block ${
                                                activeCategory?.toLowerCase() === cat.slug?.toLowerCase()
                                                    ? 'text-primary'
                                                    : 'text-primary/60 hover:text-primary'
                                            }`}
                                        >
                                            {cat.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div> */}

                        {/* Subscribe */}
                        <div className="bg-primary/5 p-8 rounded-sm">
                            <h3 className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-4 font-sans">Subscribe</h3>
                            <p className="text-primary/60 text-sm mb-6 font-sans leading-relaxed">
                                Receive weekly market perspectives directly to your inbox.
                            </p>
                            <form className="flex flex-col gap-3">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="px-4 py-3 bg-white border border-transparent focus:border-primary/20 focus:outline-none w-full text-sm font-sans"
                                />
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest transition-colors w-full font-sans"
                                >
                                    Join Archive
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

const PostItem = ({ post }) => {
    // Extract category
    const categoryName = post.categories ? Object.keys(post.categories)[0] : 'Uncategorized';

    // Use featured image if available
    const imageUrl = post.featured_image;

    // Helper to strip HTML from excerpt
    const cleanExcerpt = stripHtml(post.excerpt);

    return (
        <article className="group flex flex-col md:flex-row gap-6 md:gap-10 items-start">
           
                <Link href={getPostLink(post, categoryName)} className="w-full md:w-65 aspect-16/10 relative bg-gray-100 shrink-0 overflow-hidden rounded-sm block">
                    <Image
                        src={imageUrl ? imageUrl : '/hero-skyscraper3.jpg'}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                </Link>
    
            <div className="flex-1 flex flex-col items-start">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/40 mb-2 sm:mb-3 block font-sans">
                    {categoryName}
                </span>
                <Link href={getPostLink(post, categoryName)} className="block mb-3">
                    <h3 className="text-xl sm:text-2xl md:text-[1.5rem] font-bold font-serif! text-primary leading-[1.2] group-hover:text-primary/80 transition-colors">
                        {post.title}
                    </h3>
                </Link>

                <p className="text-primary/60 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 line-clamp-3 font-sans">
                    {cleanExcerpt}
                </p>

                <Link href={getPostLink(post, categoryName)} className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all font-sans">
                    KNOW MORE
                </Link>
            </div>
        </article>
    )
}

export default InsightsListSection