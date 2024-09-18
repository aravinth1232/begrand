"use client"

import React,{useState} from 'react'
import logo from "../../src/assets/logo.png"
import Image from 'next/image'
// import { MdOutlineHorizontalRule } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Links = [
  {id: 1, page : "Acerca"},
  {id: 2, page : "Bienvenido a casa"},
  {id: 3, page : "Agenda tu cita"},
  {id: 4, page : "Contacto"},]


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    
    <>
    
    <section className='  px-4 w-full lg:h-screen lg:w-fit lg:gap-4 border-2 border-black flex flex-row lg:flex-col items-center justify-between lg:justify-around lg:items-center relative lg:static '>

        <div>
        <Image
        className='w-14 lg:w-24'
      src={logo} alt="Picture of the author"
      loading="lazy"
    />
        </div>

    <div className=' fixed top-[4%] right-[5%] lg:static'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative  px-1 w-10 h-8 flex flex-col justify-between items-end lg:items-start group "
      >
        {/* Top line */}
        <span
          className={`block h-[1px] w-full bg-black transition-all duration-300 ease-in-out ${
            isOpen ? 'w-full' : 'group-hover:w-1/2'
          }`}
        ></span>
        {/* Middle line */}
        <span
          className="block h-[1px] w-1/2 bg-black transition-all duration-300 ease-in-out"
        ></span>
        {/* Bottom line */}
        <span
          className={`block h-[1px] w-full bg-black transition-all duration-300 ease-in-out ${
            isOpen ? 'w-full' : 'group-hover:w-1/2'
          }`}
        ></span>
      </button>
      </div>

      <div
        className={`fixed top-0 left-[0%] h-screen w-full lg:w-1/2 bg-gray-500 text-white p-6 transition-transform duration-300 ease-in-out  z-40  flex flex-col lg:items-start lg:px-16 ${
          isOpen ? 'translate-x-0' : '-translate-x-full  '
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="self-end text-5xl font-thin mb-8 lg:self-auto "
        >
          &times; {/* Close button (×) */}
        </button>
        {/* Sidebar content */}
        
        <div>{
          Links.map((link,index)=>(
          
            <div 
            className={`mb-4 flex flex-col gap-3 lg:gap-0 transition-opacity duration-500 ease-in-out ${
              isOpen ? 'opacity-100 delay-800' : 'opacity-0'}`}
            key={index}>
            <p>{`0${link.id}`}</p>
            <h1 className='text-3xl lg:text-6xl pl-4 lg:pl-8'>{link.page}</h1>
            </div>

          ))
          
          }</div>

      </div>


        <div className='hidden lg:flex flex-col gap-10 '>
        
          <FaFacebookF size={20} />
          <FaInstagram size={20}/>

        </div>

    </section>
    
    
    </>

)
}

export default Header



// <div>
//         <button  className='text-5xl hover:text-3xl  transition-all duration-300 ' >
//           <span ><MdOutlineHorizontalRule /></span>
//           <span><MdOutlineHorizontalRule /></span>
//           <span><MdOutlineHorizontalRule /></span>
//         </button>
//       </div>