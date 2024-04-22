import React, { useContext } from "react";
import myContext from "../../context/myContext";

function Testimonial() {
    
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <section>
        <div className=" container mx-auto px-5 py-10">
          <h1
            className=" text-center text-3xl font-bold text-black"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonial
          </h1>
          <h2
            className=" text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            What our <span className=" text-pink-500">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="sm:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://t4.ftcdn.net/jpg/02/45/56/35/240_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Shivam sir
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Frontend Developer
                </p>
              </div>
            </div>

            <div className="sm:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://t3.ftcdn.net/jpg/03/28/19/46/240_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Nishant sir
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  React Js
                </p>
              </div>
            </div>

            <div className="sm:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://t3.ftcdn.net/jpg/01/29/53/60/240_F_129536040_xSh3RrAMtGgME7K8fcNnEo8dKOnd3zsr.jpg"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#ff4162" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Abhishek Sir
                </h2>
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="text-gray-500"
                >
                  Frontend devloper
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
