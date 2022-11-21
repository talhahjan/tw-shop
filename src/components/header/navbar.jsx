import React,{useState} from 'react'
import {MdSearch, MdShoppingCart} from 'react-icons/md';
import {FaBars, FaUserCircle} from 'react-icons/fa';
import SearchBox from './navbar.searchBox';
import NavMenu from './navbar.navMenu';
import UserWidget from './userWidget';
import CartWidget from './cartWidget';
export const NavBar = () => {
const [showSearch, setShowSearch]=useState(false);
const [showMenu, setShowMenu]=useState(false);


  return (
<nav className="bg-transparent h-12 w-full leading-12 flex justify-between items-center font-[Courgette,_cursive] p-4 relative">
<div className={`absolute ${showSearch ? ' block': 'hidden'}  top-16 left-1/2 -translate-x-1/2 w-full max-w-sm flex-1 z-20`} id="searchBox">
<SearchBox />
</div>
<button className="toggler md:hidden" onClick={()=>setShowMenu(!showMenu)}><FaBars /></button>
 <div className="font-bold text-pink-500">Code 350</div>
<NavMenu showMenu={showMenu} />
<div className="flex justify-end items-center gap-2">
<button className='text-xl hover:text-pink-500 focus:text-pink-500' onClick={()=>setShowSearch(!showSearch)}> <MdSearch /></button>
<CartWidget btnIcon={<MdShoppingCart  />} />
<UserWidget btnIcon={<FaUserCircle />} />
</div>
  </nav>
  )
}




