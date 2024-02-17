import React, { useEffect, useRef } from "react";
import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";

const FormLogin = () => {
    // login handling
    const handleLogin = (event) => {
        event.preventDefault();
        localStorage.setItem('email', event.target.email.value);
        localStorage.setItem('password', event.target.password.value);
        window.location.href = "/products";
    }

    const emailRef = useRef(null);
    useEffect(() => {
        emailRef.current.focus();
    }, []);
    
    return(
        <>
            <form onSubmit={handleLogin}>
                <InputForm title='Email' type='email' placeholder='example@gmail.com' name='email' ref={emailRef}></InputForm>
                <InputForm title='Password' type='password' placeholder='*****' name='password'></InputForm>
                <Button 
                    classname='bg-blue-600 w-full text-white'
                    type="submit" 
                > 
                    Login 
                </Button>
            </form>
        </>
    )
}

export default FormLogin;