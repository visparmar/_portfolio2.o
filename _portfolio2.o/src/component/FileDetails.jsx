import { useContext, useState } from 'react'
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


const FileDetails = () => {
    const {openFile,setOpenFile} = useContext(FileContext)
    const [filesStatus, setFileStatus] = useState({
        mainStatus: true,
        src: true,
        component: true
    })
    const handleClicks = (id, value) => {
        setFileStatus((prev) => ({
            ...prev,
            [id]: !value
        }));
    };

    const handleFiles = (e) =>{
        const {id}=e.target
        const content=e.target.textContent;
       setOpenFile((prev)=>({
        ...prev,
           [id]:content
       })) 
    }

    return (
        <div className='flex'>
            <div className="text-3xl  flex flex-col  justify-between gap-4  h-full bg-[#181818] border border-[#2B2B2B]">
                <div className='flex flex-col gap-6'>
                    <div className='w-full px-4 py-4 border-[#42a7f5] border-l-2'>
                    <ImFilesEmpty  />
                    </div>
                    <div className='w-full px-4 py-2 text-[#868686]'>
                    <LiaSearchSolid  />
                    </div>
                    <div className='w-full px-4 py-2 text-[#868686]'>
                    <VscDebugAlt  />
                    </div>
                    <div className='w-full px-4 py-2 text-[#868686]'>
                    <VscExtensions  />
                    </div>
                </div>
                <div className='w-full px-4 py-2 text-[#868686]'>
                    <IoSettingsOutline/>
                </div>
            </div>

            {/* Main content with directory structure */}
            <div className="flex flex-col px-4 bg-[#181818] border border-[#2B2B2B] gap-2 pt-3">
                {/* Portfolio heading */}
                <span className="flex items-center gap-2" id='mainStatus' onClick={() => handleClicks('mainStatus', filesStatus.mainStatus)}>
                    <IoIosArrowForward className={`${filesStatus.mainStatus ? "rotate-90" : ""}`} />
                    <span className="ml-2">Portfolio</span>
                    <RiStickyNoteAddLine/>
                    <CgFolderAdd/>
                    <GrPowerReset/>
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
                                    <FaReact  className='text-blue-400'/>
                                    <span><Link to="/" id='/' onClick={handleFiles}>Home.jsx</Link></span>

                                </span>
                                <span className='flex  items-center gap-1'>
                                    <FaReact className='text-blue-400'/>
                                    <span><Link to="/about" id='about' onClick={handleFiles}>About.jsx</Link></span>
                                </span>
                                <span className='flex  items-center gap-1'>
                                    <FaReact className='text-blue-400'/>
                                    <span><Link to="/services" id='services' onClick={handleFiles}>Services.jsx</Link></span>
                                </span>
                                <span className='flex  items-center gap-1'>
                                    <FaReact className='text-blue-400'/>
                                    <span><Link to="/contact" id='contact' onClick={handleFiles}>Contact.jsx</Link></span>
                                </span>
                            </div>}
                        </li>
                        <li className="flex items-center">
                            <FaGitAlt className='text-red-400'/>
                            <span className="ml-2">.gitignore</span>
                        </li>
                        <li className="flex items-center">
                            <BsFiletypeHtml className='text-red-400'/>
                            <span className="ml-2">index.html</span>
                        </li>
                        <li className="flex items-center">
                        <VscJson className='text-yellow-400 font-bold text-xl'/>
                            <span className="ml-2">package-lock.json</span>
                        </li>
                        <li className="flex items-center">
                        <VscJson className='text-yellow-400 font-bold text-xl'/>
                            <span className="ml-2">README.md</span>
                        </li>
                    </ul>
                )}

            </div>
        </div>
    )
}

export default FileDetails