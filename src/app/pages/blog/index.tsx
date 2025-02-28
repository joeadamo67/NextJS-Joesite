import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  // Sample blog posts
  const posts = [
    {
      id: '1',
      title: 'Getting Started with Next.js',
      slug: 'getting-started-with-nextjs',
      excerpt: 'Learn how to build modern web applications with Next.js, the React framework for production.',
      date: 'February 15, 2023',
      category: 'Web Development',
    },
    {
      id: '2',
      title: 'Why I Love Tailwind CSS',
      slug: 'why-i-love-tailwind-css',
      excerpt: 'Tailwind CSS has changed how I approach styling websites. Here\'s why I think it\'s amazing.',
      date: 'January 28, 2023',
      category: 'CSS',
    },
    {
      id: '3',
      title: 'Designing with a Vibrant Color Palette',
      slug: 'designing-with-vibrant-colors',
      excerpt: 'How to use bold colors effectively in your web designs without overwhelming users.',
      date: 'December 15, 2022',
      category: 'Design',
    }
  ];

  return (
    <div className="space-y-8">
      <Head>
        <title>Blog - Joe Adamo</title>
        <meta name="description" content="My blog posts on web development and design" />
      </Head>

      {/* Blog header */}
      <div className="bg-[#FFDE7D] rounded-3xl p-8 text-center shadow-custom">
        <h1 className="text-4xl font-bold text-[#F6416C] mb-4">My Blog</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-800">
          Sharing my thoughts on web development and design.
        </p>
      </div>

      {/* Blog posts */}
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="card hover:shadow-custom-lg transition-shadow">
            <div className="flex flex-col">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                <h2 className="text-2xl font-semibold text-[#00B8A9] hover:text-opacity-80 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <span className="text-sm text-gray-500">{post.date}</span>
              </div>
              <span className="inline-block px-3 py-1 bg-[#F6416C] bg-opacity-10 rounded-full text-xs text-[#F6416C] font-medium mb-4 w-fit">
                {post.category}
              </span>
              <p className="mb-4 text-gray-700">{post.excerpt}</p>
              <Link 
                href={`/blog/${post.slug}`} 
                className="text-[#F6416C] font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}