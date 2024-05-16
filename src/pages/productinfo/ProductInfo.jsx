import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/myContext";
import { useNavigate, useParams } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { WishlistContext } from "../../context/WishlistContext";

const ProductInfo = () => {
  const [product, setProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useContext(WishlistContext);
  const { mode, addToCart } = useContext(myContext);
  const { id } = useParams();
  const navigate = useNavigate();

  async function getProduct(productId) {
    const response = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await response.json();
    setProduct(data);
  }

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const goToCart = () => {
    navigate("/Cart");
  };

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
  };

  useEffect(() => {
    getProduct(id);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <section
        className="text-gray-600 body-font overflow-hidden"
        style={{
          backgroundColor: mode === "dark" ? "#282c34" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <div className="container px-5 py-10 mx-auto">
          <div className="lg:w-1/2 mx-auto border-2 p-2 flex flex-wrap">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="lg:w-[40%] w-full lg:h-auto p-1 object-center rounded"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1
                className="text-gray-900 text-3xl title-font font-medium mb-1"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                {product.title}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      fill={i < 4 ? "currentColor" : "none"}
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span
                    className="text-gray-600 ml-3"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    4 Reviews
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a
                    className="text-gray-500"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a
                    className="text-gray-500"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a
                    className="text-gray-500"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
              <p
                className="leading-relaxed border-b-2 mb-5 pb-5"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                {product.description}
              </p>

              <div className="flex">
                <span
                  className="title-font font-medium text-2xl text-gray-900"
                  style={{ color: mode === "dark" ? "white" : "" }}
                >
                  ₹{product.price}
                </span>

                {addedToCart ? (
                  <button
                    onClick={goToCart}
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    Go to Cart
                  </button>
                ) : (
                  <button
                    onClick={handleAddToCart}
                    className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                  >
                    Add To Cart
                  </button>
                )}
                <div className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  {isInWishlist(product.id) ? (
                    <FaHeart
                      onClick={toggleWishlist}
                      className="text-red-500 text-xl cursor-pointer"
                    />
                  ) : (
                    <FaRegHeart
                      onClick={toggleWishlist}
                      className="text-xl cursor-pointer"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductInfo;
