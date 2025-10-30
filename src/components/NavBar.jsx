import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <>
    <Link to="/" >Home</Link>
    <Link to="/Shop" >Shop</Link>
    <Link to="/Cart" >Cart</Link>
    </>
  );
}
