import { useContext, } from 'react'
import { ProductsContext } from '../../../context/ProductsContext'
import '../carrito.css'

const ShowCarrito = ()=>{
    const {carrito, showCarrito, products} = useContext(ProductsContext)
    if(carrito.length > 0 && showCarrito){
        let counter0 = 0
        let counter1 = 0
        let counter2 = 0
        let counter3 = 0

        function counterProduct(index, element){
            if(index === 0){ return  element.name + '  Cant: ' + counter0  }
            else if(index === 1){ return  element.name + '  Cant: ' + counter1  }
            else if(index === 2){ return  element.name + '  Cant: ' + counter2  }
            else if(index === 3){ return  element.name + '  Cant: ' + counter3  }
            
        }
                carrito.find(function(element){
                    if(element  === products[0].name){
                        counter0 += 1
                    } 
                    else if(element === products[1].name){
                        counter1 += 1
                    }
                    else if(element === products[2].name){
                        counter2 += 1
                    }
                    else if(element === products[3].name){
                        counter3 += 1
                    }
                })
                console.log(counter0, counter1, counter2, counter3) 
                return (
                    <>
                    {products.map((element, index)=>{
                    return(
                        <li className='header__li' key={index}>{counterProduct(index, element)}</li> 
                    ) })}
                    <li className='header__li-total'>Total : $ { products[0].price * counter0 + products[1].price * counter1 + products[2].price * counter2 + products[3].price * counter3 }</li>
                    </>
                )
                   
                
            }             
    }
export {ShowCarrito}