import React, { useEffect } from "react";
import { useState, useContext } from "react";
import Layout from "../../components/layout/Layout";
import Modal from "../../components/modal/Modal";
import MyContext from "../../context/myContext";
import { BsCart4 } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const { cartItems, mode, addToCart, removeFromCart, getCartTotal ,clearCart } = useContext(MyContext);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    window.scroll(0, 0);
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + parseInt(cartItem.price) * cartItem.quantity;
    });
    setTotalAmount(temp);
  });

  const Delivery = parseInt(0);
  const grandTotal = Delivery + totalAmount;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const buyNow = async () => {
    if (name === "" || address == "" || pincode == "" || phoneNumber == "") {
      return toast.error("All fields are required", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    // Payment logic goes here
  };

  return (
    <Layout>
      <div
        className="min-h-screen bg-gray-100 pt-5 pb-20 px-4"
        style={{
          backgroundColor: mode === "dark" ? "#282c34" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <h1 className="mb-10 text-center text-3xl font-bold">Cart Items</h1>
        {cartItems.length === 0 ? (
          <div className="flex justify-center mt-18">
            <BsCart4 className="text-[320px]" />
          </div>
        ) : (
          <div
            className="flex justify-center text-sm"
            style={{
              backgroundColor: mode === "dark" ? "#282c34" : "",
              color: mode === "dark" ? "white" : "",
            }}
          >
            <div className="flex flex-col w-[80%] lg:flex-row lg:gap-40">
              {/* Product Items */}
              <div className="lg:w-2/3">
                {cartItems.map((item) => (
                  <div
                    className="flex border-2 p-12  justify-between items-center mb-8"
                    key={item.id}
                  >
                    <div className="flex gap-4">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="rounded-md h-24"
                      />
                      <div className="flex flex-col">
                        <h1
                          className="text-lg font-bold"
                          style={{
                            color: mode === "dark" ? "white" : "",
                          }}
                        >
                          {item.title}
                        </h1>
                        <p
                          className="text-gray-600"
                          style={{
                            color: mode === "dark" ? "white" : "",
                          }}
                        >
                          {item.description}
                        </p>
                        <p
                          className="text-gray-600"
                          style={{
                            color: mode === "dark" ? "white" : "",
                          }}
                        >
                          ₹ {item.price}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <button
                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        onClick={() => {
                          removeFromCart(item);
                        }}
                      >
                        -
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                        onClick={() => {
                          addToCart(item);
                        }}
                      >
                        +
                      </button>
                      <button
                        onClick={() => clearCart(item)}
                        className="ml-4"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </div>
                ))}
              </div>


              {/* Order Summary */}
              <div className="lg:w-1/3 mt-6 lg:mt-0">
                <div
                  className="rounded-lg border bg-white p-6 shadow-md"
                  style={{
                    backgroundColor: mode === "dark" ? "#282c34" : "",
                    color: mode === "dark" ? "white" : "",
                  }}
                >
                  <h1 className="font-bold text-center text-xl p-2">
                    Order Summary
                  </h1>
                  <div className="mb-2 flex justify-between">
                    <p
                      className="text-gray-700"
                      style={{
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      Total Items
                    </p>
                    <p
                      className="text-gray-700"
                      style={{
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      {cartItems.length}
                    </p>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <p
                      className="text-gray-700"
                      style={{
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      Items
                    </p>
                    <p
                      className="text-gray-700"
                      style={{
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      ₹{totalAmount}
                    </p>
                  </div>
                  <div className="mb-2 flex justify-between">
                    <p
                      className="text-gray-700"
                      style={{
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      Delivery
                    </p>
                    <p
                      className="text-gray-700"
                      style={{
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      ₹{Delivery}
                    </p>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between mb-3">
                    <p className="text-lg font-bold" style={{
                            color: mode === "dark" ? "white" : "",
                          }}>Total</p>
                    <div>
                      <p className="mb-1 text-lg font-bold" style={{
                            color: mode === "dark" ? "white" : "",
                          }}>₹{getCartTotal()}</p>
                    </div>
                  </div>

                  {/* Modal */}
                  <Modal
                    name={name}
                    address={address}
                    pincode={pincode}
                    phoneNumber={phoneNumber}
                    setName={setName}
                    setAddress={setAddress}
                    setPincode={setPincode}
                    setPhoneNumber={setPhoneNumber}
                    buyNow={buyNow}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Cart;
