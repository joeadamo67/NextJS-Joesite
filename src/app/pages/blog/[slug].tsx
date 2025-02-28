import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  // Mock post data - in a real app, you'd fetch this from Firebase based on the slug
  const post = {
    title: 'Getting Started with Next.js',
    date: 'February 15, 2023',
    category: 'Web Development',
    content: `
      <p>Next.js is a powerful React framework that enables you to build server-rendered applications with ease. It provides a great developer experience with features like automatic code splitting, file-system routing, and static site generation.</p>
      
      <h2>Why Choose Next.js?</h2>
      
      <p>There are several reasons why Next.js has become so popular in the React ecosystem:</p>
      
      <ul>
        <li>Built-in server-side rendering (SSR) and static site generation (SSG)</li>
        <li>Automatic code splitting for faster page loads</li>
        <li>Simple file-system based routing</li>
        <li>API routes to build your API alongside your app</li>
        <li>Support for CSS modules</li>
        <li>Fast refresh for instant feedback during development</li>
      </ul>
      
      <h2>Getting Started</h2>
      
      <p>To create a new Next.js project, you can use the following command:</p>
      
      <pre><code>npx create-next-app my-nextjs-app</code></pre>
      
      <p>This command sets up everything automatically for you. If you want to start with a specific template, you can use the --example flag:</p>
      
      <pre><code>npx create-next-app --example with-tailwindcss my-app</code></pre>
      
      <h2>Navigation in Next.js</h2>
      
      <p>Next.js has a built-in Link component for client-side navigation:</p>
      
      <pre><code>import Link from 'next/link'

function NavLink() {
  return (
    &lt;Link href="/about"&gt;
      About
    &lt;/Link&gt;
  )
}</code></pre>
      
      <h2>Conclusion</h2>
      
      <p>Next.js simplifies the process of building React applications by providing a robust framework with sensible defaults and powerful features. Whether you're building a small personal website or a large-scale application, Next.js has the tools to help you succeed.</p>
    `,
  };

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{post.title} - Your Name</title>
        <meta name="description" content={post.content.substring(0, 160)} />
      </Head>

      <article className="max-w-2xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-500">{post.date} | {post.category}</p>
        <div className="mt-6 prose prose-lg" dangerouslySetInnerHTML={{ __html: post.content }} />
        <div className="mt-6">
          <Link href="/blog">
            <a className="text-blue-500 hover:underline">← Back to Blog</a>
          </Link>
        </div>
      </article>
    </>
  );
}
