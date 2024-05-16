import { useContext, useState, useEffect } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { WishlistContext } from "../../context/WishlistContext";
import myContext from "../../context/myContext";

export default function Products() {
  const context = useContext(myContext);
  const { mode } = context;
  const [products, setProducts] = useState([]);
  const { addToWishlist, removeFromWishlist, isInWishlist } =
    useContext(WishlistContext);

  async function getProducts() {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    setProducts(data.products);
  }

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const goToProductInfoPage = (id) => {
    window.location.href = `/productinfo/${id}`;
  };

  return (
    <div className="mt-6">
      <div className="text-center mb-4">
        <h1
          className="text-2xl sm:text-3xl font-medium title-font mb-2 text-gray-900"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          Our Collection
        </h1>
        <div className="h-1 w-24 bg-pink-600 mx-auto rounded"></div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
        {products.slice(0, 8).map((product) => (
          <div
            key={product.id}
            className="bg-slate-200 rounded-lg m-3 overflow-hidden shadow-md px-10 py-8 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            style={{ boxShadow: "0 4px 6px rgba(255,255,255,0.1)" }}
          >
            <div className="absolute top-0 right-0 mt-2 mr-2 md:mr-4 lg:mr-6">
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
            <div onClick={() => goToProductInfoPage(product.id)}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="rounded-lg w-full h-48 cursor-pointer"
              />

              <div className="mt-4">
                <h1 className="text-lg uppercase font-bold">{product.title}</h1>
                <p className="mt-2 text-gray-600 text-sm">
                  {product.description.slice(0, 60)}...
                </p>
                <p className="mt-2 text-gray-600">₹ {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
