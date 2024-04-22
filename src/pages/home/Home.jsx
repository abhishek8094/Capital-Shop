import React from "react";
import Layout from "../../components/layout/Layout";
import Crousel from "../../components/crousel/Crousel";
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import Products from "../../components/products/Products";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";

const Home = () => {
  const images = [img1, img2, img3, img4];
  return (
    <Layout>
      <Crousel movingimg={images} />
      <Products />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default Home;
