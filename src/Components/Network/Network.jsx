import React, { useState } from 'react'
import { FaMapMarkedAlt } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { IoMdTimer } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { MdWeb } from "react-icons/md";
import Layout from '../Layout/Layout';
import playStore from '../../images/playStore.png';
import FarmingGif from '../../images/Gif/farming.gif';
import { ToastContainer } from 'react-toastify';
import headerImage from '../../images/Header.png';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import Goto from '../../Components/Goto/Goto';
import swal from 'sweetalert';
const Network = () => {
  const [loading, setLoading] = React.useState(false);

  const [data, setData] = useState({
    name: "",
    email: "",
    contactNo: "",
    address: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleClear = () => {
    setData({
      name: "",
      contactNo: "",
      email: "",
      address: "",
      message: "",
    });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, contactNo, email, address, message } = data;

    try {
      const res = await fetch("https://v1.nocodeapi.com/karan_ed52/google_sheets/GuBMzkmpOoNgumQC?tabId=Sheet1", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify([
          [
            new Date().toLocaleString(),
            name, contactNo, email, address, message
          ],
        ]),
      });

      if (res.ok) {
        swal("Online Mandi", "Response Submitted", "success");
      } else {
        swal("Online Mandi", "Error In Submission", "error");
      }
    } catch (error) {
      console.log(error);
      swal("Online Mandi", "Error in Submission", "error");
    }

    setLoading(false);
    handleClear();
  };

  return (
    <div>
      <div className="relative">
        <img src={FarmingGif} alt="Farming" className="lg:w-1/2 mt-1 sm:w-2/3 min-h-36 m-auto" />
        <div className="absolute top-1/2 text-center sm:rouded-full right-1/4  bg-white bg-opacity-50 rounded-full p-5 transform -translate-y-1/2 transition-all duration-500">
          <h1 className="text-3xl lg:text-6xl font-serif font-bold text-yellow-950">Contact Us</h1>
        </div>
      </div>

      <div className=' m-2 ring-1 bg-gradient-to-br from-cyan-100 rounded-3xl p-5 ring-purple shadow-inner shadow-black ' >

        <div className="mb-4">
          <div className='flex flex-col lg:text-2xl md:text-md sm:text-sm font-semibold text-green-500 font-serif items-center'>
            <p > #Let's Talk!</p>
            <p className='text-blue-400 shadow-lg px-4 shadow-primary rounded-sm '>Leave a MESSAGE ! </p>
            <p className=' underline underline-offset-4 text-ellipsis hover:text-red'>We love to hear about you!</p>
          </div>
        </div>
        <Goto />
        <div className="flex mt-4 sm:mx-auto mx-4 justify-center flex-wrap">

          <div className="flex my-2 p-3 flex-col">
            <h1 className='text-gray-800 text-md font-serif  '>GET IN TOUCH</h1>
            <p className='text-gray-700  text-sm font-serif'>Visit one of our store location or Contact us today</p>
            <h1 className='text-gray-900 text-sm mb-2 mt-2 font-serif '>Head Office</h1>
            <div className="flex flex-row">
              <FaMapMarkedAlt className='mr-2' />
              <p className='text-gray-700  text-sm font-serif'> 1, 01, SH 51, State Bank Of India,Bapawar Kalan, Kota, Rajasthan 325207</p>
            </div>
            <div className="flex flex-row">
              <GoMail className='mr-2' />
              <p className='text-gray-900  text-sm font-serif'>sale.onlinemandi@gmail.com</p>
            </div>
            <div className="flex flex-row">
              <IoCall className='mr-2' />
              <p className='text-gray-900  text-sm font-serif'>+91-9509248058</p>
            </div>

            <div className="flex flex-row">
              <MdWeb className='mr-2' />
              <p className='text-gray-900  text-sm font-serif'>https://onlinemandii.in/</p>
            </div>

            <div className="flex flex-row">
              <IoMdTimer className='mr-2' />
              <p className='text-gray-900  text-sm font-serif'> Monday to Saturday: <span className='text-red-900 font-semibold'> 9.00am to 17.00pm</span></p>
            </div>

            <Link className='flex flex-row ' to="https://play.google.com/store/apps/details?id=com.mycompany.ommandi">
              <img src={playStore} alt="App" className='w-96 items-center' />


            </Link>



          </div>


          <aside >
            <iframe className='m-2 ring-1 ring-primary rounded-xl shadow-black shadow-md'
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.265170029036!2d76.43310707537296!3d24.923034977888424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396553db3081f48b%3A0x4d6431ca5fd99697!2sState%20Bank%20of%20India%20BAPAWAR!5e0!3m2!1sen!2sin!4v1713954723015!5m2!1sen!2sin"
              width="350"
              height="400"
              style={{ border: '0' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </aside>





          {/* Form */}
          <div>
            <form
              className="  shadow-black shadow-xl bg-cyan-50 border-red m-2 border-b-8 border-t-8 p-4 rounded-3xl w-96"
              onSubmit={handleSave}
            >
              <h2 className="text-2xl text-center font-raleway mb-3">Contact Us</h2>
              <div className="mb-2">
                <label htmlFor="name" className="block text-gray-600  text-sm mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder='Enter your name'
                  value={data.name}
                  onChange={handleInputChange}
                  className="w-full p-2 ring-1 ring-primary shadow-inner shadow-black  rounded"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="contactNo" className="block text-gray-600 text-sm mb-1">
                  Contact No
                </label>
                <input
                  type="text"
                  id="contactNo"
                  name="contactNo"
                  required
                  placeholder='Enter your Contact No'
                  value={data.contactNo}
                  onChange={handleInputChange}
                  className="w-full p-2 ring-1 ring-primary shadow-inner shadow-black rounded"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="block text-gray-600 text-sm mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder='Enter your Email'
                  value={data.email}
                  onChange={handleInputChange}
                  className="w-full p-2 ring-1 ring-primary shadow-inner shadow-black rounded"
                />
              </div>
              <div className="mb-2">
                <label htmlFor="address" className="block text-gray-600 text-sm mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  placeholder='Enter Your Address'
                  value={data.address}
                  onChange={handleInputChange}
                  className="w-full p-2 ring-1 ring-primary shadow-inner shadow-black  rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-600 text-sm mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  placeholder='Type Message here ....'
                  value={data.message}
                  onChange={handleInputChange}
                  className="w-full p-2 ring-1 ring-primary shadow-inner shadow-black rounded"
                  rows="4"
                />
              </div>
              {/* Submission Button */}
              <button
                type="submit"
                className="bg-blue text-white font-serif hover:bg-primary w-full p-2 rounded  hover:shadow-black shadow-lg hover:cursor-pointer"
              >
                {!loading ? (
                  "Submit"
                ) : (
                  "Submitting..."
                )}
              </button>
            </form>
          </div>
        </div>


      </div>
      <ToastContainer />
    </div>
  )
}

export default Network
