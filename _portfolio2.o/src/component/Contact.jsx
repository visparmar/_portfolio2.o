import { JSONparser } from "../jsonRenderer";


let contactJson = {
  "title": "Let's Connect",

  "description": "Have a project or opportunity in mind? Feel free to get in touch.",

  "email": "visparmar119@gmail.com",

  "location": "India",

  "social": {
    "github": "https://github.com/visparmar",
    "linkedin": "https://www.linkedin.com/in/vikas-parmar-2492b91ba/"
  },

  // "button": {
  //   "text": "Send Message",
  //   "link": "/contact"
  // },

  "id": 7
}

const Contact = () => {
  return (
   <div className="flex  h-screen  text-white pt-10">
         <JSONparser json={contactJson} />
       </div>
  );
};

export default Contact;
