import { useEffect, useState, useContext } from "react";
import { NavBar } from "./NavBar";
import { Card } from "./Card";
import { CartContext } from "./cartcontext";
import { AddToCartButton } from "./AddToCart";
import "./Shop.css";

export function Shop() {
  const [Items, SetItems] = useState([]);
  const [Cart, SetCart] = useContext(CartContext);

  useEffect(() => {
    async function fetchItems() {
      const reponse = await fetch("https://fakestoreapi.com/products");
      const data = await reponse.json();
      SetItems(data);
    }
    fetchItems();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div className="itemsList">
          {Items.map((item) => (
            <div className="item" key={item.id}>
              <Card
                name={item.title}
                price={item.price}
                bio={item.description}
                image={item.image}
              />
              <AddToCartButton item={item}></AddToCartButton>
            </div>
          ))}
      </div>
    </>
  );
}
