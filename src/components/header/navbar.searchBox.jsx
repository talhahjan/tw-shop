import React from 'react'
import { MdSearch } from 'react-icons/md'
const SearchBox = () => {
 return (
  <div className="flex justify-between items-center h-8">
  <span className='bg-gradient-to-r from-pink-500 to-pink-600 h-full  text-white text-xs flex items-center p-2 rounded-l-lg '>Search</span>
  <input className='w-64 h-full flex-1 form-control border border-x peer  focus:drop-shadow-[0_0_8px_0_#ff5722] peer' />
  <span className='bg-gradient-to-tl from-pink-500 to-pink-600 h-8 p-2 text-white flex items-center rounded-r-lg '><MdSearch /></span>
   </div>
  )
}

export default SearchBox