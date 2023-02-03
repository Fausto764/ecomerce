import { createContext, useState } from "react";
import { useLocalStorage } from "../components/hooks/useLocalStorage";
export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
    let [counter0, setCounter0]= useState(0)
    let [counter1, setCounter1] = useState(0)
    let [counter2, setCounter2] = useState(0)
    let [counter3, setCounter3] = useState(0)
    let products = [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            image: "https://via.placeholder.com/150",
            counter : counter0,
            stock : 4
        },
        {
            id: 2,
            name: "Product 2",
            price: 300,
            image: "https://via.placeholder.com/150",
            counter : counter1,
            stock : 6
        },
        {
            id: 3,
            name: "Product 3",
            price: 50,
            image: "https://via.placeholder.com/150",
            counter : counter2,
            stock : 2
        },
        {
            id: 4,
            name: "Product 4",
            price: 10,
            image: "https://via.placeholder.com/150",
            counter : counter3,
            stock : 10
        }
    ]
    let [carrito, setCarrito] = useState([])
    let [showCarrito, setShowCarrito] = useState(false)

    function addProduct(prod){
        setCarrito([...carrito, prod])
        console.log(carrito)
    }
    return (
        <ProductsContext.Provider value={{products, carrito, setCarrito, addProduct, showCarrito, setShowCarrito, counter0, setCounter0, counter1, setCounter1, counter2, setCounter2, counter3, setCounter3}}>
            {props.children}
        </ProductsContext.Provider>
    )
}