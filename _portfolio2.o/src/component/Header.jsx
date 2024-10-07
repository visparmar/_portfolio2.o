import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <div className='flex justify-between px-8 py-8 text-2xl  '>
   <div className='flex flex-col leading-5 w-max'>
    <span className='text-white w-max'>vikas</span>
   <span className='text-ast-global-color-1 w-max'>web-dev</span>
   </div>


   <div className='hidden md:flex gap-6 px-20 text-ast-global-color-3'>
    <span>_home</span>
    <span>_about</span>
    <span>_portfolio</span>
    <span>_services</span>
    <span>_resume</span>
    <span>_contact</span>
   </div>
   <div className='flex md:hidden text-ast-global-color-0'>
    <GiHamburgerMenu/>
   </div>
    </div>
  )
}

export default Header