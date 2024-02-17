import React, { forwardRef } from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = forwardRef(({title, placeholder, name, type}, ref) => {
    return(
        <div className="mb-6">
            <Label htmlfor={name} title={title} />
            <Input type={type} placeholder={placeholder} name={name} ref={ref} />
        </div>
    )
})

export default InputForm;