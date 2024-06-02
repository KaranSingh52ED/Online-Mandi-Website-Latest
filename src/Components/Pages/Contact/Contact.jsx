import React from "react";
import Network from "./../../Network/Network";
import Layout from './../../Layout/Layout';

const Contact = () => {
  return (
    <Layout>
      <Network />
      {/* brands */}
      {/* <section class="bg-gradient-to-br from-cyan-100 py-10 lg:py-[96px] sm:h-20 ">
        <div class="container mx-auto sm:-mt-10">
          <div class="-mx-4 flex flex-wrap">
            <div class="w-full px-4">
              <div class="flex flex-wrap items-center justify-center">
                <a
                  href="javascript:void(0)"
                  class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img
                    src="https://www.datagroup.in/wp-content/uploads/2015/11/data-group111.png"
                    alt="image"
                    class="h-10 w-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* brands end  */}
      {/* recent news blog */}
      {/* <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div> */}
      <section class="pt-20 pb-10 lg:pt-[120px] font-serif  lg:pb-20 bg-gradient-to-tl from-blue">
        <div class="container mx-auto">
          <div class="-mx-4 flex flex-wrap justify-center">
            <div class="w-full px-4">
              <div class="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span class="text-primary mb-2 block text-2xl  font-semibold">
                  Our Blogs
                </span>
                <h2 class="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  Our Recent News
                </h2>
                <p class="text-body-color text-base">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>
          <div class="-mx-4 flex flex-wrap">
            <div class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div class="mx-auto mb-10 max-w-[370px]">
                <div class="mb-8 overflow-hidden rounded">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                    alt="image"
                    class="w-full"
                  />
                </div>
                <div>
                  <span class="bg-blue-400/80 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    Dec 22, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Meet AutoManage, the best AI management tools
                    </a>
                  </h3>
                  <p class="text-body-color text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div class="mx-auto mb-10 max-w-[370px]">
                <div class="mb-8 overflow-hidden rounded">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg"
                    alt="image"
                    class="w-full"
                  />
                </div>
                <div>
                  <span class="bg-blue-400/80 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    Mar 15, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      How to earn more money as a wellness coach
                    </a>
                  </h3>
                  <p class="text-body-color text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2 lg:w-1/3">
              <div class="mx-auto mb-10 max-w-[370px]">
                <div class="mb-8 overflow-hidden rounded">
                  <img
                    src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg"
                    alt="image"
                    class="w-full"
                  />
                </div>
                <div>
                  <span class="bg-blue-400/80 mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-white">
                    Jan 05, 2023
                  </span>
                  <h3>
                    <a
                      href="javascript:void(0)"
                      class="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      The no-fuss guide to upselling and cross selling
                    </a>
                  </h3>
                  <p class="text-body-color text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* recent news blog end */}
      <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-400 to-violet-500"></div>
    </Layout>
  );
};

export default Contact;
