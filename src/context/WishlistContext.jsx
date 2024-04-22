import React, { createContext, useState } from "react";
import { toast } from "react-toastify";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (product) => {
    setWishlistItems([...wishlistItems, product]);
    toast.success("Added to Wishlist");
  };

  const removeFromWishlist = (productId) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== productId));
    toast.success("Remove from Wishlist");
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some((item) => item.id === productId);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist, isInWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
