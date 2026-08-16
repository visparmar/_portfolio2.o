import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ImFilesEmpty } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { VscJson } from "react-icons/vsc";
import FileContext from "../context/FileContext"
import { IoSettingsOutline } from "react-icons/io5";
import { LiaSearchSolid } from "react-icons/lia";
import { VscDebugAlt } from "react-icons/vsc";
import { VscExtensions } from "react-icons/vsc";
import { GrPowerReset } from "react-icons/gr";
import { RiStickyNoteAddLine } from "react-icons/ri";
import { CgFolderAdd } from "react-icons/cg";
import { BsFiletypeHtml } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiEslint, SiPrettier } from "react-icons/si";

const installedExtensionList = [
    {
        icon: FaReact,
        name: "React",
        text: "JavaScript library for building user interfaces.",
    },
    {
        icon: RiTailwindCssFill,
        name: "Tailwind CSS",
        text: "Utility-first CSS framework for rapid UI development.",
    },
    {
        icon: SiEslint,
        name: "ESLint",
        text: "Finds and fixes problems in your JavaScript and TypeScript code.",
    },
    {
        icon: SiPrettier,
        name: "Prettier",
        text: "Opinionated code formatter for consistent code style.",
    },
];

const searchableFiles = [
    {
        file: "Home.jsx",
        path: "/",
        content: `
      Home frontend developer portfolio React JavaScript
      Welcome to my portfolio. I build modern responsive websites.
    `,
    },
    {
        file: "About.jsx",
        path: "about",
        content: `
      About me frontend developer React JavaScript
      I am a passionate developer who builds modern web applications.
    `,
    },
    {
        file: "Services.jsx",
        path: "services",
        content: `
      Services web development frontend development React
      Responsive websites UI development JavaScript applications
    `,
    },
    {
        file: "Contact.jsx",
        path: "contact",
        content: `
      Contact email developer freelance React JavaScript
      Get in touch with me for web development projects.
    `,
    },
    //   {
    //     file: ".gitignore",
    //     path: null,
    //     content: "node_modules dist",
    //   },
    //   {
    //     file: "index.html",
    //     path: null,
    //     content: "React portfolio application",
    //   },
    //   {
    //     file: "package-lock.json",
    //     path: null,
    //     content: "react react-dom react-router-dom",
    //   },
    //   {
    //     file: "README.md",
    //     path: null,
    //     content: "portfolio frontend developer React JavaScript",
    //   },
];




const FileDetails = () => {
    const { openFile, setOpenFile } = useContext(FileContext)
    // eslint-disable-next-line no-unused-vars
    const [searchData, setSearchData] = useState([]);
    const [isDragging, setIsDragging] = useState(false);
    const [sidBarWidth, setSideBarWidth] = useState(200)
    const [filesStatus, setFileStatus] = useState({
        mainStatus: true,
        src: true,
        component: true
    })

    const [sideBar, setSidebar] = useState('files')
    const handleClicks = (id, value) => {
        setFileStatus((prev) => ({
            ...prev,
            [id]: !value
        }));
    };
    const [installedExtensions, setInstalledExtensions] = useState(false);

    const handleFiles = (e) => {
        const { id } = e.target
        const content = e.target.textContent;
        setOpenFile((prev) => ({
            ...prev,
            [id]: content
        }))
    }

    const handleFilesInSearch = (e) => {
        const { id } = e.currentTarget
        const content = e.currentTarget.dataset.file;
        setOpenFile((prev) => ({
            ...prev,
            [id]: content
        }))
    }

    const handleChangeSideBar = (e) => {
        const item = e.target.closest("[data-item]");

        if (!item) return;

        setSidebar(item.dataset.item)
    };

    const handleFileSearch = (e) => {

        let value = e.target.value;

        const results = searchableFiles
            .map((item) => {
                const matchedLines = item.content.split("\n").map((line, index) => ({
                    line: line.trim(),
                    lineNumber: index + 1,
                })).filter((item) =>
                    item.line.toLowerCase().includes(value.toLowerCase())
                );

                if (matchedLines.length > 0) {
                    return {
                        ...item,
                        matches: matchedLines,
                    };
                }

                return null;
            }).filter(Boolean);
        // console.log(value)
        setSearchData(results)
        // searchableFiles
    }

    const handleMouseMove = (e) => {
        const newWidth = e.clientX - 65;

        // console.log(window.innerWidth, e.clientX)

        if (newWidth >= 190 && newWidth <= 1000) {
            setSideBarWidth(newWidth);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    useEffect(() => {
        if (!isDragging) return;

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [isDragging]);


    return (
        <div className='flex'>
            <div className="text-3xl flex flex-col  justify-between gap-4  h-full bg-[#181818] border border-[#2B2B2B]">
                <div
                    className="flex flex-col gap-6"
                    onClick={handleChangeSideBar}
                >
                    <div
                        data-item="files"
                        className={`w-full px-4 py-4 ${sideBar === 'files' ? 'border-[#42a7f5] border-l-2' : ''}  cursor-pointer`}
                    >
                        <ImFilesEmpty />
                    </div>

                    <div
                        data-item="search"
                        className={`w-full px-4 py-2 ${sideBar === 'search' ? 'border-[#42a7f5] border-l-2' : ''}  text-[#868686] cursor-pointer`}
                    >
                        <LiaSearchSolid />
                    </div>

                    <div
                        data-item="debug"
                        className={`w-full px-4 py-2 ${sideBar === 'debug' ? 'border-[#42a7f5] border-l-2' : ''}  text-[#868686] cursor-pointer`}
                    >
                        <VscDebugAlt />
                    </div>

                    <div
                        data-item="extensions"
                        className={`w-full px-4 ${sideBar === 'extensions' ? 'border-[#42a7f5] border-l-2' : ''}  py-2 text-[#868686] cursor-pointer`}
                    >
                        <VscExtensions />
                    </div>
                </div>
                <div className='w-full px-4 py-2 text-[#868686]'>
                    <IoSettingsOutline />
                </div>
            </div>

            {/* Main content with directory structure */}

            <div
            style={{width: `${sidBarWidth}px`}}
             className="flex flex-col px-4 bg-[#181818] border border-[#2B2B2B] gap-2 pt-3">

                {sideBar === 'files' && <div>
                    {/* Portfolio heading */}
                    <span className="flex items-center gap-2" id='mainStatus' onClick={() => handleClicks('mainStatus', filesStatus.mainStatus)}>
                        <IoIosArrowForward className={`${filesStatus.mainStatus ? "rotate-90" : ""}`} />
                        <span className="ml-2">Portfolio</span>
                        <RiStickyNoteAddLine />
                        <CgFolderAdd />
                        <GrPowerReset />
                    </span>

                    {/* File list */}
                    {filesStatus.mainStatus && (
                        <ul className="pl-4 flex flex-col gap-1">
                            <li className="flex items-center">
                                <IoIosArrowForward />
                                <span className="ml-2 text-[#868686]">node_modules</span>
                            </li>
                            <li className="flex items-center">
                                <IoIosArrowForward />
                                <span className="ml-2 text-[#868686]">public</span>
                            </li>
                            <li className="flex flex-col gap-1" id="src" >
                                <span className='flex items-center' onClick={() => handleClicks('src', filesStatus.src)}>
                                    <IoIosArrowForward className={`${filesStatus.src ? "rotate-90" : ""}`} />
                                    <span className="ml-2">src</span>
                                </span>
                                {filesStatus.src && <div className='flex flex-col' >
                                    <span className='flex pl-2' onClick={() => handleClicks('component', filesStatus.component)}>
                                        <IoIosArrowForward className={`${filesStatus.component ? "rotate-90" : ""}`} />
                                        <span>Components</span>
                                    </span>
                                </div>}
                                {filesStatus.component && filesStatus.src && <div className='flex flex-col pl-4 gap-1'>
                                    <span className='flex  items-center gap-1'>
                                        <FaReact className='text-blue-400' />
                                        <span><Link to="/" id='/' onClick={handleFiles}>Home.jsx</Link></span>

                                    </span>
                                    <span className='flex  items-center gap-1'>
                                        <FaReact className='text-blue-400' />
                                        <span><Link to="/about" id='about' onClick={handleFiles}>About.jsx</Link></span>
                                    </span>
                                    {/* <span className='flex  items-center gap-1'>
                                        <FaReact className='text-blue-400' />
                                        <span><Link to="/services" id='services' onClick={handleFiles}>Services.jsx</Link></span>
                                    </span> */}
                                    <span className='flex  items-center gap-1'>
                                        <FaReact className='text-blue-400' />
                                        <span><Link to="/contact" id='contact' onClick={handleFiles}>Contact.jsx</Link></span>
                                    </span>
                                    <span className='flex  items-center gap-1'>
                                        <FaReact className='text-blue-400' />
                                        <span><Link to="/experience" id='experience' onClick={handleFiles}>Experience.jsx</Link></span>
                                    </span>
                                    <span className='flex  items-center gap-1'>
                                        <FaReact className='text-blue-400' />
                                        <span><Link to="/skills" id='skills' onClick={handleFiles}>Skills.jsx</Link></span>
                                    </span>
                                    <span className='flex  items-center gap-1'>
                                        <FaReact className='text-blue-400' />
                                        <span><Link to="/projects" id='projects' onClick={handleFiles}>Projects.jsx</Link></span>
                                    </span>
                                </div>}
                            </li>
                            <li className="flex items-center">
                                <FaGitAlt className='text-red-400' />
                                <span className="ml-2">.gitignore</span>
                            </li>
                            <li className="flex items-center">
                                <BsFiletypeHtml className='text-red-400' />
                                <span className="ml-2">index.html</span>
                            </li>
                            <li className="flex items-center">
                                <VscJson className='text-yellow-400 font-bold text-xl' />
                                <span className="ml-2">package-lock.json</span>
                            </li>
                            <li className="flex items-center">
                                <VscJson className='text-yellow-400 font-bold text-xl' />
                                <span className="ml-2">README.md</span>
                            </li>
                        </ul>
                    )}
                </div>
                }

                {
                    sideBar === 'search' &&
                    <div className='h-full w-full'>
                        <span className='block mb-5'>Search</span>
                        <input onChange={handleFileSearch} placeholder='Search' className='bg-gray-800 p-1 border-1 outline-none border-gray-300' />


                        {/* File list */}
                        {searchData.map((file) => (
                            <Link key={file.file} to={file.path} id={file.path} data-file={file.file} onClick={handleFilesInSearch} >
                                <div className='cursor-pointer' >
                                    <div className="font-medium">
                                        {/* {file.file} */}
                                        <span>{file.file}</span>
                                    </div>

                                    {file.matches.map((match) => (
                                        <div
                                            key={match.lineNumber}
                                            className="ml-4 text-sm text-gray-400"
                                        >
                                            {/* <span className="mr-3 text-gray-600">
                                                {match.lineNumber}
                                            </span> */}

                                            <span>-</span>{match.line}
                                        </div>
                                    ))}
                                </div>
                            </Link>

                        ))}

                    </div>
                }

                {sideBar === 'extensions' &&
                    <div>
                        <p className="flex items-center gap-2">EXTENSIONS</p>
                        <input className='bg-gray-500 px-2 outline-none '
                            placeholder='Search Extension In MarketPlace' />
                        <p className='text-sm flex gap-2 py-2 items-center'
                            onClick={() => setInstalledExtensions(!installedExtensions)}>
                            {installedExtensions ? <FaAngleDown /> : <FaAngleRight />}
                            <span>INSTALLED</span>
                        </p>

                        {installedExtensions === true &&
                            <div className="flex flex-col gap-4">
                                {installedExtensionList.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 rounded-md p-3 hover:bg-[#2a2a2a] transition-colors"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-[#1f1f1f]">
                                                <Icon size={30} className="text-blue-500" />
                                            </div>

                                            <div className="flex flex-col">
                                                <span className="text-white font-medium">{item.name}</span>
                                                <p className="text-sm text-gray-400">{item.text}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        }

                    </div>
                }


            </div>

            {/* <div
                onMouseDown={() => setIsDragging(true)}
                className="h-full w-[5px] cursor-col-resize hover:bg-blue-500"
            /> */}
            <div
                onMouseDown={() => setIsDragging(true)}
                className={`h-full w-[5px] flex-shrink-0 cursor-col-resize transition-colors ${isDragging
                        ? "bg-blue-500"
                        : "hover:bg-blue-500"
                    }`}
/>
        </div>
    )
}

export default FileDetails