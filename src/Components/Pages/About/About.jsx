import React from "react";
import Layout from "./../../Layout/Layout";
import Mandi from "../../../images/Mandi.png";
import CEO from "../../../images/Lakshay.jpg";
import headerImage from "../../../images/Header.png";
import Impacts from "./../../Impact/Impacts";
import Team from "../../Team/Team";
const About = () => {
  return (
    <Layout>
      <div className="relative">
        <img
          src={headerImage}
          alt="Header"
          className="w-screen min-h-36 m-auto"
        />
        <div className="absolute top-1/2 text-center sm:rouded-full right-1/4  bg-white bg-opacity-50 rounded-full p-5 transform -translate-y-1/2 transition-all duration-500">
          <h1 className="text-3xl lg:text-6xl font-serif font-bold text-yellow-950">
            About Us
          </h1>
        </div>
      </div>
      <div className="m-1 my-4  mt-0 ring-1 ring-white  py-4     rounded-none shadow-xl shadow-black  ">
        <div className=" px-4 py-4 ring-1 m-4 ring-primary shadow-md shadow-red rounded-none from-green bg-gradient-to-br to-gray-100 flex flex-col lg:flex-row items-center justify-between">
          <div className="m-auto w-full lg:w-1/2">
            <img
              className="w-full  shadow-md shadow-black"
              src={Mandi}
              alt="Mandi"
            />
          </div>
          <div className=" p-2 shadow m-2 w-full lg:w-1/2 lg:mr-8">
            <h1 className="text-2xl  font-serif text-center font-semibold text-yellow-950 sm:text-3xl md:text-4xl lg:text-5xl">
              About Online Mandi
            </h1>
            <p className="mt-2 font-serif text-lg text-gray-700 sm:text-md md:text-lg lg:text-2xl">
              Online Mandi, your premier destination for sourcing high-quality
              agricultural products directly from farmers. Our platform bridges
              the gap between farmers and buyers, offering a seamless and
              transparent marketplace for agricultural trade. With cutting-edge
              technology and a commitment to quality, we empower farmers to
              showcase their produce and enable buyers to procure with
              confidence. Join us on Online Mandi and revolutionize your
              agricultural sourcing experience.
            </p>
          </div>
        </div>

        <Impacts />
        <div className="text-center font-raleway  mx-auto mb-4 mt-24">
          <p className=" underline items-center font-bold text-2xl text-blue1 mb-2 ">
            Meet Our Team
          </p>
          <h2 className="underline font-bold md:text-5xl text-3xl text-gray-500 m-auto p-2">
            Awesome guys behind our Bussiness activities
          </h2>
        </div>
        <div className=" px-4 py-4 ring-1 ring-primary shadow-md shadow-red m-4 rounded-none from-green bg-gradient-to-br to-gray-100 flex flex-col lg:flex-row items-center justify-between">
          <div className="shadow p-2  m-2 w-full lg:w-1/2 lg:mr-8">
            <h1 className="text-2xl  font-serif text-center font-semibold text-yellow-950 sm:text-3xl md:text-4xl lg:text-5xl">
              Founder/CEO
            </h1>
            <p className="mt-2 font-serif text-lg text-gray-700 sm:text-md md:text-lg lg:text-2xl">
              Meet our CEO, Lakshay Nagar. It states that Lakshay Nagar is a
              dynamic leader and visionary, currently pursuing his B.Tech in the
              3rd year at IIT Madras. With a passion for innovation and drive
              for excellence, Lakshay is committed to revolutionizing the
              agricultural industry through Online Mandi. His dedication to
              leveraging technology and empowering farmers sets the foundation
              for a brighter future in agricultural sourcing, according to the
              text. It invites joining this journey with Lakshay Nagar at the
              helm.{" "}
            </p>
          </div>
          {/* <div className="m-auto w-full sm:w-sm md:w-1/2 lg:w-1/3">
            <img
              className="w-full  shadow-md shadow-black"
              src={CEO}
              alt="CEO"
            />
          </div> */}

          <Team />
        </div>
      </div>
    </Layout>
  );
};

export default About;
