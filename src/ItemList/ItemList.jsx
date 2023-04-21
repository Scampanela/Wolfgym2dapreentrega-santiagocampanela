import react from 'react'
import './itemlist.css'
import {Item} from '../Item/Item'

export const ItemList =({prodcutos=[]}) => {

        // Pasamos mediante props todo el array a este componente y mapeamos cada item de los objetos y los recorremos con el spread operador 
    return (
        <div className='container'>
            <h3>Nuestros productos</h3>
            <hr />
            <div className='fila'>
            {pedirProductos.map((item)=> <Item {...item} key={item.id}  />)}
            </div>
        </div>
    )
}