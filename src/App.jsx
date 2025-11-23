import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { Card } from "./components/Card";
import "./App.css";

function App() {
  const [Items, SetItems] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      SetItems(data);
    }
    fetchItems();
  }, []);

  return (
    <>
      <NavBar />

      <div className="hero">
        <h1>Welcome to Shopping-cart</h1>
        <h2>A mini e-commerce demo made with React.</h2>
      </div>

      <div className="itemsList">
        {Items.slice(0, 4).map((item) => (
          <div className="item" key={item.id}>
            <Card
              name={item.title}
              image={item.image}
              price={"$" + item.price}
            />
           
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
