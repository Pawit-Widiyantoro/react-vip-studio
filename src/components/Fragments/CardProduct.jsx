import React from "react";
import Button from "../Elements/Button/Index";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

// card header
const Header = ({id, image}) =>{
    return(
    <Link to={`/product/${id}`}>
        <img 
            src={image} 
            alt="ajax" 
            className="p-8 rounded-t-lg h-60 w-full object-cover" 
        />
    </Link>
    )
}

// card body
const Body = ({name, children}) => {
    return(
        <div className="px-5 pb-5 h-full">
            <a href="">
                <h5 className="text-xl font-semibold text-black tracking-tight">{name.substring(0, 20)}...</h5>
                <p className="text-sm text-black">
                  {children.substring(0, 100)}...
                </p>
            </a>
        </div>
    )
}

// card footer
const Footer = ({price, id}) => {
    const dispatch = useDispatch();
    return (
    <div className="flex item-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-black">
            $ {price.toLocaleString('id-ID', {styles:'currency', currency:'USD'})}
        </span>
        <Button classname="bg-blue-600 text-white" onClick={() => dispatch(addToCart({id, qty:1}))} >Add to Cart</Button>
    </div>
    )
}

// full card
const CardProduct = ({children}) => {
    return (
    <div className="w-full max-w-xs bg-gray-200 border border-gray-800 rounded-lg shadow mx-2 my-2 flex flex-col justify-between">
        {children}
    </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;