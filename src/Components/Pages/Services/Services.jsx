import React from "react";
import Navbar from "../../Navigation/Navbar";
import Footer from "../../Footer/Footer";
import i1 from '../../../images/Services/1.svg'
import i2 from "../../../images/Services/2.svg";
import i3 from "../../../images/Services/3.svg";
import i4 from "../../../images/Services/4.svg";
import Features from "../../../Features/Features";

const Services = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen overflow-hidden font-poppins">
        {/* services component start */}
        <div className="sm:mt-36 mt-24">
          <h1 className="flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-blue to-yellow-500 font-extrabold sm:text-7xl text-5xl text-center">
            Our services that help you Grow!
          </h1>
        </div>
        <div className="pb-16">
          {/* Code block starts */}
          <dh-component>
            <section className="max-w-8xl mx-auto container bg-white pt-16">
              <div className="">
                <div
                  role="contentinfo"
                  className="flex items-center flex-col px-4"
                >
                  <p
                    tabIndex={0}
                    className="focus:outline-none uppercase text-sm text-center text-gray-600 leading-4"
                  >
                    START TODAY AND
                  </p>
                  <h1
                    tabIndex={0}
                    className=" text-3xl sm:text-5xl font-extrabold text-center leading-10 text-gray-800 sm:w-[70%] w-[95%] pt-4"
                  >
                    Best Bidding at our end
                  </h1>
                </div>
                <div
                  tabIndex={0}
                  aria-label="group of cards"
                  className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4"
                >
                  <div
                    tabIndex={0}
                    aria-label="card 1"
                    className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0  rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img src={i1} alt="drawer" />
                      </div>
                    </div>
                    <div className="w-10/12">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-bold leading-tight text-gray-800"
                      >
                        Direct Sales Challenges
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        Farmers often face difficulties in selling their crops directly due to the inability to reach potential buyers and the limited scale of production among small farmers
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    aria-label="card 2"
                    className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0  rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img src={i2} alt="check" />
                      </div>
                    </div>
                    <div className="w-10/12">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                      >
                        Capital Needs!
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        Raising enough capital to manage operations effectively is essential for farmers. This includes having sufficient funds to pay for inputs and labor, which impacts their ability to sell crops timely
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    aria-label="card 3"
                    className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0  rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img src={i3} alt="html tag" />
                      </div>
                    </div>
                    <div className="w-10/12">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                      >
                        Always catch a Rising-Trend
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        Ensuring proper access to markets is crucial for farmers. This involves finding suitable markets where they can sell their products at fair prices!
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={0}
                    aria-label="card 4"
                    className="focus:outline-none flex sm:w-full md:w-5/12 pb-20"
                  >
                    <div className="w-20 h-20 relative mr-5">
                      <div className="absolute top-0 right-0 bg-indigo-100 rounded w-16 h-16 mt-2 mr-1" />
                      <div className="absolute text-white bottom-0 left-0  rounded w-16 h-16 flex items-center justify-center mt-2 mr-3">
                        <img src={i4} alt="monitor" />
                      </div>
                    </div>
                    <div className="w-10/12">
                      <h2
                        tabIndex={0}
                        className="focus:outline-none text-lg font-semibold leading-tight text-gray-800"
                      >
                        USDA Support!
                      </h2>
                      <p
                        tabIndex={0}
                        className="focus:outline-none text-base text-gray-600 leading-normal pt-2"
                      >
                        Farmers can manage their crops and products strategically with the help of USDA programs, which offer tools and information to aid in the selling process
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </dh-component>
          {/* Code block ends */}
        </div>
        {/* services component ends */}
        {/* features component starts */}
        <Features />
        {/* features component ends */}
        {/* stats component starts */}
        <div className="xl:px-20 px-6 py-20 xl:mx-auto xl:container">
          <h1 className="xl:text-5xl md:text-4xl text-2xl font-semibold leading-tight text-center text-gray-800 sm:mb-0 mb-12">
            We Provide Services{" "}
            <br className="md:block hidden" />
            All over the INDIA
          </h1>
          <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
            <img
              src="https://i.ibb.co/KjrPCyW/map.png"
              alt="world map image"
              className="w-full xl:h-full h-96 object-cover sm:block hidden"
            />
            <img
              src="https://i.ibb.co/SXKj9Mf/map-bg.png"
              alt="mobile-image"
              className="sm:hidden -mt-10 block w-full h-96 object-cover  absolute z-0"
            />
            <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12">
              <p className="text-3xl font-semibold text-gray-800">20+</p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                Companies Helped
              </p>
            </div>
            <div className="shadow-lg xl:p-6 p-4  sm:w-auto w-full bg-white sm:absolute relative z-20  mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12">
              <p className="text-3xl font-semibold text-gray-800">25%</p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                Average Performance Increase
              </p>
            </div>
            <div className="shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24">
              <p className="text-3xl font-semibold text-gray-800">70%</p>
              <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">
                Companies Purchase Again
              </p>
            </div>
          </div>
        </div>
        {/* stats component ends */}
        <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue to-violet"></div>
      </div>
      <Footer />
    </>
  );
};

export default Services;
