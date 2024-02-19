import React, { useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button/Index";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";

const token = localStorage.getItem('token');

const ProductPage = () => {

    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [products, setProducts] = useState([]);
    const [username, setUsername] = useState("");

    // parsing data from local storage
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || [] );
    }, []);

    // 
    useEffect(() => {
        setUsername(getUsername(token));
    }, []);

    // get data from Fake Store API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getProducts();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
        fetchData();
    }, []);

    // save data to local storage
    useEffect(() => {
        if(products.length > 0 && cart.length > 0){
            const sum = cart.reduce((acc, item) => {
                const product = products.find((product) => product.id === item.id);
                return acc + product.price * item.qty;
            }, 0);
            setTotalPrice(sum);
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, products]);

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

    const totalpriceRef = useRef(null);

    useEffect(() => {
        if(cart.length>0){
            totalpriceRef.current.style.display = 'table-row';
        } else {
            totalpriceRef.current.style.display = "none";
        }
    })

    return(
        <>
            <div className="bg-blue-600 text-white flex justify-end h-20 items-center px-5">
                {username}
                <Button classname="ml-5 bg-black" onclick={handleLogout}>Logout</Button>
            </div>        
            <div className="flex justify-center py-5">
                <div className="w-3/4 flex flex-wrap px-10">
                    {products.length > 0 && 
                        products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} />
                            <CardProduct.Body name={product.title} >
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
                            {products.length > 0 && 
                                cart.map((item) => {
                                const product = products.find((product) => product.id === item.id);
                                // if (!product) {
                                //     console.error(`Product with id ${item.id} not found`);
                                //     console.log(product)
                                //     return null;
                                // }
                                return (
                                    <tr key={item.id}>
                                        <td>{product.title.substring(0,10)}...</td>
                                        <td> $ {product.price.toLocaleString('id-ID', {styles:'currency', currency:'USD'})}</td>
                                        <td>{item.qty}</td>
                                        <td> $ {(item.qty * product.price).toLocaleString('id-ID', {styles:'currency', currency:'USD'})}</td>
                                    </tr>
                                )
                            })}
                            <tr ref={totalpriceRef} className="font-bold">
                                <td colSpan={3} > Total Price</td>
                                <td>$ {(totalPrice).toLocaleString('id-ID', {styles:'currency', currency:'USD'})}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ProductPage;