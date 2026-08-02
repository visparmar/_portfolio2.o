import { JSONparser } from "../jsonRenderer"

let json = {
  "greeting": "Hello, I'm",
  "name": "Vikas Parmar",
  "role": "Full Stack Developer | React & Node.js Specialist",
  id:2,

  "intro": {
    "title": "Bringing Ideas to Life",
    "description": "I build efficient, scalable, and user-friendly web applications."
  },

  "button": {
    "text": "Resume",
    "link": "/resume.pdf"
  }
}


// bg-gradient-to-b from-gray-900 via-gray-800 to-black
const Home = () => {

  return (
    <div className="flex  h-screen  text-white pt-10">
      <JSONparser json={json} />
    </div>

  )

}

export default Home