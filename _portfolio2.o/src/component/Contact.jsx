import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen flex pt-10">

      <div className='flex flex-col gap-2 px-6'>
        {
          Array.from({ length: 30 }).map((_, index) => <span key={index} className='text-[#868686]'>{index + 1}</span>)

        }
      </div>

      {/* Header */}
      <div className='w-full flex flex-col items-center'>
      <h1 className="text-5xl font-bold mb-8">Get In Touch</h1>
      <p className="text-lg text-center mb-12">
        I’m always open to new opportunities and collaborations. Feel free to reach out, and let’s discuss how we can work together!
      </p>

      {/* Contact Form */}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full ">
        <form action="#">
          <div className="mb-6">
            <label className="block text-sm mb-2" htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 text-black rounded-lg" 
              placeholder="Your name" 
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2" htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 text-black rounded-lg" 
              placeholder="Your email" 
              required 
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm mb-2" htmlFor="message">Message</label>
            <textarea 
              id="message" 
              className="w-full px-4 py-2 text-black rounded-lg" 
              placeholder="Your message" 
              rows="5" 
              required 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-indigo-600 rounded-lg hover:bg-indigo-500 transition">
            Send Message
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Contact;
