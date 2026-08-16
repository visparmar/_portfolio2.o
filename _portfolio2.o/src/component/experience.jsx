import { JSONparser } from "../jsonRenderer"

let experienceJson = {
  "title": "Experience",
  "subtitle": "My Journey",

  "intro": {
    "title": "Learning, Building, Growing",
    "description": "My experience has helped me develop strong problem-solving skills and a practical understanding of modern web development."
  },

  "timeline": [
    {
      "role": "Full Stack Developer",
      "company": "Company Name",
      "duration": "2025 - Present",
      "description": "Building and maintaining scalable web applications using React, Node.js, and APIs."
    },
    {
      "role": "Web Developer Intern",
      "company": "Company Name",
      "duration": "2024 - 2025",
      "description": "Worked on responsive interfaces, backend APIs, and real-world development projects."
    }
  ],

  "id": 5
}

export const Experience = () => {
  return (
    <div className="flex  h-screen  text-white pt-10">
             <JSONparser json={experienceJson} />
           </div>
  )
}
