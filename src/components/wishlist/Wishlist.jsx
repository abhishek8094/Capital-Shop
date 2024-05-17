import React, { useEffect } from "react";
import { useContext } from "react";
import Layout from "../layout/Layout";
import myContext from "../../context/myContext";
import { CgTrashEmpty } from "react-icons/cg";
import { WishlistContext } from "../../context/WishlistContext";

const Wishlist = () => {
  const { mode, addToCart } = useContext(myContext);
  const { wishlistItems ,removeFromWishlist } = useContext(WishlistContext);


  useEffect(() => {
    window.scroll(0,0);
  })

  return (
    <Layout>
      <h1
        className="text-center font-bold mt-4 text-2xl"
        style={{
          color: mode === "dark" ? "white" : "",
        }}
      >
        Your Wishlist
      </h1>

      <div className="flex flex-col items-center">
        {wishlistItems.map((product, index) => {
          const { title, price, thumbnail, description, id } = product;

          return (
            <div
              key={index}
              className="w-full md:max-w-md lg:max-w-xl border m-5 rounded-lg shadow-md flex flex-col lg:flex-row"
              style={{
                backgroundColor: mode === "dark" ? "#282c34" : "white",
                color: mode === "dark" ? "white" : "black",
              }}
            >
              <img
                src={thumbnail}
                alt={title}
                className="w-full md:w-48 p-2  lg:w-64 h-auto rounded-t-lg md:rounded-l-lg lg:rounded-tl-lg lg:rounded-bl-lg"
              />
              <div className="flex flex-col justify-between p-4 w-full">
                <div>
                  <h2
                    className="text-lg font-bold mb-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    {title}
                  </h2>
                  <p
                    className="text-gray-700 mb-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    {description.slice(0, 80)}...
                  </p>
                  <p
                    className="text-gray-700 mb-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    ₹ {price}
                  </p>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() =>addToCart(product)}
                    className="bg-green-500 text-white px-3 py-2 rounded-lg font-semibold hover:bg-green-600 focus:outline-none"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {wishlistItems.length === 0 && (
          <div className="flex justify-center items-center">
            <CgTrashEmpty
              className="text-8xl my-24"
              style={{ color: mode === "dark" ? "white" : "" }}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Wishlist;
