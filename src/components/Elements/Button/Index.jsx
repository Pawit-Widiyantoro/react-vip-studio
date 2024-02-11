import React from "react"

const Button = (
    {classname = 'bg-black', 
    children = '...', 
    onclick = () => {}, 
    type='button'}
  ) => {
    return (
      <button 
        className={`h-10 px-6 font-semibold rounded-md ${classname} children-white`} 
        type={type}
        onClick={() => onclick()}
        >
        {children}
      </button>
    )
  }

export default Button;
  