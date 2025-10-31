import { useState, useContext } from "react";
import { CartContext } from "./cartcontext";
import "./AddToCart.css";

export function AddToCartButton({ item }) {
  const [Value, SetValue] = useState(1);
  const [Cart, SetCart] = useContext(CartContext);

  function addToCart(item, value) {
    const existingItem = Cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = Cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + value }
          : cartItem
      );
      SetCart(updatedCart);
    } else {
      SetCart([...Cart, { ...item, quantity: value }]);
    }
  }

  return (
    <>
      <div className="addButtons">
        <button onClick={() => addToCart(item, Value)}>Add To Cart</button>
        <div className="incrementer">
          <button
            onClick={() => {
              if (Value > 1) SetValue(Value - 1);
            }}
          >
            -
          </button>
          <p>{Value}</p>
          <button onClick={() => SetValue(Value + 1)}>+</button>
        </div>
      </div>
    </>
  );
}
