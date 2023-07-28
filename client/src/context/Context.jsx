import { createContext, useState } from "react";
import { MenuData } from "../data/MenuData";

export const Context = createContext(null);

let cartItemsLength = 0;

export const ContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    if(cartItems.find((Sameitem)  => Sameitem.name === item.name)) {
    }else
      setCartItems([...cartItems, item]);
  };
  const removeFromCart = (deletedId) => {
    const updatedCart = cartItems.filter((id) => id !== deletedId);
    setCartItems(updatedCart);
    
  };
  const contextValue = {
    addToCart,
    removeFromCart,
    cartItems,
    loggedIn,
    setLoggedIn,
    cartItemsLength,
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};
