import React, { useState } from "react";
import ItemList from "./ItemList";
import './GroceryCart.css';


const produce = [
    "Carrots",
    "Cucumbers",
    "Bell peppers",
    "Avocados",
    "Spinach",
    "Kale",
    "Tomatoes",
    "Bananas",
    "Lemons",
    "Ginger",
    "Onions",
    "Potatoes",
    "Sweet potatoes",
    "Purple cabbage",
    "Broccoli",
    "Mushrooms",
    "Cilantro"
  ];
  
  const pantryItems = [
    "Chia",
    "Goji berries",
    "Peanut butter",
    "Bread",
    "Cashews",
    "Pumpkin seeds",
    "Peanuts",
    "Olive oil",
    "Sesame oil",
    "Tamari",
    "Pinto beans",
    "Black beans",
    "Coffee",
    "Rice",
    "Dates",
    "Quinoa"
  ];



function GroceryCart() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart((prev) => {
      return [item, ...prev];
    });
  };

  const removeItem = (targetIndex) => {
    setCart((prev) => {
      return prev.filter((item, index) => index !== targetIndex);
    });
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}


export default GroceryCart;