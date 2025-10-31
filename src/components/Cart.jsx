import { NavBar } from "./NavBar";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./cartcontext";
import { Card } from "./Card";
import { CartManager } from "./CartManager";
import "./Cart.css";

export function Cart() {
  const [Cart, SetCart] = useContext(CartContext);
  const [Items, SetItems] = useState([]);

  async function FetchItemInfo(item) {
    const reponse = await fetch(`https://fakestoreapi.com/products/${item.id}`);
    const data = await reponse.json();
    return data;
  }

  useEffect(() => {
    async function LoadItems() {
    const fetchedItems = await Promise.all(
      Cart.map((item) =>
        FetchItemInfo(item).then((data) => ({
          ...data,
          quantity: item.quantity || 1,
        }))
      )
    );
    SetItems(fetchedItems);
  }
    if (Cart.length > 0) {
      LoadItems();
      console.log();
    } else {
      SetItems([]);
    }
  }, [Cart]);

  return (
    <>
      <NavBar></NavBar>
      <div className="itemsList">
        {Items.map((item) => (
          <div className="item" key={item.id}>
            <Card
              name={item.title}
              price={"$" + item.price}
              image={item.image}
            />
            <CartManager item={item} />
          </div>
        ))}
      </div>
    </>
  );
}
