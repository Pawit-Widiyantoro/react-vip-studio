import React from "react";
import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormRegister = () => {
    return(
        <>
            <form action=''>
                <InputForm title='Fullname' type='text' placeholder='Insert your name' name='fullname'></InputForm>
                <InputForm title='Email' type='email' placeholder='example@gmail.com' name='email'></InputForm>
                <InputForm title='Password' type='password' placeholder='*****' name='password'></InputForm>
                <InputForm title='Confirm Password' type='password' placeholder='*****' name='confirmPassword'></InputForm>
                <Button classname='bg-blue-600 w-full text-white' > Login </Button>
            </form>
        </>
    )
}

export default FormRegister;