import { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { ShowCarrito } from './showCarrito/ShowCarrito'
import './carrito.css'

const Carrito = ()=>{
    const {products, carrito, setCarrito, setShowCarrito, showCarrito} = useContext(ProductsContext)
    let toggleClass = showCarrito ? 'header__ul-carrito show' : 'header__ul-carrito'
    function showProducts(){
        if(showCarrito == false  && carrito.length > 0){
            setShowCarrito(true)
        } else{
            setShowCarrito(false)
        }
    }
    function cleanCarrito(){
        setCarrito([])
    }
    return(
        <header className="header">
            <nav className='header__nav'>
                <h1>Carrito</h1>
                <section className='header__section'>
                  <button className='header__buttons' onClick={showProducts}>Carrito</button>
                  <button className='header__buttons' onClick={cleanCarrito}>Vaciar Carrito</button>  
                </section>
                
            </nav>        
            <ul className={toggleClass} >
                <ShowCarrito/>
            </ul>
        </header>

    )
}
export {Carrito} 