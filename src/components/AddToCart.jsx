import { useState,useContext } from "react"
import { CartContext } from "./cartcontext"

export function AddToCartButton({item}){
    const [Value,SetValue] = useState(0)
    const [Cart,SetCart] = useContext(CartContext)

    function addToCart(item){
        SetCart([...Cart,item.id])
    }

    return(
        <>
        <button onClick={()=>addToCart(item)}>Add To Cart</button>
        <button onClick={()=>SetValue(Value - 1)}>-</button>
        <p>{Value}</p>
        <button onClick={()=>SetValue(Value + 1)}>+</button>
        </>
    )
}