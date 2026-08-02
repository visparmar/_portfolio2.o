import { useEffect, useState } from "react"

let commandStore = {
    "help": `
Available commands:

about      - Learn about me
skills     - View my technical skills
projects   - Explore my projects
experience - See my experience
education  - View my education
resume     - Download my resume
contact    - Get my contact details
github     - Open my GitHub
linkedin   - Open my LinkedIn
clear      - Clear terminal
`,
    "whoiam": " I am vikas Parmar software develover having 3 yoe",
    about: `I am Vikas Parmar, a Software Developer with 3 years of experience.

I specialize in building modern web applications with clean UI,
scalable backend systems, and great user experiences.`,

    skills: `Frontend:
- React.js
- JavaScript
- TypeScript
- Tailwind CSS
- HTML5
- CSS3

Backend:
- Node.js
- Express.js
- REST APIs

Database:
- MongoDB
- PostgreSQL

Tools:
- Git
- GitHub
- VS Code
- Docker`,

    projects: `Featured Projects:

1. Portfolio Terminal
   - Interactive developer portfolio built with React
   - Includes terminal-based navigation

2. E-Commerce Platform
   - Full-stack shopping application
   - Authentication, cart, payments

3. Real-Time Chat Application
   - WebSocket based messaging system
   - Real-time communication`,

    experience: `Experience:

Software Developer
Duration: 3 Years

Responsibilities:
- Developed responsive web applications
- Built reusable React components
- Created REST APIs and backend services
- Improved application performance
- Collaborated with cross-functional teams`,

    education: `Education:

Bachelor's Degree
Computer Science / Information Technology

Focused on:
- Software Development
- Data Structures
- Database Management
- Web Technologies`,

    resume: `Opening resume...

Resume.pdf
Download started 🚀`,

    contact: `Contact Information:

Email:
vikas@example.com

Location:
India

Available for:
- Full-time opportunities
- Freelance projects
- Collaboration`,

    github: `Opening GitHub profile...

https://github.com/yourusername`,

    linkedin: `Opening LinkedIn profile...

https://linkedin.com/in/yourusername`,

    clear: ""

}

// eslint-disable-next-line react/prop-types
export const Terminal = ({ terminalHeight, setTerminalHeight }) => {
    // const [height, setHeight] = useState(180);
    const [isDragging, setIsDragging] = useState(false);

    const [history, setHistory] = useState([
        {
            command: "",
            text: `Welcome to Vikas's Portfolio Terminal 🚀

Type 'help' to see available commands.`,
        }
    ]);
    const [command, setCommand] = useState("")
    const handleTerminalCommand = () => {

        if (command === "clear") {
            setHistory([]);
        } else {
            setHistory((prev) => [
                ...prev,
                {
                    command: command,
                    text: commandStore[command] || `Command not found`,

                }
            ]);
        }

        setCommand("")
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        // calculate height from bottom
        const newHeight = window.innerHeight - e.clientY;

        if (newHeight >= 100 && newHeight <= 600) {
            setTerminalHeight(newHeight)
        }
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)

        window.addEventListener('mouseup', () => {
            setIsDragging(false);
        })

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }

    }, [isDragging])

    return (
        <div style={{
            height: `${terminalHeight}px`
        }} className={`w-full px-6 overflow-y-auto custom-scrollbar `}>

            {/* Drag handle */}
            <div className="sticky top-0">
                <div
                    onMouseDown={() => setIsDragging(true)}
                    className=" h-1 w-full cursor-row-resize hover:bg-blue-500 transition-colors"
                />

                {/* Terminal tabs */}
                <div className="border-gray-700 border-t bg-[#1E1E1E] py-2 flex gap-4 px-4 ">
                    {["PROBLEMS", "OUTPUT", "DEBUG CONSOLE", "TERMINAL", "GITLENS"].map((item) => (
                        <span
                            className="text-gray-400 text-sm cursor-pointer"
                            key={item}
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <p onMouseDown={() => setIsDragging(true)} className='bg-gray-600 px-4 '>TERMINAL</p>
            </div>

            <span className="flex flex-col mb-4">
                {history.map((item, index) => (
                    <div key={index}>
                        <div className="flex gap-1">
                            <p>PS C:\Users\Vikas\portfolio&gt;</p>
                            <p className="text-yellow-300">{item.command}</p>
                        </div>

                        <p className="whitespace-pre-wrap">
                            {item.text}
                        </p>
                    </div>
                ))}

            </span>
            <div className='flex'>
                <p>PS C:\Users\Vikas\portfolio&gt;</p>
                <input
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleTerminalCommand();
                        }
                    }}
                    className="bg-transparent outline-none flex-1 ml-2 text-yellow-300 caret-white"
                    autoFocus
                />
            </div>

        </div>
    )
}
