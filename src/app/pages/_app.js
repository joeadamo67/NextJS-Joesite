import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Your Name - Personal Website</title>
        <meta name="description" content="Personal website showcasing my work and thoughts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-8">
        {/* Hero section */}
        <div className="bg-secondary bg-opacity-20 rounded-2xl p-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">Welcome to My Personal Website</h1>
          <p className="text-xl text-text mb-6">
            Web Developer | Designer | Content Creator
          </p>
          <div className="flex justify-center space-x-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-opacity-90 transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="/about" 
              className="px-6 py-3 bg-accent text-white rounded-xl hover:bg-opacity-90 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Featured work section */}
        <div className="bg-white bg-opacity-70 rounded-2xl p-8">
          <h2 className="text-3xl font-semibold text-primary mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-background rounded-xl p-6 shadow-md">
                <div className="h-40 bg-secondary bg-opacity-30 rounded-lg mb-4"></div>
                <h3 className="text-xl font-medium text-primary mb-2">Project {item}</h3>
                <p className="text-text mb-4">
                  A brief description of this amazing project and the technologies used.
                </p>
                <a 
                  href="#" 
                  className="text-accent hover:underline"
                >
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Latest blog posts */}
        <div className="bg-white bg-opacity-70 rounded-2xl p-8">
          <h2 className="text-3xl font-semibold text-primary mb-6">Latest Blog Posts</h2>
          <div className="space-y-6">
            {[1, 2].map((item) => (
              <div key={item} className="bg-background rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-medium text-primary mb-2">Blog Post Title {item}</h3>
                <p className="text-sm text-text mb-4">Published on January {item}, 2023</p>
                <p className="text-text mb-4">
                  This is a preview of the blog post content. Click below to read more...
                </p>
                <a 
                  href="#" 
                  className="text-accent hover:underline"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact section */}
        <div id="contact" className="bg-secondary bg-opacity-20 rounded-2xl p-8">
          <h2 className="text-3xl font-semibold text-primary mb-6">Get In Touch</h2>
          <p className="text-text mb-6">
            Interested in working together? Feel free to reach out to me!
          </p>
          <div className="bg-white bg-opacity-70 rounded-xl p-6 max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-text mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-text mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-text mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows="4" 
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-6 py-3 bg-primary text-white rounded-xl hover:bg-opacity-90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}