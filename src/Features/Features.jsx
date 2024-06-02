import React, { useEffect, useRef } from "react";
import logo1 from "../../src/images/Features/f1.png";
import logo2 from "../../src/images/Features/f2.png";
import logo3 from "../../src/images/Features/f3.png";
import logo4 from "../../src/images/Features/f4.png";
import logo5 from "../../src/images/Features/f5.png";
import logo6 from "../../src/images/Features/f6.png";
import image1 from "../../src/images/Features/machine1.jpg";
import image2 from "../../src/images/Features/machine2.jpg";
import { inView, useAnimation, useInView, motion } from "framer-motion";

const Features = () => {
  const { innerWidth: width, innerHeight: height } = window;
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);
  return (
    <>
      <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue to-violet"></div>
      <div className="max-w-screen overflow-x-hidden font-poppins">
        {/* features section */}
        {width < 631 ? (
          <>
            <section className="bg-gradient-to-br from-cyan-100  text-black">
              <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl ">
                    Empowering Business
                  </h2>
                  <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
                    Growth Through Advanced Technology Solutions, Analytics and
                    Professionaly Trained Personnel
                  </p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">
                      Inovation Begins Here
                    </h3>
                    <p className="mt-3 text-lg ">
                      Unleash business growth with advanced technology
                      solutions, optimizing operations, integrating innovative
                      technologies, and receiving personalized support.
                    </p>
                    <div className="mt-12 space-y-12">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                            <img src={logo1} alt="logo1" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 ">
                            Advanced Testing Facilities
                          </h4>
                          <p className="mt-2 ">
                            Implement advanced machinery and technology for crop testing to ensure quality and compliance with market standards, enhancing the credibility and reliability of the produce.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                            <img src={logo2} alt="logo2" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 ">
                            Innovative Technology Integration
                          </h4>
                          <p className="mt-2 ">
                            Seamlessly integrate cutting-edge technologies like
                            AI, IoT, and cloud computing. Automate tasks,
                            improve communication, and unlock growth potential.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                            <img src={logo3} alt="logo3" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 ">
                            Customer and Farmer Satisfaction
                          </h4>
                          <p className="mt-2 ">
                            Provide a transparent and user-friendly interface where both customers and farmers can give feedback. Ensure prompt resolution of any issues to maintain high satisfaction levels.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div aria-hidden="true" className="mt-10 lg:mt-0">
                      <img
                        src={image1}
                        alt="image1"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="lg:col-start-2">
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">
                        Data-Driven Decisions, Personalized Solutions
                      </h3>
                      <p className="mt-3 text-lg ">
                        Data-driven decisions. Personalized solutions.
                        Continuous innovation. Propel your business forward with
                        our powerful analytics, tailored to your needs, and
                        future-proofed by our commitment to innovation.
                      </p>
                      <div className="mt-12 space-y-12">
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                              <img src={logo4} alt="logo4" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 ">
                              Market Insights and Recommendations
                            </h4>
                            <p className="mt-2 ">
                              Offer detailed market analysis, sales reports, and crop recommendations to help farmers make informed decisions about what to grow and when to sell
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                              <img src={logo5} alt="logo5" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 ">
                              Personalized Solutions
                            </h4>
                            <p className="mt-2 ">
                              Ensure the platform is accessible to farmers in rural areas, possibly through kiosks or local centers, to facilitate ease of use and wider reach.
                            </p>
                          </div>
                        </div>
                        <div className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                              <img src={logo6} alt="logo6" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 ">
                              Secure Payment Systems
                            </h4>
                            <p className="mt-2 ">
                              Provide secure and multiple payment options to ensure timely and reliable payments to farmers. Implement a transparent payment system to build trust and loyalty among users.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                      <img
                        src={image2}
                        alt="image2"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className=" text-black">
              <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                <div>
                  <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl ">
                    Empowering Business
                  </h2>
                  <p className="max-w-3xl mx-auto mt-4 text-xl text-center ">
                    Growth Through Advanced Technology Solutions, Analytics and
                    Professionaly Trained Personnel
                  </p>
                </div>
                <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">
                      Inovation Begins Here
                    </h3>
                    <p className="mt-3 text-lg ">
                      Unleash business growth with advanced technology solutions, optimizing operations, integrating innovative technologies, and receiving personalized support.
                    </p>
                    <div className="mt-12 space-y-12">
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="flex"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md dark:text-gray-900">
                            <img src={logo1} alt="logo1" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 ">
                            Advanced Testing Facilities
                          </h4>
                          <p className="mt-2 ">
                            Implement advanced machinery and technology for crop testing to ensure quality and compliance with market standards, enhancing the credibility and reliability of the produce.
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.5, delay: 0.35 }}
                        className="flex"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                            <img src={logo2} alt="logo2" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 ">
                            Innovative Technology Integration
                          </h4>
                          <p className="mt-2 ">
                            Seamlessly integrate cutting-edge technologies like AI, IoT, and cloud computing. Automate tasks, improve communication, and unlock growth potential.
                          </p>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, y: 75 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.5, delay: 0.55 }}
                        className="flex"
                      >
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                            <img src={logo3} alt="logo3" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium leading-6 ">
                            Customer and Farmer Satisfaction
                          </h4>
                          <p className="mt-2 ">
                            Provide a transparent and user-friendly interface where both customers and farmers can give feedback. Ensure prompt resolution of any issues to maintain high satisfaction levels.


                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  <div ref={ref}>
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: 75 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.5, delay: 0.25 }}
                      aria-hidden="true"
                      className="mt-10 lg:mt-0"
                    >
                      <img
                        src={image1}
                        alt="image1"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </motion.div>
                  </div>
                </div>
                <div>
                  <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                    <div className="lg:col-start-2">
                      <h3 className="text-2xl font-bold tracking-tight sm:text-3xl ">
                        Data-Driven Decisions, Personalized Solutions
                      </h3>
                      <p className="mt-3 text-lg ">
                        Data-driven decisions. Personalized solutions.
                        Continuous innovation. Propel your business forward with
                        our powerful analytics, tailored to your needs, and
                        future-proofed by our commitment to innovation.
                      </p>
                      <div className="mt-12 space-y-12">
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControlls}
                          transition={{ duration: 0.5, delay: 0.15 }}
                          className="flex"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                              <img src={logo4} alt="logo4" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 ">
                              Market Insights and Recommendations
                            </h4>
                            <p className="mt-2 ">
                              Offer detailed market analysis, sales reports, and crop recommendations to help farmers make informed decisions about what to grow and when to sell
                            </p>
                          </div>
                        </motion.div>
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControlls}
                          transition={{ duration: 0.5, delay: 0.35 }}
                          className="flex"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                              <img src={logo5} alt="logo5" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 ">
                              Personalized Solutions
                            </h4>
                            <p className="mt-2 ">
                              Ensure the platform is accessible to farmers in rural areas, possibly through kiosks or local centers, to facilitate ease of use and wider reach.
                            </p>
                          </div>
                        </motion.div>
                        <motion.div
                          ref={ref}
                          variants={{
                            hidden: { opacity: 0, y: -75 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          initial="hidden"
                          animate={mainControlls}
                          transition={{ duration: 0.5, delay: 0.55 }}
                          className="flex"
                        >
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md  dark:text-gray-900">
                              <img src={logo6} alt="logo6" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading-6 ">
                              Secure Payment Systems
                            </h4>
                            <p className="mt-2 ">
                              Provide secure and multiple payment options to ensure timely and reliable payments to farmers. Implement a transparent payment system to build trust and loyalty among users.
                            </p>
                          </div>
                        </motion.div>
                      </div>
                    </div>
                    <motion.div
                      ref={ref}
                      variants={{
                        hidden: { opacity: 0, x: -75 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial="hidden"
                      animate={mainControlls}
                      transition={{ duration: 0.5, delay: 0.15 }}
                      className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
                    >
                      <img
                        src={image2}
                        alt="image2"
                        className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                      />
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {/* end */}
      </div>
      <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue to-violet"></div>
    </>
  );
};

export default Features;
