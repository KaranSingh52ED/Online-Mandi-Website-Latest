import React, { useEffect, useRef } from "react";
import { MdVerified } from "react-icons/md";
import { useAnimation, useInView, motion } from "framer-motion";

const Review = () => {
  const { innerWidth: Width } = window;
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="overflow-x-hidden max-w-screen font-poppins">
      <section className="">
        {Width < 631 ? (
          <>
            <div className="container px-6 py-12 mx-auto">
              <div className="grid items-center gap-4 xl:grid-cols-5">
                <div className="max-w-2xl mx-auto rounded shadow-md bg-fuchsia-100 shadow-black p-6 my-8 space-y-4 text-center xl:col-span-2 xl:text-left">
                  <h2 className="text-4xl font-bold text-black">
                    What our costumers have to say
                  </h2>
                  <p className="text-black">
                    Here are some reviews of our costumers and their excperience
                    with our services and that wee provide!
                  </p>
                </div>
                <div className="p-6 xl:col-span-3">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid content-center gap-4">
                      <div className="p-6 rounded shadow-md bg-gray-300">
                        <p>
                          As a farmer, the mandi website has been a game-changer for me. I can list my crops and receive real-time market prices, ensuring I get the best deal. The crop testing feature is particularly impressive, using advanced machines to guarantee quality. This transparency has boosted my sales and built trust with buyers. The customer support is also top-notch, assisting me at every step.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src="https://source.unsplash.com/50x50/?portrait?1"
                            alt=""
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-md font-semibold">Sanjay Thekedar</p>
                            <p className="text-sm text-gray-400">Logitech</p>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-green-400 ml-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded shadow-md bg-gray-400">
                        <p>
                          As a trader, purchasing through this mandi website is a breeze. The advanced crop testing assures me of the quality, which reduces the risk of purchasing inferior products. The platform provides detailed reports on each batch of crops, helping me make informed decisions. The ease of transactions and prompt deliveries make it my go-to marketplace.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src="https://source.unsplash.com/50x50/?portrait?2"
                            alt=""
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-md font-semibold">
                              Dharampal Singh
                            </p>
                            <p className="text-sm dark:text-gray-400">
                              Microsoft
                            </p>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-green-400 ml-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid content-center gap-4">
                      <div className="p-6 rounded shadow-md bg-gray-400">
                        <p>
                          The mandi website has simplified selling my harvest. The platform's user-friendly interface makes it easy to list crops and track prices. The advanced testing machines ensure my produce meets high standards, attracting more buyers. I'm also pleased with the fast payments and comprehensive support services provided. I highly recommend this platform to all farmers.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src="https://source.unsplash.com/50x50/?portrait?3"
                            alt=""
                            className="w-12 h-12 bg-center bg-cover rounded-full "
                          />
                          <div>
                            <p className="text-md font-semibold">
                              Monika Rajput
                            </p>
                            <p className="text-sm dark:text-gray-400">Dell</p>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-green-400 ml-2"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded shadow-md bg-gray-300">
                        <p>
                          This mandi website stands out for its reliability and efficiency. The detailed crop testing reports give me confidence in my purchases, and the competitive pricing ensures I get value for money. The customer satisfaction feature ensures that any issues are promptly addressed, making the entire buying process smooth and hassle-free.
                        </p>
                        <div className="flex items-center mt-4 space-x-4">
                          <img
                            src="https://source.unsplash.com/50x50/?portrait?4"
                            alt=""
                            className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                          />
                          <div>
                            <p className="text-md font-semibold">
                              Rahul Kumar Sharma
                            </p>
                            <p className="text-sm dark:text-gray-400">Razer</p>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-green-400 ml-2"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="container px-6 py-12 mx-auto">
              <div className="grid items-center gap-4 xl:grid-cols-5">
                <motion.div
                  ref={ref}
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  initial="hidden"
                  animate={mainControlls}
                  transition={{ duration: 1, delay: 0.25 }}
                  className="max-w-2xl mx-auto rounded shadow-md bg-yellow-100 p-6 my-8 space-y-4 text-center xl:col-span-2 xl:text-left"
                >
                  <h2 className="text-4xl font-bold text-black">
                    What our costumers have to say
                  </h2>
                  <p className="text-black">
                    Here are some reviews of our costumers and their excperience
                    with our services and that wee provide!
                  </p>
                </motion.div>
                <div className="p-6 xl:col-span-3">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid content-center gap-4">
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: -75, y: -45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="p-6 rounded shadow-md bg-gray-200"
                      >
                        <p>
                          As a farmer, the mandi website has been a game-changer for me. I can list my crops and receive real-time market prices, ensuring I get the best deal. The crop testing feature is particularly impressive, using advanced machines to guarantee quality. This transparency has boosted my sales and built trust with buyers. The customer support is also top-notch, assisting me at every step.
                        </p>
                        <div className="flex justify-between items-center mt-4 space-x-4">
                          <div className="flex">
                            <img
                              src="https://source.unsplash.com/50x50/?portrait?1"
                              alt=""
                              className="w-12 h-12 bg-center bg-cover rounded-full "
                            />
                            <div className="flex-col ml-4">
                              <p className="text-lg font-semibold block">
                                Sanjay Thekedar
                              </p>
                              <p className="text-sm text-gray-400 block">
                                Asus
                              </p>
                            </div>
                          </div>

                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-green-400 ml-2"
                            />
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: -75, y: 45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className="p-6 rounded shadow-md bg-gray-400"
                      >
                        <p>
                          As a trader, purchasing through this mandi website is a breeze. The advanced crop testing assures me of the quality, which reduces the risk of purchasing inferior products. The platform provides detailed reports on each batch of crops, helping me make informed decisions. The ease of transactions and prompt deliveries make it my go-to marketplace.
                        </p>
                        <div className="flex items-center justify-between mt-4 space-x-4">
                          <div className="flex">
                            <img
                              src="https://source.unsplash.com/50x50/?portrait?1"
                              alt=""
                              className="w-12 h-12 bg-center bg-cover rounded-full "
                            />
                            <div className="flex-col sm:ml-2 ">
                              <p className="text-lg font-semibold block">
                                Deviram Bhatiya
                              </p>
                              <p className="text-sm text-gray-400 block">
                                Razer
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-green-400 ml-2"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="grid content-center gap-4">
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: 75, y: -45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.7, delay: 0.55 }}
                        className="p-6 rounded shadow-md bg-gray-400"
                      >
                        <p>
                          The mandi website has simplified selling my harvest. The platform’s user-friendly interface makes it easy to list crops and track prices. The advanced testing machines ensure my produce meets high standards, attracting more buyers. I'm also pleased with the fast payments and comprehensive support services provided. I highly recommend this platform to all farmers.
                        </p>
                        <div className="flex justify-between items-center mt-4 space-x-4">
                          <div className="flex">
                            <img
                              src="https://source.unsplash.com/50x50/?portrait?1"
                              alt=""
                              className="w-12 h-12 bg-center bg-cover rounded-full "
                            />
                            <div className="flex-col ml-4">
                              <p className="text-lg font-semibold block">
                                Rahul Kumar Sharma
                              </p>
                              <p className="text-sm text-gray-400 block">
                                Microsoft
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-green-400 ml-2"
                            />
                          </div>
                        </div>
                      </motion.div>
                      <motion.div
                        ref={ref}
                        variants={{
                          hidden: { opacity: 0, x: 75, y: 45 },
                          visible: { opacity: 1, x: 0, y: 0 },
                        }}
                        initial="hidden"
                        animate={mainControlls}
                        transition={{ duration: 0.8, delay: 0.75 }}
                        className="p-6 rounded shadow-md bg-emerald-100"
                      >
                        <p>
                          This mandi website stands out for its reliability and efficiency. The detailed crop testing reports give me confidence in my purchases, and the competitive pricing ensures I get value for money. The customer satisfaction feature ensures that any issues are promptly addressed, making the entire buying process smooth and hassle-free.
                        </p>
                        <div className="flex justify-between items-center mt-4 space-x-4">
                          <div className="flex">
                            <img
                              src="https://source.unsplash.com/50x50/?portrait?1"
                              alt=""
                              className="w-12 h-12 bg-center bg-cover rounded-full "
                            />
                            <div className="flex-col ml-4">
                              <p className="text-lg font-semibold block">
                                Dharmpal Singh
                              </p>
                              <p className="text-sm text-gray-400 block">
                                Dell
                              </p>
                            </div>
                          </div>
                          <div className="flex">
                            <MdVerified
                              size={Width < 631 ? 35 : 40}
                              className="text-green-400 ml-2"
                            />
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
      <div className="w-[70%]  h-[2px] bg-gradient-to-r from-blue to-violet"></div>
    </div>
  );
};

export default Review;
