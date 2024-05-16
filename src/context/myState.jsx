import React, { useState, useEffect } from "react";
import MyContext from "./myContext";
import { toast } from "react-toastify";
import { fireDB } from "../firebase/FirebaseConfig";
import { getDocs, collection } from "firebase/firestore";

const myState = (props) => {
  const [mode, setMode] = useState("light");
  const [loading, setLoading] = useState(false);

  const [order, setOrder] = useState([]);

  const getOrderData = async () => {
    setLoading(true);
    try {
      const result = await getDocs(collection(fireDB, "order"));
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
      });
      setOrder(ordersArray);
    } catch (error) {
      console.error("Error fetching order data:", error);
    } finally {
      setLoading(false);
    }
  };
  

  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
      toast.success("Added to cart");
    }
  };

  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
      toast.success("Remove from Cart");
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getOrderData();
  }, [fireDB]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        order,
        setOrder,
        cartItems,
        addToCart,
        removeFromCart,
        searchQuery,
        categories,
        setCategories,
        setSearchQuery,
        clearCart,
        getCartTotal,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default myState;
