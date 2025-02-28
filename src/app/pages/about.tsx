import Head from 'next/head';

export default function About() {
  return (
    <div className="space-y-8">
      <Head>
        <title>About Me - Joe Adamo</title>
        <meta name="description" content="Learn more about me and my background" />
      </Head>

      {/* About header */}
      <div className="bg-[#F6416C] rounded-3xl p-8 text-center text-white shadow-custom">
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-xl max-w-3xl mx-auto">
          Get to know me better: my background, skills, and passions.
        </p>
      </div>
      
      {/* Bio section */}
      <div className="card">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-[#00B8A9] bg-opacity-20 rounded-3xl h-64 w-full"></div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-3xl font-semibold text-[#00B8A9] mb-4">My Story</h2>
            <div className="space-y-4">
              <p>
                Hello! I'm Joe Adamo, a passionate web developer based in [Your Location].
                I have been working in the tech industry for several years, specializing in 
                modern web development with React and Next.js.
              </p>
              <p>
                When I'm not coding, you can find me exploring nature trails, 
                experimenting with new recipes, or reading science fiction novels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}