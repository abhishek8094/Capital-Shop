import React from "react";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import { Routes, Route } from "react-router-dom";
import Order from "./pages/order/Order";
import MyState from "./context/myState";
import Cart from "./pages/cart/Cart";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import ProductInfo from "./pages/productinfo/ProductInfo";
import NoPage from "./pages/nopage/NoPage";
import "react-toastify/dist/ReactToastify.css";
import Wishlist from "./components/wishlist/Wishlist";
import { ToastContainer } from "react-toastify";
import { WishlistProvider } from "./context/WishlistContext";

const App = () => {
  return (
    <MyState>
      <WishlistProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element = {<Shop/>}/>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </WishlistProvider>
    </MyState>
  );
};

export default App;
