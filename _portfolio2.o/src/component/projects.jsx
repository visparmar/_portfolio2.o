import { JSONparser } from '../jsonRenderer'

let projectJson = {
  "title": "My Projects",
  "subtitle": "Things I've Built",

  "intro": {
    "title": "Turning Ideas Into Applications",
    "description": "Here are some of the projects I've built using modern technologies and development practices."
  },

  "featured": [
    {
      "name": "Project One",
      "description": "A full stack web application built to solve a real-world problem.",
      "technologies": ["React", "Node.js", "MongoDB"],
      "github": "#",
      "live": "#"
    },
    {
      "name": "Project Two",
      "description": "A modern and responsive web application with a clean user experience.",
      "technologies": ["React", "JavaScript", "CSS"],
      "github": "#",
      "live": "#"
    }
  ],

  "button": {
    "text": "View All Projects",
    "link": "/projects"
  },

  "id": 4
}

export const Projects = () => {
  return (
    <div className="flex  h-screen  text-white pt-10">
          <JSONparser json={projectJson} />
        </div>
  )
}
