import { useState } from "react";
import { CartContext } from "./cartcontext";

export function CartProvider({children}){
    const [Cart,SetCart] = useState([])

    return(
        <CartContext.Provider value={[Cart,SetCart]}>
        {children}
        </CartContext.Provider>
    )
}