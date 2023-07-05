import React from 'react';
import"./Blog.css"
const Blog = () => {
    return (
        <div className='py-20'>
   
   <h1 class="text-center xl:text-5xl md:text-4xl text-2xl font-bold text-primary mb-16 dark:text-white blog-title">Read Our Latest Blog</h1>
      <div className='grid grid-cols-3  gap-5 mx-20'>
        <div>
            <img src="https://i.postimg.cc/MG0jQ4rF/inside-weather-db-H-vy7v-ICE-unsplash.jpg"  alt="woman smiling" />
            <h2 class="text-xl font-semibold leading-5 mt-8 text-gray-800 dark:text-white">We make living better...</h2>
            <div class="mt-6 flex items-center cursor-pointer">
                <p class="pr-3 text-base font-medium leading-4 underline text-gray-800 dark:text-white">Read More</p>
                <img class="dark:bg-white px-1 py-2 rounded" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-3-svg1.svg" alt="arrow" /> 
            </div>
            <p class="text-base mt-4 italic font-italic leading-4 text-gray-600 dark:text-gray-200">23, Feburary 2023</p>
        </div>
        <div >
                <img src=" https://i.postimg.cc/8C4B9fPP/spacejoy-ff-Fndd-UEa-L4-unsplash.jpg"  alt="lady with plant" />
                <h2 class="text-xl font-semibold leading-5 mt-8 text-gray-800 dark:text-white">Furniture that will leave people breathless...</h2>
                <div class="mt-6 flex items-center cursor-pointer">
                    <p class="pr-3 text-base font-medium leading-4 underline text-gray-800 dark:text-white">Read More</p>
                    <img class="dark:bg-white px-1 py-2 rounded" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-3-svg1.svg" alt="arrow" /> 
                </div>
                <p class="text-base mt-4 italic font-italic leading-4 text-gray-600 dark:text-gray-200">23, Feburary 2023</p>
            </div>
                <div>
                    <img src="https://i.postimg.cc/rmYstMg9/collov-home-design-5-HHAP5-UWFM-unsplash.jpg"  alt="coffe pouring" />
                    <h2 class="text-xl font-semibold leading-5 mt-8 text-gray-800 dark:text-white">Furnish your home, furnish your life...</h2>
                    <div class="mt-6 flex items-center cursor-pointer">
                        <p class="pr-3 text-base font-medium leading-4 underline text-gray-800 dark:text-white">Read More</p>
                      <img class="dark:bg-white px-1 py-2 rounded" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-3-svg1.svg" alt="arrow" /> 
                    </div>
                <p class="text-base mt-4 italic font-italic leading-4 text-gray-600 dark:text-gray-200">23, Feburary 2023</p>
            </div>
      </div>
    
        {/* <div class="2xl:container 2xl:mx-auto flex flex-wrap items-start justify-center pt-6 gap-6">
            <div class="flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
                
    
               
        </div>
        <div class="flex lg:flex-col sm:flex-row flex-col items-start lg:gap-0 gap-6 lg:w-96 w-auto">
        

            
        </div>
        <div class="flex xl:flex-col sm:flex-row flex-col items-start xl:gap-0 gap-6 xl:w-96 w-auto">
            <div>
                <img src="https://i.postimg.cc/rmYstMg9/collov-home-design-5-HHAP5-UWFM-unsplash.jpg"  alt="Delighful breakfast" />
                <h2 class="text-xl font-semibold leading-5 mt-8 text-gray-800 dark:text-white">e Busting myths about hair</h2>
                <div class="mt-6 flex items-center cursor-pointer">
                    <p class="pr-3 text-base font-medium leading-4 underline text-gray-800 dark:text-white">Read More</p>
                    <img class="dark:bg-white px-1 py-2 rounded" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-3-svg1.svg" alt="arrow" /> 
                </div>
                <p class="text-base mt-4 italic font-italic leading-4 text-gray-600 dark:text-gray-200">23, Feburary 2021</p>
            </div>

            <div class="xl:mt-10">
                <img src="https://i.ibb.co/c8dPSYB/blog-6.png"  alt="hats with image frame in middle" />
                <h2 class="text-xl font-semibold leading-5 mt-8 text-gray-800 dark:text-white">f Busting myths about hair</h2>
                <div class="mt-6 flex items-center cursor-pointer">
                    <p class="pr-3 text-base font-medium leading-4 underline text-gray-800 dark:text-white">Read More</p>
                    <img class="dark:bg-white px-1 py-2 rounded" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/blog-3-svg1.svg" alt="arrow" /> 
                </div>
                <p class="text-base mt-4 italic font-italic leading-4 text-gray-600 dark:text-gray-200">23, Feburary 2021</p>
            </div>
        </div>
    </div>     */}


        </div>
    );
};

export default Blog;