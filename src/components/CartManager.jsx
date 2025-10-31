import { CartContext } from "./cartcontext";
import { useContext } from "react";
import './CartManager.css'

export function CartManager({ item }) {
  const [Cart, SetCart] = useContext(CartContext);

  function manageCart(item, sign) {
    const value = 1 * sign;
    const existingItem = Cart.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCart = Cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + value }
          : cartItem
      ).filter((cartItems) => cartItems.quantity > 0);
      SetCart(updatedCart);
    }
  }

  return (
    <>
      <div className="incrementer">
        <button
          onClick={() => {
            manageCart(item, -1);
          }}
        >
          -
        </button>
        <p>{item.quantity}</p>
        <button
          onClick={() => {
            manageCart(item, 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
