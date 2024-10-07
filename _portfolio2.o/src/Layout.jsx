import { Outlet, Link } from 'react-router-dom';
import FileDetails from "./component/FileDetails"
import { RxCross2 } from "react-icons/rx";
import FileContext from "./context/FileContext"
import { useContext } from 'react';
import { FaReact } from 'react-icons/fa';


function Layout() {
    const {openFile,setOpenFile} = useContext(FileContext)
    console.log(openFile)
    const deleteFileFromTopBar = (key) =>{
        const updatedPerson = { ...openFile }; // Create a shallow copy
        delete updatedPerson[key]; // Remove the specified key
        setOpenFile(updatedPerson); 
    }
    return (
        <div className='flex w-screen h-screen'>
            <div className="h-full flex">
                <FileDetails />
            </div>
            {/* The child routes will be rendered here */}
            <div className=' w-full h-full'>
                <div className='h-full overflow-hidden hover:overflow-y-auto custom-scrollbar '>
                <div className='w-full flex fixed bg-[#181818]'>
                    {Object.keys(openFile).length > 0 &&  Object.keys(openFile).map((key)=>{
                        return(
                            <span key={key} className='border-t-2  w-max bg-[#181818] border border-[#2B2B2B] px-4 py-2 flex items-center gap-5 group'> 
                            <FaReact  className='text-blue-400'/>
                        <Link to={key}>{openFile[key]}</Link>
                         <RxCross2 className='invisible group-hover:visible' onClick={()=>deleteFileFromTopBar(key)}/>
                    </span>
                        )
                    })
                    }
                </div>
                <Outlet />
                </div>                
            </div>
        </div>
    );
}

export default Layout;
