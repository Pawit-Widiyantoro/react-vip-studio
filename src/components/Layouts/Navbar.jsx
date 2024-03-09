import { useContext, useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button/Index";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc+ item.qty
        }, 0);
        setTotalCart(sum);
    },[cart])

    // logout event handler
    const handleLogout = () => {
        localStorage.removeItem('token');
        window.location.href ='/login';
    }

    return(
    <div className="bg-blue-600 text-white flex justify-end h-20 items-center px-5">
        {username}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>Logout</Button>
        <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5 mr-5">
            {totalCart}
        </div>
        <Button 
            className=" bg-black px-10 mx-5 text-white rounded"
            onClick={() => setIsDarkMode(!isDarkMode)}
            >
            {isDarkMode ? "Light" : "Dark"}
        </Button>
    </div>   
    )
}

export default Navbar;