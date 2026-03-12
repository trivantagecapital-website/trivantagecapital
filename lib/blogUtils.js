export function stripHtml(html) {
    if (!html) return '';
    return html
        .replace(/<[^>]*>/g, '')
        .replace(/&hellip;/g, '…')
        .replace(/&nbsp;/g, ' ')
        .trim();
}

export function formatDate(dateString) {
    const date = new Date(dateString);
    return date
        .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
        .toUpperCase();
}

export function getPostLink(post, category) {
    if (String(category).toLowerCase() === 'newsletter' && post.content) {
        const match = post.content.match(/href="([^"]*wp-content\/uploads[^"]*)"/);
        if (match) return match[1];

        const objectMatch = post.content.match(/data="([^"]*wp-content\/uploads[^"]*)"/);
        if (objectMatch) return objectMatch[1];
    }

    return `/insights/${post.slug}`;
}