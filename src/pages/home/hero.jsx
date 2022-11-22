import React from 'react'

const HeroSection = () => {
  return (

 <section className="bg-gray-100" id="about-us">
 <div className="grid grid-flow-row md:grid-flow-col justify-center items-center gap-10 w-full h-auto py-5">
<div className="div"> <span className='home_new text-sm font-semibold mb-4'>New In</span>

<h1 className="home_title text-lg mb-2 font-semibold">Yezy Boost<br />Sply -3500</h1>

<p className="home_description mb-12">Explore the new collection of sneakers </p>

<button href="#" className="button block bg-gradient-to-tr from-bg-pink-500 bg-pink-600 text-white font-medium duration-300 hover:-translate-y-1 rounded-md w-40 h-12 py-auto text-center whitespace-nowrap">Explore Now</button>
 </div>
          <div className="row-span-full md:col-span-1 mx-5 md:mx-0 md:pr-4 flex justify-center self-center relative hom_sneaker ">
            <div className="w-64 h-64 bg-gradient-to-tr from-pink-500 to-pink-600 rounded-[50%] shadow-lg home_shape"></div>
             <img className="absolute top-6 w-72  -rotate-45" src="images/imghome.png" alt="About Us" />
             </div>
       </div>
    </section>
  )
  }
export default HeroSection




{/* <span className='home_new text-sm font-semibold mb-4'>New In</span>
<h1 className="home_title text-lg mb-2 font-semibold">Yezy Boost<br />Sply -3500</h1>
<p className="home_description mb-12">Explore the new collection of sneakers </p>
<button href="#" className="button block bg-gradient-to-tr from-bg-pink-500 bg-pink-600 text-white font-medium duration-300 hover:-translate-y-1 rounded-md w-40 h-12 py-auto text-center whitespace-nowrap">Explore Now</button> */}