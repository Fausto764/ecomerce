import { createContext, useState } from "react";
import { useLocalStorage } from "../components/hooks/useLocalStorage";
export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            image: "https://via.placeholder.com/150"
        },
        {
            id: 2,
            name: "Product 2",
            price: 300,
            image: "https://via.placeholder.com/150"
        },
        {
            id: 3,
            name: "Product 3",
            price: 50,
            image: "https://via.placeholder.com/150"
        },
        {
            id: 4,
            name: "Product 4",
            price: 10,
            image: "https://via.placeholder.com/150"
        }
    ]
    let [carrito, setCarrito] = useState([])
    let [showCarrito, setShowCarrito] = useState(false)
    function addProduct(prod){
        setCarrito([...carrito, prod])
        console.log(carrito)
    }
    return (
        <ProductsContext.Provider value={{products, carrito, setCarrito, addProduct, showCarrito, setShowCarrito}}>
            {props.children}
        </ProductsContext.Provider>
    )
}