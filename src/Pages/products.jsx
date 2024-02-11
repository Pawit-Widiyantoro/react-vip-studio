import React from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Index";

// data
const products = [
    {
        id:1,
        name:'Jersey Ajax',
        price: "Rp. 1.000.000",
        image:'/img/ajax.jpg',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo esse deleniti qui quas minima, amet aspernatur, consequatur, sed voluptatibus praesentium expedita eligendi a! Rerum dolores voluptatem odit nulla id! Ad!",
    },
    {
        id:2,
        name:'Jersey Liverpool',
        price: "Rp. 1.200.000",
        image:'/img/liverpool.jpg',
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id:3,
        name:'Jersey Man City',
        price: "Rp. 1.000.000",
        image:'/img/man_city.webp',
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
];

const email = localStorage.getItem('email');

const ProductPage = () => {

    // logout event handler
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href ='/login';
    }

    return(
        <>
            <div className="bg-blue-600 text-white flex justify-end h-20 items-center px-5">
                {email}
                <Button classname="ml-5 bg-black" onclick={handleLogout}>Logout</Button>
            </div>        
            <div className="flex justify-center py-5">
                {products.map((product) => (
                    <CardProduct key={product.id}>
                        <CardProduct.Header image={product.image} />
                        <CardProduct.Body name={product.name} >
                            {product.description}
                        </CardProduct.Body>
                        <CardProduct.Footer price={product.price} />
                    </CardProduct>
                ))}
            </div>
        </>
    )
}

export default ProductPage;