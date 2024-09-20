"use client"

import Image from "next/image";

import h1 from "../assets/smart-home.png"
import h2 from "../assets/smart-home2.png"
import h3 from "../assets/Begrand_Home.webp"
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {

  


  return (
  <>
  <main className="lg:grid place-items-center  grid-cols-2 grid-rows-2  " >

    <div className=" lg:py-10 flex justify-center items-start gap-4 py-5 ">
      <Image
      className=" w-24 lg:w-48 "
        src={h1}
        alt="logo1"
        loading="lazy"

      />
      <Image
      className=" w-24 lg:w-48"
        src={h2}
        alt="logo2"
        loading="lazy"

      />
      </div>

      <div 
      className="relative overflow-hidden   lg:place-self-start  lg:px-5  col-start-2  row-start-1 row-end-3">
      <Image
      className=" h-[30vh] lg:h-[80vh]    transition-all duration-100 ease-out "
        src={h3}
        alt="Begrand Home"
        loading="lazy"

      />


      </div>

      <div className="flex flex-col px-4 py-4 gap-4 lg:px-10 ">
        <div>
        <h1 className="text-gray-500 text-sm lg:text-center lg:text-2xl  " >El primer departamento automatizado que te conoce, te entiende y se adapta a tus necesidades y hábitos, Be Grand Smart Home se conecta con los dispositivos de tu hogar para facilitar lo que haces, ofreciéndote una calidad de vida de otro nivel.</h1>
        </div>
        <div className="self-center">
          <button className="flex border bg-black text-white items-center justify-center gap-2 rounded-3xl px-6 py-2">
            <h1 className="text-base font-medium">COMENCEMOS</h1>
            <span className="border-2 border-blue-500 rounded-full p-1  "><IoIosArrowForward color="#3b82f6" /></span>   
          </button>
          
        </div>
      </div>
  </main>
  </>
  );
}
