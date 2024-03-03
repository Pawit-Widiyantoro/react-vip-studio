import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";

const TableCart = ({products}) => {
    const cart = useSelector((state) => state.cart.data);
    const [totalPrice, setTotalPrice] = useState(0);

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

    const totalpriceRef = useRef(null);

    useEffect(() => {
        if(cart.length>0){
            totalpriceRef.current.style.display = 'table-row';
        } else {
            totalpriceRef.current.style.display = "none";
        }
    })

    return(
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
                <td colSpan={3}> Total Price</td>
                <td>$ {(totalPrice).toLocaleString('id-ID', {styles:'currency', currency:'USD'})}
                </td>
            </tr>
        </tbody>
    </table>
    )
}

export default TableCart;