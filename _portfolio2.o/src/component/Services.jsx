import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen  flex pt-10">
      <div className='flex flex-col gap-2 px-6'>
        {
          Array.from({ length: 30 }).map((_, index) => <span key={index} className='text-[#868686]'>{index + 1}</span>)

        }
      </div>
      {/* Header */}

      <div className='w-full flex flex-col items-center'>
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">Services</h1>
        <p className="text-lg mt-4">What I offer as a Full Stack Developer</p>
      </div>

      {/* Services List */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="border border-[#2B2B2B] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
          <p className="text-lg">
            I develop high-performance websites using modern technologies like React, ensuring responsive design, optimal user experience, and scalability.
          </p>
        </div>

        {/* Service 2 */}
        <div className="border border-[#2B2B2B] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-4">Backend Services</h3>
          <p className="text-lg">
            From RESTful APIs to database management, I create efficient backend architectures using Node.js and MySQL, ensuring security and speed.
          </p>
        </div>

        {/* Service 3 */}
        <div className="border border-[#2B2B2B] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-4">Full Stack Solutions</h3>
          <p className="text-lg">
            Need a complete solution? I provide full-stack services, combining both frontend and backend expertise to deliver end-to-end solutions tailored to your needs.
          </p>
        </div>

        {/* Service 4 */}
        <div className="border border-[#2B2B2B] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-4">API Development & Integration</h3>
          <p className="text-lg">
            I specialize in creating and integrating APIs, enabling seamless communication between your application and other services.
          </p>
        </div>

        {/* Service 5 */}
        <div className="border border-[#2B2B2B] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-4">Performance Optimization</h3>
          <p className="text-lg">
            I optimize existing websites or applications to improve speed, scalability, and overall performance, ensuring the best user experience.
          </p>
        </div>

        {/* Service 6 */}
        <div className="border border-[#2B2B2B] p-6 rounded-lg shadow-lg hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-4">Consulting & Support</h3>
          <p className="text-lg">
            Need advice on your web application or tech stack? I offer consulting services to help you make the right decisions for your project.
          </p>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Services;
