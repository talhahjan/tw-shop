import React from 'react'
import {MdHome} from 'react-icons/md';
import {TbDiscount} from 'react-icons/tb';
import {FaMale,FaFemale, FaChild} from 'react-icons/fa';
// md:after:duration-150 md:relative md:after:absolute  md:after:bg-pink-500 md:after:w-0 md:after:h-0.5 md:after:left-0 md:after:-bottom-2 md:hover:after:w-1/3
const NavMenu = ({showMenu}) => {
  return (
   <ul className={`absolute ${showMenu ? 'left-0': '-left-[200%]'} top-14 bg-gradient-to-tr from-gray-500 via-gray-800 to-black md:bg-none duration-300 md:transition-none h-screen w-[70vw]  md:h-full md:w-auto md:static flex flex-col md:flex-row items-start md:items-center p-4 md:p-0 gap-2 text-white md:text-inherit z-10`}>
   <li className='w-4/5'><a href="#home" className='flex items-center p-2 gap-2 hover:bg-slate-700 bg-opacity-10 md:hover:bg-inherit rounded-md bg-gradient-to-tr from-pink-500 to-pink-600 md:bg-none duration-200 border border-pink-700 md:border-none md:relative md:after:absolute md:after:left-2/5 md:after:right-2/4 md:after:bottom-1 md:after:h-0.5 md:after:w-0 md:after:hover:w-2/4 md:after:focus:w-2/4 md:after:duration-500 md:after:translate-x-2/4 md:after:translate-y-2/4 md:after:bg-pink-500'> <MdHome className='md:hidden' />Home</a></li>
   <li className='w-4/5'><a href="#home" className='flex items-center p-2 gap-2 hover:bg-slate-700 bg-opacity-10 md:hover:bg-inherit rounded-md border border-transparent hover:border-slate-600 md:border-none md:relative md:after:absolute md:after:left-2/5 md:after:right-2/4 md:after:bottom-1 md:after:h-0.5 md:after:w-0 md:after:hover:w-2/4 md:after:focus:w-2/4 md:after:duration-500 md:after:translate-x-2/4 md:after:translate-y-2/4 md:after:bg-pink-500'> <FaMale className='md:hidden' />Men's</a></li>
   <li className='w-4/5'><a href="#home" className='flex items-center p-2 gap-2 hover:bg-slate-700 bg-opacity-10 md:hover:bg-inherit rounded-md border border-transparent hover:border-slate-600 md:border-none md:relative md:after:absolute md:after:left-2/5 md:after:right-2/4 md:after:bottom-1 md:after:h-0.5 md:after:w-0 md:after:hover:w-2/4 md:after:focus:w-2/4 md:after:duration-500 md:after:translate-x-2/4 md:after:translate-y-2/4 md:after:bg-pink-500'> <FaFemale className='md:hidden' />Women's</a></li>
   <li className='w-4/5'><a href="#home" className='flex items-center p-2 gap-2 hover:bg-slate-700 bg-opacity-10 md:hover:bg-inherit rounded-md border border-transparent hover:border-slate-600 md:border-none md:relative md:after:absolute md:after:left-2/5 md:after:right-2/4 md:after:bottom-1 md:after:h-0.5 md:after:w-0 md:after:hover:w-2/4 md:after:focus:w-2/4 md:after:duration-500 md:after:translate-x-2/4 md:after:translate-y-2/4 md:after:bg-pink-500'><FaChild className='md:hidden' />Kid's</a></li>
   <li className='w-4/5'><a href="#home" className='flex items-center p-2 gap-2 hover:bg-slate-700 bg-opacity-10 md:hover:bg-inherit rounded-md border border-transparent hover:border-slate-600 md:border-none md:relative md:after:absolute md:after:left-2/5 md:after:right-2/4 md:after:bottom-1 md:after:h-0.5 md:after:w-0 md:after:hover:w-2/4 md:after:focus:w-2/4 md:after:duration-500 md:after:translate-x-2/4 md:after:translate-y-2/4 md:after:bg-pink-500'> <TbDiscount className='md:hidden' />Sales</a></li>
   </ul>
  )
}

export default NavMenu