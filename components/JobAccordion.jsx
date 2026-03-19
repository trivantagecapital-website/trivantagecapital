'use client';

import { useState } from 'react';

function JobItem({ post, isOpen, onToggle }) {
  return (
    <div className="border border-primary/10 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 bg-white hover:bg-primary/5 transition-colors text-left border-l-4 border-primary"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-bold text-primary pr-4">{post.title}</span>
        <span
          className={`material-symbols-outlined text-primary shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        >
          expand_more
        </span>
      </button>

      {isOpen && (
        <div
          className="bg-white px-6 py-5 border-t border-primary/10 text-base text-primary/70 leading-relaxed
            [&_p]:mb-3 [&_p:last-child]:mb-0
            [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:mb-3
            [&_ol]:list-decimal [&_ol]:ml-5 [&_ol]:mb-3
            [&_li]:mb-1
            [&_h2]:text-lg [&_h2]:font-bold [&_h2]:text-primary [&_h2]:mb-2 [&_h2]:mt-4
            [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-primary [&_h3]:mb-1 [&_h3]:mt-3
            [&_strong]:font-semibold [&_strong]:text-primary
            [&_a]:underline [&_a]:text-primary/80 [&_a:hover]:text-primary"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      )}
    </div>
  );
}

export default function JobAccordion({ posts }) {
  const [openId, setOpenId] = useState(null);

  if (!posts || posts.length === 0) {
    return (
      <p className="text-primary/50 text-sm italic">
        No openings at this time. Please check back soon.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {posts.map((post) => (
        <JobItem
          key={post.ID}
          post={post}
          isOpen={openId === post.ID}
          onToggle={() => setOpenId(openId === post.ID ? null : post.ID)}
        />
      ))}
    </div>
  );
}
