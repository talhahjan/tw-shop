import React  from 'react'

const DropDown = (props) => {
  return (
    <div className="dropdown relative flex items-center">
      <button
        className="dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {props.title}
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
{props.children}
        </li>
        
      </ul>
    </div>
  )
}

export default DropDown