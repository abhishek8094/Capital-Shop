import React, { useContext } from "react";
import myContext from "../../context/myContext";

function Testimonial() {
  const context = useContext(myContext);
  const { mode } = context;

  return (
    <div>
      <section>
        <div className="container mx-auto px-5 py-10">
          <h1
            className="text-center text-3xl font-bold"
            style={{ color: mode === "dark" ? "white" : "black" }}
          >
            Testimonial
          </h1>
          <h2
            className="text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "black" }}
          >
            What our <span className="text-pink-500">customers</span> are
            saying
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://t4.ftcdn.net/jpg/02/45/56/35/240_F_245563558_XH9Pe5LJI2kr7VQuzQKAjAbz9PAyejG1.jpg"
                />
                <p
                  className="leading-relaxed"
                  style={{ color: mode === "dark" ? "white" : "black" }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                  style={{ color: mode === "dark" ? "#ff4162" : "black" }}
                >
                  Shivam sir
                </h2>
                <p
                  className="text-gray-500"
                  style={{ color: mode === "dark" ? "white" : "gray" }}
                >
                  Frontend Developer
                </p>
              </div>
            </div>

            <div className="p-4 sm:w-1/2 lg:w-1/3 w-full">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://t3.ftcdn.net/jpg/03/28/19/46/240_F_328194664_RKSHvMLgHphnD1nwQYb4QKcNeEApJmqa.jpg"
                />
                <p
                  className="leading-relaxed"
                  style={{ color: mode === "dark" ? "white" : "black" }}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                  style={{ color: mode === "dark" ? "#ff4162" : "black" }}
                >
                  Nishant sir
                </h2>
                <p
                  className="text-gray-500"
                  style={{ color: mode === "dark" ? "white" : "gray" }}
                >
                  React Js
                </p>
              </div>
            </div>

            <div className="p-4 lg:w-1/3 w-full">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://t3.ftcdn.net/jpg/01/29/53/60/240_F_129536040_xSh3RrAMtGgME7K8fcNnEo8dKOnd3zsr.jpg"
                />
                <p
                  className="leading-relaxed"
                  style={{ color: mode === "dark" ? "white" : "black" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                  style={{ color: mode === "dark" ? "#ff4162" : "black" }}
                >
                  Abhishek Sir
                </h2>
                <p
                  className="text-gray-500"
                  style={{ color: mode === "dark" ? "white" : "gray" }}
                >
                  Frontend Developer
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
