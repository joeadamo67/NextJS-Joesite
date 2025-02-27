import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Blog() {
  // Mock blog data - would be fetched from Firebase in a real implementation
  const initialPosts = [
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
      title: 'Firebase Authentication in React',
      slug: 'firebase-authentication-in-react',
      excerpt: 'Implementing user authentication in your React apps is easy with Firebase. Here\'s a step-by-step guide.',
      date: 'January 10, 2023',
      category: 'Firebase',
    },
    {
      id: '4',
      title: 'Building a Personal Portfolio',
      slug: 'building-a-personal-portfolio',
      excerpt: 'Tips and tricks for creating an effective personal portfolio website that showcases your skills.',
      date: 'December 20, 2022',
      category: 'Career',
    },
    {
      id: '5',
      title: 'Responsive Design Best Practices',
      slug: 'responsive-design-best-practices',
      excerpt: 'Ensure your website looks great on all devices with these responsive design principles.',
      date: 'December 5, 2022',
      category: 'Web Design',
    },
  ];

  const [posts] = useState(initialPosts);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get unique categories
  const categories = ['All', ...new Set(posts.map(post => post.category))];

  // Filter posts by category
  const filteredPosts = selectedCategory === 'All' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Head>
        <title>Blog - Your Name</title>
        <meta name="description" content="Read my latest thoughts and tutorials on web development and design" />
      </Head>

      <div className="space-y-8">
        {/* Blog header */}
        <div className="bg-secondary bg-opacity-20 rounded-2xl p-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">My Blog</h1>
          <p className="text-xl text-text max-w-3xl mx-auto">
            Sharing my thoughts, experiences, and tutorials on web development and design.
          </p>
        </div>

        {/* Blog content */}
        <div className="bg-white bg-opacity-70 rounded-2xl p-8">
          {/* Category filter */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-4">Filter by Category</h2>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-background text-text hover:bg-primary hover:bg-opacity-20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog posts */}
          <div className="space-y-6">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-background rounded-xl p-6 shadow-md">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-2">
                  <h2 className="text-2xl font-semibold text-primary">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <span className="text-sm text-accent">{post.date}</span>
                </div>
                <span className="inline-block px-3 py-1 bg-secondary bg-opacity-20 rounded-lg text-xs text-secondary font-medium mb-4">
                  {post.category}
                </span>
                <p className="text-text mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.slug}`} className="text-accent hover:underline">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
