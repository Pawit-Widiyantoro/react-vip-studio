import React from "react";
import Button from "../Elements/Button/Index";

// card header
const Header = ({image}) =>{
    return(
    <a href="">
        <img 
            src={image} 
            alt="ajax" 
            className="p-8 rounded-t-lg" 
        />
    </a>
    )
}

// card body
const Body = ({title, children}) => {
    return(
        <div className="px-5 pb-5">
            <a href="">
                <h5 className="text-xl font-semibold text-black tracking-tight">{title}</h5>
                <p className="text-m text-black">
                  {children}
                </p>
            </a>
        </div>
    )
}

// card footer
const Footer = ({price}) => {
    return (
    <div className="flex item-center justify-between px-5 pb-5">
        <span className="text-xl font-bold text-black">
            {price}
        </span>
        <Button classname="bg-blue-600 text-white" >Add to Cart</Button>
    </div>
    )
}

// full card
const CardProduct = ({children}) => {
    return (
    <div className="w-full max-w-sm bg-gray-200 border border-gray-800 rounded-lg shadow mx-2">
        {children}
    </div>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;