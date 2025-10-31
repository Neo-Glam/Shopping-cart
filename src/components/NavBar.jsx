import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./cartcontext";
import "./NavBar.css";

export function NavBar() {
  const [Cart] = useContext(CartContext);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const total = Cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    setNumber(total);
  }, [Cart]);
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/Shop">Shop</Link>
      <Link to="/Cart">
        Cart <p>{number}</p>
      </Link>
    </header>
  );
}
