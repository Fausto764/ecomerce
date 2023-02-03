import { useContext, } from 'react'
import { ProductsContext } from '../../../context/ProductsContext'
import '../carrito.css'

const ShowCarrito = ()=>{
    let {carrito, showCarrito, products, setCounter0, setCounter1, setCounter2, setCounter3} = useContext(ProductsContext)
    if(carrito.length > 0 && showCarrito){
        function calcPrice(){
            return products[0].price * products[0].counter + products[1].price * products[1].counter + products[2].price * products[2].counter + products[3].price * products[3].counter 
        }

        function counterProduct(index, element){
            if(index === 0){ return  element.name + '  Cant: ' + element.counter  }
            else if(index === 1){ return  element.name + '  Cant: ' + element.counter  }
            else if(index === 2){ return  element.name + '  Cant: ' + element.counter  }
            else if(index === 3){ return  element.name + '  Cant: ' + element.counter  }
            
        }
                carrito.find(function(element){
                    if(element  === products[0].name){
                        setCounter0 += 1
                    } 
                    else if(element === products[1].name){
                        setCounter1 += 1
                    }
                    else if(element === products[2].name){
                        setCounter2 += 1
                    }
                    else if(element === products[3].name){
                        setCounter3 += 1
                    }
                })
                return (
                    <>
                    {products.map((element, index)=>{
                    return(
                        <li className='header__li' key={index}>{counterProduct(index, element)}</li> 
                    ) })}
                    <li className='header__li-total'>Total : $ {calcPrice() }</li>
                    </>
                )
                   
                
            }             
    }
export {ShowCarrito}