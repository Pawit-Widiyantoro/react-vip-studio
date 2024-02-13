import React, { useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Index";

// data
const products = [
    {
        id:1,
        name:'Jersey Ajax',
        price: 1000000,
        image:'/img/ajax.jpg',
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo esse deleniti qui quas minima, amet aspernatur, consequatur, sed voluptatibus praesentium expedita eligendi a! Rerum dolores voluptatem odit nulla id! Ad!",
    },
    {
        id:2,
        name:'Jersey Liverpool',
        price: 1200000,
        image:'/img/liverpool.jpg',
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
        id:3,
        name:'Jersey Man City',
        price: 100000,
        image:'/img/man_city.webp',
        description: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
];

const email = localStorage.getItem('email');

const ProductPage = () => {

    const [cart, setCart] = useState([
        {
            id:'Jersey Ajax',
            qty: 1,
        },
    ]);

    // logout event handler
    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        window.location.href ='/login';
    }

    // add to cart handler
    const handleAddtoCart = (id) => {
        if(cart.find(item => item.id === id)){
            setCart(
                cart.map(item => item.id === id ? {...item, qty: item.qty+1 } : item)
            )
        }else{
            setCart([
                ...cart,
                {
                    id,
                    qty:1,
                },
            ])
        }
    }

    return(
        <>
            <div className="bg-blue-600 text-white flex justify-end h-20 items-center px-5">
                {email}
                <Button classname="ml-5 bg-black" onclick={handleLogout}>Logout</Button>
            </div>        
            <div className="flex justify-center py-5">
                <div className="w-3/4 flex flex-wrap px-10">
                    {products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body name={product.name} >
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer 
                                price={product.price} 
                                id={product.id}
                                handleAddtoCart={handleAddtoCart}
                            />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-1/4">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5">
                        Cart
                    </h1>

                    <table className="text-left text-sm table-auto border-separate border-spacing-x-5">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => {
                                const product = products.find((product) => product.id === item.id);
                                if (!product) {
                                    console.error(`Product with id ${item.id} not found`);
                                    console.log(product)
                                    return null;
                                }
                                return (
                                    <tr key={item.id}>
                                        <td>{product.name}</td>
                                        <td> Rp. {product.price.toLocaleString('id-ID', {styles:'currency', currency:'IDR'})}</td>
                                        <td>{item.qty}</td>
                                        <td> Rp. {(item.qty * product.price).toLocaleString('id-ID', {styles:'currency', currency:'IDR'})}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductPage;