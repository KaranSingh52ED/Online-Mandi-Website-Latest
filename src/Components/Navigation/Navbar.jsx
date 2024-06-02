import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import { FaCartPlus } from 'react-icons/fa6';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="ring-2 ring-blue shadow shadow-black  bg-orange-400">
      <div className="max-w-7xl mx-auto z-20 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className='flex flex-col sticky lg:left-16 sm:left-10' >
              <img src={logo} alt="Online Mandi" className='h-12 w-12 items-center justify-center rounded-md shadow-lg z-10  shadow-black ' />
            </Link>

            <div className="hidden md:block fixed top-0 right-64 justify-end p-4">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className="text-red hover:bg-green hover:text-black px-3 mx-3 py-2 hover:shadow-black rounded-none text-md font-serif ring-1 ring-gold  shadow-lg bg-gradient-to-br from-yellow-400 to-red-300 shadow-primary">Home</a>
                <a href="/services" className="text-red hover:bg-green hover:text-black px-3 mx-3 py-2 hover:shadow-black rounded-none text-md font-serif ring-1 ring-gold  shadow-lg bg-gradient-to-br from-yellow-400 to-red-300 shadow-primary">Services</a>
                {/* <a href="/e-mandi" className="text-red hover:bg-green hover:text-black px-3 mx-3 py-2 hover:shadow-black rounded-none text-md font-serif ring-1 ring-gold  shadow-lg bg-gradient-to-br from-yellow-400 to-red-300 shadow-primary">E-Mandi</a> */}
                <a href="/about" className="text-red hover:bg-green hover:text-black px-3 mx-3 py-2 hover:shadow-black rounded-none text-md font-serif ring-1 ring-gold  shadow-lg bg-gradient-to-br from-yellow-400 to-red-300 shadow-primary">About Us</a>
                <a href="/contact" className="text-red hover:bg-green hover:text-black px-3 mx-3 py-2 hover:shadow-black rounded-none text-md font-serif ring-1 ring-gold  shadow-lg bg-gradient-to-br from-yellow-400 to-red-300 shadow-primary">Contact Us</a>
                <a href="/policy" className="text-red hover:bg-green hover:text-black px-3 mx-3 py-2 hover:shadow-black rounded-none text-md font-serif ring-1 ring-gold  shadow-lg bg-gradient-to-br from-yellow-400 to-red-300 shadow-primary">Privacy Policy</a>
                <a href="https://play.google.com/store/apps/details?id=com.mycompany.ommandi" className="text-red hover:bg-purple hover:text-black px-3 mx-3 py-2 hover:shadow-black rounded-none text-md font-serif ring-1 ring-gold  shadow-lg bg-gradient-to-br from-green to-red-300 shadow-primary">Download Our App</a>
              </div>
            </div>
            <div className='fixed top-0 right-16 flex justify-end p-4'>
              <Link to="/login" className='mr-4'>
                <CgProfile className='text-black text-4xl bg-none rounded-full bg-gray-100 my-auto p-0.5 hover:bg-gray-200 hover:text-green ring-1 ring-gold shadow-lg hover:shadow-black' />
              </Link>
              <Link to="/cart">
                <FaCartPlus className='text-black text-4xl bg-none rounded-none my-auto hover:text-green' />
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-green inline-flex items-center justify-center p-2 rounded-full text-black hover:text-purple hover:bg-yellow-400  
                            ring-2 ring-grey-100  shadow-xl shadow-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-1000 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="flex flex-col text-center text-lg justify-center px-2 pt-2 pb-3  sm:px-3">
              <a href="/" className="text-red hover:bg-green hover:text-black px-5 items-center mx-3 py-1 m-2 text-md font-serif ring-2 ring-gold shadow-lg bg-gradient-to-br from-yellow-400 to-red-300 shadow-primary" >Home</a>

              <a href="/services" className="text-red hover:bg-green hover:text-black px-5 items-center mx-3 py-1 m-2 text-md font-serif ring-2 ring-gold shadow-lg bg-gradient-to-br from-yellow-400 to-red-300 shadow-primary" >Services</a>
              {/* <a href="/e-mandi" className="text-red hover:bg-green hover:text-black px-5 items-center mx-3 py-1 m-2 text-md font-serif ring-2 ring-gold shadow-lg bg-gradient-to-br from-yellow-400 to-red-300 shadow-primary">E-Mandi</a> */}

              <a href="/about" className="text-red hover:bg-green hover:text-black px-5 items-center mx-3 py-1 m-2 text-md font-serif ring-2 ring-gold shadow-lg bg-gradient-to-br from-yellow-400 to-red-300 shadow-primary">About Us</a>
              <a href="/contact" className="text-red hover:bg-green hover:text-black px-5 items-center mx-3 py-1 m-2 text-md font-serif ring-2 ring-gold shadow-lg bg-gradient-to-br from-yellow-400 to-red-300 shadow-primary">Contact Us</a>
              <a href="/policy" className="text-red hover:bg-green hover:text-black px-5 items-center mx-3 py-1 m-2 text-md font-serif ring-2 ring-gold shadow-lg bg-gradient-to-br from-yellow-400 to-red-300 shadow-primary">Privacy Policy</a>
              <a href="https://play.google.com/store/apps/details?id=com.mycompany.ommandi" className="text-red hover:bg-green hover:text-black px-5 items-center mx-3 py-1 m-2 text-md font-serif ring-2 ring-gold shadow-lg bg-gradient-to-br from-yellow-400 to-red-300 shadow-primary">Download Our App</a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
