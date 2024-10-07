import { useState } from "react"
import FileContext from "./FileContext.js"

const FileContextProvider = ({children}) => {
    const [openFile, setOpenFile] = useState({
        '/': 'Home.jsx',
        about: 'About.jsx',
        services: 'Services.jsx',
        contact: 'Contact.jsx'
      });
      
    return (
        <FileContext.Provider value={{openFile,setOpenFile}}>
              {children}
        </FileContext.Provider>
    )

}

export default FileContextProvider