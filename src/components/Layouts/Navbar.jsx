import { useEffect, useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import Button from "../Elements/Button/Index";
import { useSelector } from "react-redux";

const Navbar = () => {
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);

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
        <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
            {totalCart}
        </div>
    </div>   
    )
}

export default Navbar;