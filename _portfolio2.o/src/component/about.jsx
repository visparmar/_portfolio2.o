
const About = () => {
  return (
    <div className=" flex pt-10">
       <div className='flex flex-col px-6 gap-2'>
        {
          Array.from({ length: 35 }).map((_, index) => <span key={index} className='text-[#868686]'>{index + 1}</span>)

        }
        </div>
      {/* Section Introduction */}
      <div className='w-full flex justify-center'>
      <div>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">About Me</h1>
        <p className="mt-4 text-lg">Who I am and what I do.</p>
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Personal Intro */}
          <h2 className="text-3xl font-semibold">A Full Stack Developer with a Passion for Innovation</h2>
          <p className="text-lg">
            I'm Vikas Parmar, a full-stack web developer with 1.3 years of experience specializing in React for frontend development and Node.js for backend services. I’m driven by a love for building dynamic, efficient, and responsive web applications that solve real-world challenges.
          </p>

          {/* Skills & Expertise */}
          <div className=" p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Skills & Technologies</h3>
            <ul className="grid grid-cols-2 gap-4">
              <li className="text-lg">React.js</li>
              <li className="text-lg">Node.js</li>
              <li className="text-lg">JavaScript (ES6+)</li>
              <li className="text-lg">Tailwind CSS</li>
              <li className="text-lg">Express.js</li>
              <li className="text-lg">MySQL</li>
            </ul>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Experience</h3>
            <p className="text-lg">
              Over the past year and more, I've developed several full-stack projects, including e-commerce platforms, real-time chat applications, and market research tools. My strength lies in designing systems that balance functionality and user experience while ensuring scalable backend architectures.
            </p>
          </div>

          {/* Personal Attributes */}
          
            <h3 className="text-2xl font-semibold mb-4">My Approach</h3>
            <p className="text-lg">
              I’m passionate about continuous learning and strive to stay updated with the latest trends and best practices in the web development world. My process is always centered on understanding the client’s needs, breaking down complex problems, and providing elegant, well-structured solutions.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-8 text-center">
            <h2 className="text-3xl">Let's Build Something Great Together!</h2>
            <button className="mt-4 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default About;
