import { Link } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  return (
    
    <header>
        <Link to="/" >Home</Link>
        <Link to="/Shop" >Shop</Link>
        <Link to="/Cart" >Cart</Link>
    </header>
    
  );
}
