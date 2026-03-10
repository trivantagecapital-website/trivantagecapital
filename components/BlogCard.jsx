'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({
    imageSrc = "/hero-skyscraper.png",
    category = "ARTICLE",
    date = "FEBRUARY 2026",
    title = "Real Estate: The Brightening Case for GP-Focused Solutions in 2026",
    excerpt = "We see increasing evidence that the real estate sector may continue to gain strength and create potentially attractive opportunities across public and private markets in 2026.",
    href = "#"
}) => {
    return (
        <div className="group flex flex-col w-full h-full max-w-sm mx-auto sm:mx-0">

            {/* Image Container */}
            <Link href={href} className="block overflow-hidden mb-5">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 rounded-sm">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill // Fills the container
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
            </Link>

            {/* Text Container */}
            <div className='flex flex-col justify-between flex-1'>
                <div className="flex flex-col gap-3">
                    {/* Metadata: Category | Date */}
                    <div className="flex items-center text-xs font-bold tracking-widest text-primary uppercase font-display">
                        <span>{category}</span>
                        <span className="mx-2 text-primary/60">|</span>
                        <span>{date}</span>
                    </div>

                    {/* Title */}
                    <Link href={href} className="block group-hover:opacity-80 transition-opacity">
                        <h3 className="text-2xl md:text-[1.3rem] font-semibold font-serif text-primary leading-[1.15]">
                            {title}
                        </h3>
                    </Link>

                    {/* Excerpt */}
                    <p className="text-base text-primary/80 font-display leading-relaxed line-clamp-3">
                        {excerpt}
                    </p>
                </div>
                {/* Read More Button */}
                <Link
                    href={href}
                    className="mt-2 inline-flex items-center text-xs font-bold tracking-widest text-primary uppercase font-display decoration-2 underline-offset-4 transition-all w-fit"
                >
                    KNOW MORE
                    <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
            </div>
        </div>
    );
};

export default BlogCard;