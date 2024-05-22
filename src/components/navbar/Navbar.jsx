import React, { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { BsFillCloudSunFill } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import myContext from "../../context/myContext";
import Navlogo from "../../assets/capitalshop.png";
import { RxCross2 } from "react-icons/rx";
import { WishlistContext } from "../../context/WishlistContext";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const context = useContext(myContext);
  const { toggleMode, mode, cartItems, searchQuery, setSearchQuery } = context;
  const user = JSON.parse(localStorage.getItem("user"));

  const wish = useContext(WishlistContext);
  const { wishlistItems } = wish;

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/";
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-white sticky top-0 z-50">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel
                className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
                style={{
                  backgroundColor: mode === "dark" ? "rgb(40, 44, 52)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="-m-2 inline-flex  items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only ">Close menu</span>
                    <RxCross2
                      className="font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    />
                  </button>
                </div>

                <div className=" mx-5 gap-4 border-t border-gray-200 px-4 py-4">
                  <div className=" flow-root">
                    <Link
                      to={"/shop"}
                      className="text-base p-2 font-medium  text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Shop
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      to={"/wishlist"}
                      style={{ color: mode === "dark" ? "white" : "" }}
                      className=" block p-2 font-medium text-gray-900"
                    >
                      Wishlist
                      <span
                        className="ml-2 text-sm font-medium text-gray-700 group-"
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        {wishlistItems.length}
                      </span>
                    </Link>
                  </div>

                  {user ? (
                    <div className="flex-col">
                      <Link
                        to={"/order"}
                        className=" text-base p-2 font-medium text-gray-700 "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Order
                      </Link>
                      <button
                        onClick={logout}
                        className=" text-base p-2  font-medium text-gray-700 "
                        style={{ color: mode === "dark" ? "white" : "" }}
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <Link
                      to={"/signup"}
                      className=" text-base p-2 font-medium text-gray-700 "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Signup
                    </Link>
                  )}

                  <div className="flow-root">
                    <Link
                      to={"/"}
                      className=" block p-2 mt-3 font-medium text-gray-900 cursor-pointer"
                    >
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://t4.ftcdn.net/jpg/02/45/56/35/240_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg"
                        alt="Abhishek"
                      />{" "}
                    </Link>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="-m-2 flex items-center p-2">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3 block text-base font-medium text-gray-900"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* desktop  */}
      <header className="relative bg-white">
        <p
          className="flex h-10 items-center justify-center bg-pink-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8"
          style={{
            backgroundColor: mode === "dark" ? "rgb(62 64 66)" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          Get free delivery on orders over ₹300
        </p>

        {/* Navbar */}
        <nav
          aria-label="Top"
          className="bg-gray-100 px-4 sm:px-6 lg:px-8 shadow-xl static"
          style={{
            backgroundColor: mode === "dark" ? "#282c34" : "",
            color: mode === "dark" ? "white" : "",
          }}
        >
          <div className="">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
                style={{
                  backgroundColor: mode === "dark" ? "rgb(80 82 87)" : "",
                  color: mode === "dark" ? "white" : "",
                }}
              >
                <span className="sr-only">Open menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>

              {/* Logo */}
              <div className="w-[180px]">
                <Link to={"/"}>
                  <div className="transition duration-100 ease-in-out hover:border-2 hover:w-14 border-transparent hover:border-[#4cbaff]">
                    <img
                      src={Navlogo}
                      className="w-14  p-2 bg-[#F3F4F6] "
                    />
                  </div>
                </Link>
              </div>

              {/* Search box */}
              <div className="hidden lg:flex items-center w-[800px] border-2 hover:border-black relative left-40 rounded-md  ">
                <input
                  type="text"
                  placeholder="Search your products..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  className="w-full py-2 px-4 border-none outline-none"
                  style={{ color: mode === "dark" ? "white" : "" }}
                />
                <div className="flex items-center justify-center w-14 h-full rounded-r-md">
                  <IoSearch className="text-gray-400 h-6 w-6" />
                </div>
              </div>

              <div className="hidden lg:flex relative left-80 p-2 text-base border-2 border-transparent hover:border-[#4cbaff]">
                <Link to={"/shop"} className="text-base font-medium">
                  Shop
                </Link>
              </div>

              <div className="hidden lg:flex mr-1 lg:ml-80">
                <Link
                  to={"/wishlist"}
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="group text-base m-2 font-medium flex justify-center items-center p-2 border-2 border-transparent hover:border-[#4cbaff]"
                >
                  Wishlist
                  <span
                    className="ml-1 text-sm font-medium text-gray-700 group-"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    {wishlistItems.length}
                  </span>
                </Link>
              </div>

              <div className="ml-auto flex items-center">
                {user ? (
                  <>
                    <Link
                      to={"/order"}
                      className="hidden lg:flex text-base p-2 font-medium text-gray-800 mr-1 border-2 border-transparent hover:border-[#4cbaff] "
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Order
                    </Link>
                    <button
                      onClick={logout}
                      className="hidden lg:flex text-base p-2 font-medium text-gray-700 border-2 border-transparent hover:border-[#4cbaff]"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to={"/signup"}
                    className="hidden lg:flex text-base p-2 font-medium text-gray-700 mr-4 border-2 border-transparent hover:border-[#4cbaff] "
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    Signup
                  </Link>
                )}

                <div className="hidden lg:mr-1 py-2 w-28 lg:flex border-2 border-transparent hover:border-[#4cbaff]">
                  <a href="#" className="flex items-center text-gray-700 ">
                    <img
                      src="https://ecommerce-sk.vercel.app/img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span
                      className="ml-3  block text-sm font-medium"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      INDIA
                    </span>
                  </a>
                </div>

                <div className="hidden lg:ml-4 lg:flex">
                  <a href="#" className="flex items-center text-gray-700">
                    <img
                      className="inline-block w-12 h-9 rounded-full"
                      src="https://t4.ftcdn.net/jpg/02/45/56/35/240_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg"
                      alt="Abhishek"
                    />
                  </a>
                </div>

                <div className="flex p-2 lg:ml-6 border-2 border-transparent hover:border-[#4cbaff]">
                  <button className="" onClick={toggleMode}>
                    {mode === "light" ? (
                      <FiSun className="" size={30} />
                    ) : (
                      mode === "dark" && <BsFillCloudSunFill size={30} />
                    )}
                  </button>
                </div>

                {/* Cart */}
                <div className="ml-4 p-2 flow-root lg:ml-6 border-2 border-transparent hover:border-[#4cbaff]">
                  <Link
                    to={"/cart"}
                    className="group -m-2 flex items-center p-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>

                    <span
                      className="ml-2 text-sm font-medium text-gray-700 group-"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {cartItems.length}
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
