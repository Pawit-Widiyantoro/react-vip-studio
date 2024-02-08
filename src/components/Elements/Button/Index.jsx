import React from "react"

const Button = ({classname = 'bg-black', children = '...'}) => {
    return (
      <button className={`h-10 px-6 font-semibold rounded-md ${classname} children-white`} type='submit'>
        {children}
      </button>
    )
  }

export default Button;
  