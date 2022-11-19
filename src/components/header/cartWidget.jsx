import React from 'react'
import {MdShoppingCart} from 'react-icons/md';
import {BiTrash} from 'react-icons/bi';

const CartWidget = ({btnIcon}) => {
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
        <div className="min-w-[300px] mb-5">
<h3 className='font-semibold text-base text-center'>My cart</h3>


<div className="flex justify-between gap-2 my-2 border-b">
  <div className="thumbnail">
    <img src="https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?b=1&s=170667a&w=0&k=20&c=MPOqUwkp7g0MawLUQsECgl1ME12YWNnqsFwracR9HQw=" className="h-20 w-20 rounded-md shadow-md" alt="" />
    </div>
  <div className="info"><span className='font-semibold'>Best Addidas Shoes</span>
  <p className='text-sm text-gray-600'>Color : Red</p>
  <p className='text-sm text-slate-600'>size : 36</p>
  <h2 className='font-semibold'>$123</h2>
  </div>
<div> <button className="bg-slate-200 rounded-md p-2 hover:shadow-md hover:bg-red-500 hover:text-white duration-300"><BiTrash /></button></div>
</div>

<div className="flex justify-between gap-2 my-2 border-b">
  <div className="thumbnail">
    <img src="https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?b=1&s=170667a&w=0&k=20&c=MPOqUwkp7g0MawLUQsECgl1ME12YWNnqsFwracR9HQw=" className="h-20 w-20 rounded-md shadow-md" alt="" />
    </div>
  <div className="info"><span className='font-semibold'>Best Addidas Shoes</span>
  <p className='text-sm text-gray-600'>Color : Red</p>
  <p className='text-sm text-slate-600'>size : 36</p>
  <h2 className='font-semibold'>$123</h2>
  </div>
<div> <button className="bg-slate-100 rounded-md p-2 hover:shadow-md hover:bg-red-500 hover:text-white duration-300"><BiTrash /></button></div>
</div>

<div className="flex justify-between gap-2 my-2 border-b">
  <div className="thumbnail">
    <img src="https://media.istockphoto.com/id/1303978937/photo/white-sneaker-on-a-blue-gradient-background-mens-fashion-sport-shoe-sneakers-lifestyle.jpg?b=1&s=170667a&w=0&k=20&c=MPOqUwkp7g0MawLUQsECgl1ME12YWNnqsFwracR9HQw=" className="h-20 w-20 rounded-md shadow-md" alt="" />
    </div>
  <div className="info"><span className='font-semibold'>Best Addidas Shoes</span>
  <p className='text-sm text-gray-600'>Color : Red</p>
  <p className='text-sm text-slate-600'>size : 36</p>
  <h2 className='font-semibold'>$123</h2>
  </div>
<div> <button className="bg-slate-100 rounded-md p-2 hover:shadow-md hover:bg-red-500 hover:text-white duration-300"><BiTrash /></button></div>
</div>

  <div className="flex justify-between my-2">
    <span className='font-semibold'>Total</span>
    <span className='text-slate-600'>$1230.00</span>
  </div>
<div className="flex justify-between items-center">
<button className='h-8 my-2 px-2 hover:bg-gradient-to-br hover:from-pink-500 hover:to-pink-600 text-black border border-pink-400 uppercase text-sm hover:text-white duration-300  rounded-xl hover:shadow-lg hover:shadow-pink-500'>
 Keep Shopping <MdShoppingCart className='inline-block pl-2 text-xl'/>
 </button>
<button className='h-8 my-2 px-2 bg-gradient-to-br from-pink-500 to-pink-600 text-white uppercase text-sm rounded-xl hover:from-pink-600 hover:to-pink-500 hover:shadow-lg hover:shadow-pink-500'>Check Out <BiTrash className='inline-block pl-2 text-xl'/></button>
</div>
</div>

        </li>
        
      </ul>
    </div>    
  )
}

export default CartWidget


