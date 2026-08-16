import { JSONparser } from "../jsonRenderer"

let skillsJson = {
  "title": "Skills",
  "subtitle": "My Tech Stack",

  "intro": {
    "title": "Tools I Use to Build",
    "description": "A collection of technologies and tools I use to design, develop, and deploy web applications."
  },

  "categories": {
    "frontend": [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS"
    ],
    "backend": [
      "Node.js",
      "Express.js",
      "REST APIs"
    ],
    "database": [
      "MongoDB",
      "MySQL"
    ],
    "tools": [
      "Git",
      "GitHub",
      "VS Code",
      "Postman"
    ]
  },

  "id": 6
}

export const Skills = () => {
  return (
     <div className="flex  h-screen  text-white pt-10">
          <JSONparser json={skillsJson} />
        </div>
  )
}
