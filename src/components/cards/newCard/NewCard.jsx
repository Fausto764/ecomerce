import { useContext } from 'react'
import { ProductsContext } from '../../../context/ProductsContext'
import '../cards.css'

const NewCard =()=>{
    const {carrito, setCarrito, products} = useContext(ProductsContext)
    return products.map((element, index)=>{
        function addProduct(){
            // window.localStorage.setItem('carrito', carrito)
            console.log(element.name)
            setCarrito([...carrito, element.name])
        }

        return(
                <article className='cards__article' key={index}>
                    <h4 className='cards__h4'>{products[index].name}</h4>
                    <img src={products[index].image}/>
                    <p>{products[index].price}</p>
                    <button className='cards__button' onClick={ addProduct}>Agregar al carrito</button>
                </article>
        )
    })


                

    
}
export  {NewCard} 
