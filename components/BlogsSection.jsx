import BlogCard from './BlogCard';
import Link from 'next/link';
import { stripHtml, formatDate, getPostLink } from "@/lib/blogUtils";

const WP_API_URL = process.env.WP_RECENT_POSTS_URL;

async function getPosts() {
    try {
        const res = await fetch(WP_API_URL, {
            next: { revalidate: 3600 }, // cache for 1 hour
        });

        const data = await res.json();
        const posts = data.posts || [];
        return posts.filter(post =>
            !Object.values(post.categories || {}).some(c => c.slug?.toLowerCase() === 'careers')
        );
    } catch (err) {
        console.error('Failed to fetch posts:', err);
        return [];
    }
}

const BlogsSection = async () => {
    const posts = await getPosts();

    return (
        <section id="blogs" className="py-16 sm:py-20 md:py-24 scroll-mt-24">
            <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-10">
                <div className="max-w-[800px] mb-10 sm:mb-12 md:mb-16 text-center md:text-left">
                    <p className="text-primary/70 text-xs font-bold uppercase tracking-[0.3em] mb-4">
                        INSIGHTS
                    </p>

                    <h2 className="!font-display text-primary text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        VantagePoint
                    </h2>

                    <p className="text-lg sm:text-xl text-primary/80 mb-6 sm:mb-8 font-light">
                        A Vantage View of Indian Financial Markets
                    </p>
                </div>

                {posts.length === 0 ? (
                    <div className="text-center text-primary/60 py-12">
                        No posts available.
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            {posts.slice(0, 3).map((post) => {
                                const categories = Object.keys(post.categories || {}).filter(
                                    (cat) => cat.toLowerCase() !== 'featured'
                                );

                                const category = categories[0] || 'Article';

                                return (
                                    <BlogCard
                                        key={post.ID}
                                        imageSrc={post.featured_image || '/hero-skyscraper3.jpg'}
                                        category={category}
                                        date={formatDate(post.date)}
                                        title={post.title}
                                        excerpt={stripHtml(post.excerpt)}
                                        href={getPostLink(post, category)}
                                    />
                                );
                            })}
                        </div>

                    </div>
                )}
            </div>
        </section>
    );
};

export default BlogsSection;