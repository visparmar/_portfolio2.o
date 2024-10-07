
// bg-gradient-to-b from-gray-900 via-gray-800 to-black
const Home = () => {
  return (
    <div className="flex  h-screen  text-white pt-10">

       <div className='flex flex-col gap-2 px-6'>
        {
          Array.from({ length: 30 }).map((_, index) => <span key={index} className='text-[#868686]'>{index + 1}</span>)

        }
      </div>
    {/* Hero Section */}
    <div className="w-full flex flex-col items-center">
    <div className="text-center space-y-4">
      <h4 className="text-lg">Hello, I'm</h4>
      <h1 className="text-6xl font-bold">Vikas Parmar</h1>
      <p className="text-xl font-light">Full Stack Developer | React & Node.js Specialist</p>
    </div>

    {/* Highlight Skills */}
    <div className="mt-12 space-y-6">
      <h2 className="text-4xl">Bringing Ideas to Life</h2>
      <p className="text-lg max-w-xl text-center">
        I build efficient, scalable, and user-friendly web applications with a passion for solving real-world problems. Whether it's frontend with React or backend with Node.js, I bring a holistic approach to development.
      </p>
    </div>

    {/* Call to Action */}
    <div className="mt-8">
      <button className="px-8 py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition">
        Resume
      </button>
    </div>
    </div>
    
  </div>

  )
}

export default Home