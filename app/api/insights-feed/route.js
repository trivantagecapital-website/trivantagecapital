export const revalidate = 3600;

const BASE_URL = 'https://public-api.wordpress.com/rest/v1.1/sites/vantagepoint37.wordpress.com';

function escapeXml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function stripHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}

export async function GET() {
  try {
    const res = await fetch(`${BASE_URL}/posts?number=20`);
    const data = await res.json();
    const posts = (data.posts || []).filter(
      (post) =>
        !Object.values(post.categories || {}).some(
          (c) => c.slug?.toLowerCase() === 'careers'
        )
    );

    const items = posts
      .map((post) => {
        const pubDate = new Date(post.date).toUTCString();
        const excerpt = escapeXml(stripHtml(post.excerpt));
        const title = escapeXml(post.title);
        const link = escapeXml(post.URL);
        return `
    <item>
      <title>${title}</title>
      <link>${link}</link>
      <description>${excerpt}</description>
      <pubDate>${pubDate}</pubDate>
      <guid isPermaLink="true">${link}</guid>
    </item>`;
      })
      .join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Trivantage Capital – Insights</title>
    <link>https://www.trivantagecapital.com/insights</link>
    <description>Market perspectives and financial insights from Trivantage Capital</description>
    <language>en-us</language>${items}
  </channel>
</rss>`;

    return new Response(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (err) {
    console.error('insights-feed error:', err);
    return new Response('Failed to generate feed', { status: 500 });
  }
}
