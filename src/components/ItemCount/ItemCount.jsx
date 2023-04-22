import './ItemCount.css'

export const ItemCount = ({max, cantidad, modify}) =>{

    const [counter, setCounter] = useState(0)

    const sumar = () =>{
        if (cantidad < max){
            modify(cantidad+1)
        }
    }
    const restar = () =>{
        if(cantidad >0){
            modify(counter-1)
        }
    }
    



    return(
        <>
        <h4> {counter}</h4>
        <div>
            <button onClick={sumar}>➕</button>
            <button onClick={restar}>➖</button>
             
        </div>
        </>
    )
}
