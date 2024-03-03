import React, { useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/Fragments/TableCart";
import Navbar from "../components/Layouts/Navbar";

const ProductPage = () => {

    const [products, setProducts] = useState([]);
    useLogin();

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

    return(
        <>
            <Navbar />
            <div className="flex justify-center py-5">
                <div className="w-3/4 flex flex-wrap px-10">
                    {products.length > 0 && 
                        products.map((product) => (
                        <CardProduct key={product.id}>
                            <CardProduct.Header image={product.image} id={product.id} />
                            <CardProduct.Body name={product.title} >
                                {product.description}
                            </CardProduct.Body>
                            <CardProduct.Footer 
                                price={product.price} 
                                id={product.id}
                            />
                        </CardProduct>
                    ))}
                </div>
                <div className="w-1/4">
                    <h1 className="text-3xl font-bold text-blue-600 ml-5">
                        Cart
                    </h1>
                    <TableCart products={products} />
                </div>
            </div>
        </>
    )
}

export default ProductPage;