import React from "react";

const Label = ({htmlfor, title}) => {
    return (
        <label 
            htmlFor={htmlfor} 
            className='block text-slate-700 text-sm font-bold mb-2'>
            {title}
        </label>
    )
}

export default Label;