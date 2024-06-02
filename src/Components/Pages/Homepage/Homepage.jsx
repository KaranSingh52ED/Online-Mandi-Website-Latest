import React from "react";
import Navbar from "../../Navigation/Navbar";
import Imapacts from "../../Impact/Impacts";
import Herosection from "../../Herosection/Herosection";
import Features from "../../../Features/Features";
import CardComponent from "../../Price/CardComponent";
import CallToAction from "../../CallToAction/CallToAction";
import Review from "../../Review/Review";
import Footer from "../../Footer/Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <Herosection />
      <Features />
      <Imapacts />
      {/* <CardComponent /> */}
      <CallToAction />
      <Review />
      <Footer />
    </>
  );
};

export default Homepage;
