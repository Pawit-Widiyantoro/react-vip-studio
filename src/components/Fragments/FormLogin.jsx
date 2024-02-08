import React from "react";
import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
    return(
        <>
            <form action=''>
                <InputForm title='Email' type='email' placeholder='example@gmail.com' name='email'></InputForm>
                <InputForm title='Password' type='password' placeholder='*****' name='password'></InputForm>
                <Button classname='bg-blue-600 w-full text-white' > Login </Button>
            </form>
        </>
    )
}

export default FormLogin;