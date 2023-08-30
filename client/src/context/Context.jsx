import { createContext, useState } from "react";
import { MenuData } from "../data/MenuData";

export const Context = createContext(null);

let cartItemsLength = 0;

export const ContextProvider = (props) => {
  const [data, setData] = useState(MenuData);
  const [loggedIn, setLoggedIn] = useState(false);
  const storedItems = localStorage.getItem("item");
  const parsedItems = JSON.parse(storedItems);
  const [cartItems, setCartItems] = useState(parsedItems || []);

  const addToCart = (item) => {
    const newItem = {
      id: new Date().getTime().toString(),
      name: item.name,
      price: item.price,
    };
    if (cartItems.find((Sameitem) => Sameitem.name === item.name)) {
    } else setCartItems([...cartItems, item]);
    localStorage.setItem("item", JSON.stringify([...cartItems, newItem]));
  };
  const removeFromCart = (deletedId) => {
    const updatedCart = cartItems.filter((id) => id !== deletedId);
    setCartItems(updatedCart);
    localStorage.setItem("item", JSON.stringify(updatedCart));
  };
  const contextValue = {
    addToCart,
    removeFromCart,
    cartItems,
    loggedIn,
    setLoggedIn,
    cartItemsLength,
    data,
    setData
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
