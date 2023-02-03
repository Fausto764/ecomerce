import { useContext } from 'react'
import { ProductsContext } from '../../../context/ProductsContext'
import '../cards.css'

const NewCard =()=>{
    const {carrito, setCarrito, products, setCounter0, setCounter1, setCounter2, setCounter3, handleCant} = useContext(ProductsContext)
    return products.map((element, index)=>{

        function counterProduct(index, element){
            if(index === 0){element.counter >= element.stock ? setCounter0(element.stock) : setCounter0(element.counter + 1) }
            else if(index === 1){element.counter >= element.stock ? setCounter1(element.stock) : setCounter1(element.counter + 1) }
            else if(index === 2){element.counter >= element.stock ? setCounter2(element.stock) : setCounter2(element.counter + 1) }
            else if(index === 3){element.counter >= element.stock ? setCounter3(element.stock) : setCounter3(element.counter + 1) }
        }
        function addProduct(){
            setCarrito([...carrito, element.name])
            counterProduct(index, element)
        }

        return(
                <article className='cards__article' key={index}>
                    <h4 className='cards__h4'>{products[index].name}</h4>
                    <img src={products[index].image}/>
                    <p>${products[index].price} - {element.counter}/{element.stock}</p>
                    <button className='cards__button' onClick={ addProduct}>Agregar al carrito</button>
                </article>
        )
    })


                

    
}
export  {NewCard} 
