import React, { useContext, useEffect } from "react";
import MyContext from "../../context/myContext";
import Layout from "../../components/layout/Layout";
import Loader from "../../components/loader/Loader";

function Order() {
  const userString = localStorage.getItem("user");
  const userid = userString ? JSON.parse(userString).user.uid : null;

  const context = useContext(MyContext);
  const { mode, loading, order } = context;   
  console.log(order);

  useEffect(() => {
    window.scroll(0,0);
  })

  return (
    
    <Layout>
    {loading ? (
      <Loader className="relative top-2" />
    ) : (
      <div className="h-full pt-10">
        {order.length > 0 ? (
          order
            .filter((obj) => obj.userid === userid)
            .map((orderItem, orderIndex) => (
              <div
                key={orderIndex}
                className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0"
              >
                {orderItem.cartItems.map((item, itemIndex) => (
                  <div key={itemIndex} className="rounded-lg md:w-2/3">
                    <div
                      className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                      style={{
                        backgroundColor: mode === "dark" ? "#282c34" : "",
                        color: mode === "dark" ? "white" : "",
                      }}
                    >
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-full rounded-lg sm:w-40"
                      />
                      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div className="mt-5 sm:mt-0">
                          <h2
                            className="text-lg font-bold text-gray-900"
                            style={{
                              color: mode === "dark" ? "white" : "",
                            }}
                          >
                            {item.title}
                          </h2>
                          <p
                            className="mt-1 text-[18px] text-gray-700"
                            style={{
                              color: mode === "dark" ? "white" : "",
                            }}
                          >
                            {item.description}
                          </p>
                          <p
                            className="mt-1 text-[19px] text-gray-700"
                            style={{
                              color: mode === "dark" ? "white" : "",
                            }}
                          >
                            ₹ {item.price}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    )}
  </Layout>
    
  );
}

export default Order;
