import React from "react";
import CardProduct from "../components/Fragments/CardProduct";

const ProductPage = () => {
    return(
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header image="/img/ajax.jpg" />
                <CardProduct.Body title="Jersey Ajax" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo esse deleniti qui quas minima, amet aspernatur, consequatur, sed voluptatibus praesentium expedita eligendi a! Rerum dolores voluptatem odit nulla id! Ad!
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 1.000.000" />
            </CardProduct>
            <CardProduct>
                <CardProduct.Header image="/img/ajax.jpg" />
                <CardProduct.Body title="Jersey Ajax" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo esse deleniti qui quas minima, amet aspernatur, consequatur, sed voluptatibus praesentium expedita eligendi a! Rerum dolores voluptatem odit nulla id! Ad!
                </CardProduct.Body>
                <CardProduct.Footer price="Rp. 1.000.000" />
            </CardProduct>
        </div>
    )
}

export default ProductPage;