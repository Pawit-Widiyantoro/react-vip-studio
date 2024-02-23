import axios from "axios";

export const getProducts = async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
};

export const getDetailProduct = async (id) => {
    try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error; // Rethrow the error to be handled by the caller
    }
};
