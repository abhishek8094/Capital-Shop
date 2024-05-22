import React, { useContext, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import Filter from "../../components/filter/Filter";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { WishlistContext } from "../../context/WishlistContext";
import myContext from "../../context/myContext";

const Shop = () => {
  const {
    mode,
    products,
    setProducts,
    sortOrder,
    selectedCategory,
    searchQuery,
    setCategories,
  } = useContext(myContext);

  const { addToWishlist, removeFromWishlist, isInWishlist } =
    useContext(WishlistContext);

  async function getProducts(category = "") {
    const response = await fetch(
      `https://dummyjson.com/products${category ? `/category/${category}` : ""}`
    );
    const data = await response.json();
    setProducts(data.products);
  }

  async function getCategories() {
    const response = await fetch("https://dummyjson.com/products/categories");
    const data = await response.json();
    setCategories(data);
  }

  useEffect(() => {
    if (sortOrder) {
      const sortedProducts = [...products].sort((a, b) => {
        if (sortOrder === "price-low-high") {
          return a.price - b.price;
        } else if (sortOrder === "price-high-low") {
          return b.price - a.price;
        }
        return 0;
      });
      setProducts(sortedProducts);
    }
  }, [sortOrder]);

  useEffect(() => {
    window.scroll(0, 0);
    getCategories();
  }, []);

  useEffect(() => {
    getProducts(selectedCategory);
  }, [selectedCategory]);

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const goToProductInfoPage = (id) => {
    window.location.href = `/productinfo/${id}`;
  };

  return (
    <Layout>
      <div className="flex flex-col mb-10 lg:flex-row">
        <Filter/>
        <div className="mt-6 px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8">
            <h1
              className="text-2xl sm:text-3xl font-bold title-font mb-2 text-gray-900"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              Our Collection
            </h1>
            <div className="h-1 w-52 bg-pink-600 mx-auto rounded"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products
              .filter((obj) => obj.title.toLowerCase().includes(searchQuery))
              .slice(0, 12)
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-slate-200 rounded-lg overflow-hidden shadow-md p-4 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
                >
                  <div className="relative">
                    <div className="absolute top-2 right-2">
                      {isInWishlist(product.id) ? (
                        <FaHeart
                          onClick={() => toggleWishlist(product)}
                          className="text-red-500 text-xl cursor-pointer"
                        />
                      ) : (
                        <FaRegHeart
                          onClick={() => toggleWishlist(product)}
                          className="text-xl cursor-pointer"
                        />
                      )}
                    </div>
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="rounded-lg w-full h-48 object-cover cursor-pointer"
                      onClick={() => goToProductInfoPage(product.id)}
                    />
                  </div>
                  <div className="mt-4">
                    <h1 className="text-lg uppercase font-bold">
                      {product.title}
                    </h1>
                    <p className="mt-2 text-gray-600 text-sm">
                      {product.description.slice(0, 60)}...
                    </p>
                    <p className="mt-2 text-gray-600">₹ {product.price}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Shop;
