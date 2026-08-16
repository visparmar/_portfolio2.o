import { JSONparser } from "../jsonRenderer"

let homeJson = {
  "name": "Vikas Parmar",
  "greeting": "Hello, I'm",
  "title": "Full Stack Developer",
  "specialization": "React & Node.js Specialist",
  "hero": {
    "heading": "Bringing Ideas to Life",
    "description": "I build efficient, scalable, and user-friendly web applications with a passion for solving real-world problems. Whether it's frontend with React or backend with Node.js, I bring a holistic approach to development."
  },
  "skills": [
    "React",
    "Node.js",
    "Frontend Development",
    "Backend Development",
    "Full Stack Development"
  ],
  "resume": {
    "download_link": "https://github.com/visparmar/_portfolio2.o/raw/5ec8d0038f17dbf7365e2fea966a8e2ebcf8e976/Software_Developer_Vikas_parmar.pdf?utm_source=chatgpt.com",
  },
  "lineNumbers": 30
}

// bg-gradient-to-b from-gray-900 via-gray-800 to-black
const Home = () => {
  return (
   <div className="flex  h-screen  text-white pt-10">
             <JSONparser json={homeJson} />
           </div>

  )
}

export default Home