import React from "react";
import Input from "./Input";
import Label from "./Label";

const InputForm = ({title, placeholder, name, type}) => {
    return(
        <div className="mb-6">
            <Label htmlfor={name} title={title} />
            <Input type={type} placeholder={placeholder} name={name} />
        </div>
    )
}

export default InputForm;