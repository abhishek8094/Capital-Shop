import React from "react";
import Layout from "../../components/layout/Layout";
import Crousel from "../../components/crousel/Crousel";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import Products from "../../components/products/Products";
import { Link } from "react-router-dom";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";

const Home = () => {
  const images = [img1, img2, img3, img4];
  return (
    <Layout>
      <Crousel movingimg={images} />
      <Products />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to="/shop">
          <button className=" bg-gray-300 px-5 py-2 mt-20 rounded-xl">
            See more
          </button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
