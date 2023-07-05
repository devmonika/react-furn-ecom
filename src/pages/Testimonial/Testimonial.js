import React, { useRef, useState } from "react";
import Test2 from "./Test2"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";
import "./Testimonial.css";

// import required modules
import {  Autoplay, Navigation } from "swiper";
const Testimonial = () => {

    return (
        <>
      

<section class="mx-20">
<h1 className="text-5xl font-bold mt-10 text-primary text-center testi-title">Testimonial</h1>
  <div
    class="mx-auto max-w-[1340px] px-4 mt-[-4%] sm:px-6 sm:py-24 lg:mr-0 lg:pl-8 lg:pr-0"
  >
    
    <div
      class="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16"
    >
      <div class="max-w-xl text-center sm:text-left">
        <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">
          Don't just take our word for it...
          <br class="hidden sm:block lg:hidden" />
          Read reviews from our customers
        </h2>

        <p class="mt-4 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
          veritatis illo placeat harum porro optio fugit a culpa sunt id!
        </p>

        <div class="hidden lg:mt-8 lg:flex lg:gap-4">
          <button
            class="prev-button rounded-full border border-secondary p-3 text-secondary hover:bg-secondary hover:text-white"
          >
            <span class="sr-only">Previous Slide</span>
            <svg
              class="h-5 w-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>

          <button
            class="next-button rounded-full border border-secondary p-3 text-secondary hover:bg-secondary hover:text-white"
          >
            <span class="sr-only">Next Slide</span>
            <svg
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </div>

      <div class="-mx-6 lg:col-span-2 lg:mx-0 gap-4">
      <div className='!overflow-hidden'>
      <Swiper
          // direction={"vertical"}
        
          navigation={{
            nextEl: '.next-button',
            prevEl: '.prev-button',
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[ Autoplay, Navigation]}
          className="grid"
          
        >
          <SwiperSlide>
            <Test2></Test2>
          </SwiperSlide>
          
          
        </Swiper>
        </div>
      </div>
    </div>

    <div class="mt-8 flex justify-center gap-4 lg:hidden">
      <button
        aria-label="Previous slide"
        class="prev-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
      >
        <svg
          class="h-5 w-5 -rotate-180 transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5l7 7-7 7"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </button>

      <button
        aria-label="Next slide"
        class="next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
      >
        <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 5l7 7-7 7"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          />
        </svg>
      </button>
    </div>
  </div>
</section>


       
      </>
    );
};

export default Testimonial;