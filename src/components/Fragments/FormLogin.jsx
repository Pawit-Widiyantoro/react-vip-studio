import React, { useEffect, useRef, useState } from "react";
import InputForm from "../Elements/Input/Index";
import Button from "../Elements/Button/Index";
import { login } from "../../services/auth.service";

const FormLogin = () => {
    const [loginFailed, setLoginFailed] = useState("");
    // login handling
    const handleLogin = (event) => {
        event.preventDefault();
        // localStorage.setItem('email', event.target.email.value);
        // localStorage.setItem('password', event.target.password.value);
        // window.location.href = "/products";
        const data = {
            username: event.target.username.value,
            password: event.target.password.value,
        }
        login(data, (status, res) => {
            if(status){
                localStorage.setItem('token', res);
                window.location.href = "/products";
            }else{
                setLoginFailed(res.response.data);
                console.log(res.response.data);
            }
        });
    }

    const usernameRef = useRef(null);
    useEffect(() => {
        usernameRef.current.focus();
    }, []);
    
    return(
        <>
            <form onSubmit={handleLogin}>
                {loginFailed &&
                    <p className="text-red-500 text-center mb-5" >{loginFailed}</p>
                }
                <InputForm title='Username' type='text' placeholder='John Doe' name='username' ref={usernameRef}></InputForm>
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