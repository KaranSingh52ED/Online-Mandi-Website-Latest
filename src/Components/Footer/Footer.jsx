import { IoIosArrowForward, IoLogoWhatsapp } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import playStore from "./../../images/playStore.png";
import { BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import { useState } from "react";
import swal from "sweetalert";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import logo from "./../../images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [loading, setLoading] = React.useState(false);

  const [newletterInfo, setNewsLetterInfo] = useState({
    email: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewsLetterInfo((prevNewsLetter) => ({
      ...prevNewsLetter,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setNewsLetterInfo({
      email: "",
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Destructure the donateInfo object for clarity
    const { email } = newletterInfo;

    try {
      const res = await fetch(
        "https://v1.nocodeapi.com/karan_ed52/google_sheets/GuBMzkmpOoNgumQC?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([[new Date().toLocaleString(), email]]),
        }
      );

      // Check if the response is successful
      if (res.ok) {
        // Use SweetAlert to show success message
        swal("Online Mandi", "Subscription Successful", "success");
        // Optionally, you can handle other actions after a successful submission here
      } else {
        // Handle errors if the response is not successful
        swal("Online Mandi", "Error Subscribing", "error");
      }
    } catch (error) {
      // Handle errors in the fetch or other unexpected errors
      console.log(error);
      swal("Online Mandi", "Error Subscribing", "error");
    }

    setLoading(false);
    handleClear();
  };

  // Create an array of link texts
  const linkData = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Policy", href: "/policy" },
    { text: "Network", href: "/contact" },
    { text: "E-Mandi", href: "/e-mandi" },
  ];

  // Function to get the current year
  const getCurrentYear = () => {
    const currentYear = new Date().getFullYear();
    return currentYear;
  };

  return (
    <section
      className=" flex justify-center 
          items-center mt-12"
    >
      <div className="bg-black opacity-90 p-4 ">
        <div className="container md:ml-0 ml-4 md:mx-auto md:flex md:justify-between md:mt-10 md:gap-6">
          {/* Center Section */}
          <div className="md:w-1/3 ">
            <div className="border-l-4 pl-3 border-green md:pl-4 md:mt-0 mt-6">
              <div className="flex flex-row items-center font-serif ">
                <img src={logo} alt="App" className="h-24 w-24" />
                <span className="text-green hover:text-yellow-400 text-4xl text-center font-bold">
                  {" "}
                  Online Mandi
                </span>
              </div>
              <h2 className="text-2xl font-serif mb-8  tracking-wide text-white">
                About Us
              </h2>
            </div>
            <div>
              <p className=" font-serif md:text-md text-sm pb-4 p-2 text-white">
                Online Mandi serves as the go-to hub for accessing top-tier
                agricultural goods straight from the farmers. Our platform acts
                as a crucial link between farmers and consumers, offering a
                direct avenue for farmers to sell their produce to buyers. We
                empower farmers by showcasing their products to a broader
                audience, ensuring they receive the best prices for their hard
                work.
              </p>
            </div>
          </div>

          {/* Center Section */}
          <div className="md:w-1/3 text-center">
            <div className="border-l-4 pl-3 border-green md:mt-0 mt-6 md:pl-4">
              <h2 className="text-2xl font-serif mb-8  text-white tracking-wide text-left">
                Popular Links
              </h2>
            </div>
            <div className="grid md:grid-cols-1 grid-cols-2 gap-4 md:text-md text-sm md:ml-8">
              {linkData.map((data, index) => (
                <a
                  key={index}
                  href={data.href}
                  className="font-serif flex items-center text-white text-md hover:text-yellow-400  text-left"
                >
                  <IoIosArrowForward className="mr-4" />
                  {data.text}
                </a>
              ))}
              <Link
                className="flex flex-row"
                to="https://play.google.com/store/apps/details?id=com.mycompany.ommandi"
              >
                <img src={playStore} alt="App" className="w-96" />
                {/* <IoLogoGooglePlaystore className="text-primary text-2xl text-center hover:bg-purple m-4 p-1 h-16  w-16 hover:text-white  hover:shadow-red rounded-full    ring-1 ring-yellow-300   shadow-md bg-white shadow-sea" /> */}
              </Link>
            </div>
          </div>

          {/* Left Section */}
          <div className="md:w-1/3 ">
            <div className="border-l-4 pl-3 border-green md:pl-4 md:mt-0 mt-10">
              <h2 className="text-2xl  md:mb-8 mb-6 font-serif text-white tracking-wide">
                Our Head Office
              </h2>
            </div>
            <div className="block items-center md:text-md text-sm">
              <p className=" flex items-center font-quicksand md:pb-5 pb-4 text-green">
                <IoLocationSharp className="mr-4 w-4 h-4" />
                1, 01, SH 51, State Bank Of India,Bapawar Kalan, Kota, Rajasthan
                325207
              </p>
              <p className=" flex items-center font-quicksand md:pb-5 pb-4 text-green">
                <FaPhone className="mr-4 h-4 w-4" />
                +91-9509248058
              </p>
              <p className=" flex items-center font-quicksand md:pb-5 pb-4 text-green">
                <MdEmail className="mr-4 w-4 h-4" />
                sale.onlinemandi@gmail.com
              </p>
            </div>
            <div className="flex items-center md:mt-5 mt-1 md:mb-0 mb-10 text-white gap-6">
              <a
                href="https://www.linkedin.com/in/shobha-motghare-0a6a57238/"
                className="p-2 border border-red rounded-full inline-block"
              >
                <BsLinkedin className="h-4 w-4 transition-transform transform  hover:scale-150" />
              </a>
              <a
                href="#"
                className="p-2 border border-red rounded-full inline-block"
              >
                <IoLogoWhatsapp className="h-4 w-4 transition-transform transform hover:scale-150" />
              </a>
              <a
                href="#"
                className="p-2 border border-red rounded-full inline-block"
              >
                <BsFacebook className="h-4 w-4 transition-transform transform hover:scale-150" />
              </a>

              <a
                href="#"
                className="p-2 border border-red rounded-full inline-block"
              >
                <BsInstagram className="h-4 w-4 transition-transform transform hover:scale-150" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/3 text-right">
            <div className="border-l-4 border-green pl-4">
              <h2 className="text-2xl  mb-8 font-serif text-white tracking-wide text-left">
                NewsLetter
              </h2>
            </div>

            <form
              onSubmit={handleSave}
              className="flex items-center justify-center bg-amber-50 shadow-2xl shadow-green flex-col md:mr-0 border p-5 border-emerald-400 border-double w-72"
            >
              <input
                className="p-4 border border-green rounded-md border-b-2 focus:outline-none font-quicksand w-full "
                placeholder="Email Adress"
                type="email"
                required
                name="email"
                value={newletterInfo.email}
                onChange={handleInputChange}
              />
              <button
                type="submit"
                className="p-4 bg-orange-300 text-black hover:bg-primary hover:text-white mt-4 w-full font-quicksand rounded-md text-center align-center justify-center items-center"
              >
                {!loading ? "Submit" : "Submitting..."}
              </button>
            </form>
          </div>
        </div>
        <div className="justify-center items-center text-center md:mt-4 mt-8 mb-6 md:mb-4">
          <p className="font-raleway text-white md:text-md text-sm">
            © {getCurrentYear()}{" "}
            <span className="font-bold bg-green rounded-full p-2 z-20 text-black md:text-md">
              Online Mandi
            </span>{" "}
            | All rights reserved | © SEOM
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
