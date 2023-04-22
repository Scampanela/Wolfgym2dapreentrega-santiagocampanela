import React, { useContext } from 'react' 
import { Button } from 'react-bootstrap'
import {BsFillTrashFill} from "react-icons/bs";
import {CartContext} from '../context/CartContext';

export const CartScreen = () => {

  const {carrito, precioTotal, removerItem} = useContext (CartContext)


  return (
    <div className='container'>
    {
      carrito.map((prod) => (
        <>
        <div className='listado'>
          <p>Producto: {prod.description}</p>
          <p>${prod.price}</p>
          <p>cantidad: {prod.counter}</p>

        </div>
        <button onClick={()=> removerItem (prod.id)}>
          <BsFillTrashFill/>
        </button>
        </>
        
        
      ))
    }
    <hr />
    <strong>Precio total: $ {precioTotal()}</strong>
    </div>
  )
}
