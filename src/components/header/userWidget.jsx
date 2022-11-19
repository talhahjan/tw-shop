import React from 'react'

import {FaFacebookF} from 'react-icons/fa';

import {FcGoogle} from'react-icons/fc';

const UserWidget = ({btnIcon}) => {
  return (
    <div className="dropdown relative flex items-center">
      <button
        className="dropdown-toggle text-xl hover:text-pink-500 focus:text-pink-500"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {btnIcon}
      </button>
      <ul
        className="
          dropdown-menu
          min-w-max
          absolute
          bg-white
          text-base
          z-50
          float-left
          px-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-10
          hidden
          m-0
          bg-clip-padding
          border-none
        "
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
        <h4 className='text-sm text-slate-500 py-1 text-center'>welcome to T.J Shoes Collection</h4>
<button className='w-full h-7 my-2 bg-gradient-to-br from-pink-500 to-pink-600 text-white uppercase text-sm rounded-md hover:from-pink-600 hover:to-pink-500 hover:shadow-lg hover:shadow-pink-500'>Login</button>
<h4 className='text-sm text-slate-500 py-1 text-center'>Use Social Accounts</h4>
<button className='w-full h-7 my-2 text-black capitalize text-sm rounded-md border border-slate-300 hover:bg-blue-500 hover:bg-opacity-10 flex items-center justify-center gap-2'><FcGoogle />Login With Google</button>
<button className='w-full h-7 my-2 text-black capitalize text-sm rounded-md border border-slate-300 hover:bg-blue-500 hover:bg-opacity-10 flex items-center justify-center gap-2'><FaFacebookF className='text-indigo-500' />Login With Facebook</button>
<p className='text-sm py-2'><a href="#" className='hover:text-slate-500 duration-300'>New Customer ?</a></p>
<button className='w-full h-7 my-2 bg-gradient-to-br from-pink-500 to-pink-600 text-white uppercase text-sm rounded-md hover:from-pink-600 hover:to-pink-500 hover:shadow-lg hover:shadow-pink-500'>Register</button>
        </li>
        
      </ul>
    </div>

  )
}

export default UserWidget