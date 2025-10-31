import { NavBar } from "./NavBar";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./cartcontext";
import { AddToCartButton } from "./AddToCart";
import { Card } from "./Card";

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
      const fetchedItem = await Promise.all(Cart.map((item) => FetchItemInfo(item)));
      SetItems(fetchedItem);
    }
    if (Cart.length > 0) {
      LoadItems();
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
