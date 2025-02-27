import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About Me - Your Name</title>
        <meta name="description" content="Learn more about me and my background" />
      </Head>

      <div className="space-y-8">
        {/* About header */}
        <div className="bg-secondary bg-opacity-20 rounded-2xl p-8 text-center">
          <h1 className="text-4xl font-bold text-primary mb-4">About Me</h1>
          <p className="text-xl text-text max-w-3xl mx-auto">
            Get to know me better: my background, skills, and passions.
          </p>
        </div>

        {/* Bio section */}
        <div className="bg-white bg-opacity-70 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="bg-secondary bg-opacity-30 rounded-xl h-64 w-full"></div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl font-semibold text-primary mb-4">My Story</h2>
              <div className="space-y-4 text-text">
                <p>
                  Hello! I'm [Your Name], a passionate web developer based in [Your Location].
                  I have been working in the tech industry for [X] years, specializing in 
                  [Your Specialties].
                </p>
                <p>
                  My journey into web development began when [brief story about how you 
                  started]. Since then, I've been constantly learning and improving my skills.
                </p>
                <p>
                  When I'm not coding, you can find me [your hobbies or interests].
                  I believe that [your personal philosophy or approach to work].
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Skills section */}
        <div className="bg-white bg-opacity-70 rounded-2xl p-8">
          <h2 className="text-3xl font-semibold text-primary mb-6">My Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "JavaScript & TypeScript",
              "React & Next.js",
              "HTML & CSS",
              "Node.js",
              "Tailwind CSS",
              "Firebase",
              "UI/UX Design",
              "Responsive Web Design",
              "Git & GitHub"
            ].map((skill, index) => (
              <div 
                key={index} 
                className="bg-background rounded-xl p-6 shadow-md flex items-center"
              >
                <div className="w-4 h-4 rounded-full bg-primary mr-4"></div>
                <span className="text-text font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience section */}
        <div className="bg-white bg-opacity-70 rounded-2xl p-8">
          <h2 className="text-3xl font-semibold text-primary mb-6">Experience</h2>
          <div className="space-y-8">
            {[
              {
                role: "Senior Frontend Developer",
                company: "Company Name",
                period: "2021 - Present",
                description: "Leading the frontend development team, implementing new features, and ensuring code quality.",
              },
              {
                role: "Web Developer",
                company: "Previous Company",
                period: "2018 - 2021",
                description: "Developed and maintained client websites, collaborated with designers, and implemented responsive designs.",
              },
              {
                role: "Junior Developer",
                company: "First Company",
                period: "2016 - 2018",
                description: "Assisted senior developers, learned industry best practices, and participated in code reviews.",
              },
            ].map((job, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-md">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h3 className="text-xl font-medium text-primary">{job.role}</h3>
                  <span className="text-sm text-accent font-medium">{job.period}</span>
                </div>
                <p className="text-primary font-medium mb-3">{job.company}</p>
                <p className="text-text">{job.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education section */}
        <div className="bg-white bg-opacity-70 rounded-2xl p-8">
          <h2 className="text-3xl font-semibold text-primary mb-6">Education</h2>
          <div className="space-y-6">
            {[
              {
                degree: "Bachelor of Science in Computer Science",
                institution: "University Name",
                period: "2012 - 2016",
                description: "Focused on web development, algorithms, and data structures. Graduated with honors.",
              },
              {
                degree: "Relevant Certification",
                institution: "Certification Provider",
                period: "2017",
                description: "Additional qualification in a specific technology or methodology.",
              },
            ].map((edu, index) => (
              <div key={index} className="bg-background rounded-xl p-6 shadow-md">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h3 className="text-xl font-medium text-primary">{edu.degree}</h3>
                  <span className="text-sm text-accent font-medium">{edu.period}</span>
                </div>
                <p className="text-primary font-medium mb-3">{edu.institution}</p>
                <p className="text-text">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
