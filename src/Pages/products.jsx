import React from "react";
import CardProduct from "../components/Fragments/CardProduct";

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
];

const ProductPage = () => {
    return(
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
    )
}

export default ProductPage;