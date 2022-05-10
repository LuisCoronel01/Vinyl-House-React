import { useState } from "react"


function ItemCount ({stock,onadd,initial}) {
    const [estado,setEstado] = useState(false)    
    const [state, setState] = useState(initial);
    

    const sumar = ()=>{
        if(state<stock) {
            setState(state+1)
            setEstado(false)
        } else {
            setEstado(true)
        }

    }

    const restar = ()=> {
        if(state>initial) {
            setState(state - 1)
            setEstado(false)
            
        } 
    }

    const confirm = () => {
        if (stock >0) {
            onadd(state)
        }
    }





    return(
        <div>
        <h1>{state} (stock: {stock})</h1>
        
        <button disabled={estado} onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={confirm}>
        </button>
        
        
    </div>   
            
    )
}

export default ItemCount