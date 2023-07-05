import React from 'react';
import { FaRegHeart,FaStar } from "react-icons/fa";
import"./Betseller.css"

const BestSeller = () => {
    return (
        <div className='mt-[-15%]'>
            <h1 className='text-5xl font-bold text-primary text-center title'>Best Seller Items</h1>
            {/* <span><FaStar></FaStar></span> */}
            <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-[-2%]  mb-5">

            
            <div class="w-72 bg-[#C2DFDC] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                <a href="#">
                    <span className='discount bg-secondary text-white py-2 px-4 rounded-md absolute ml-1 mt-1'>-50%</span>
                <img src="https://i.postimg.cc/7hXxKDQz/mid-century-danish-h-office-chair-11563308634ranbx22obp-1.png" alt="Product" class="h-80 w-72 object-cover rounded-t-xl p-10" />
                <div class="px-4 py-3 w-72">
                    {/* <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
                    <p class="text-lg font-bold text-[#4e5554] truncate block capitalize">Arm Chair</p>
                    <div class="flex items-center">
                    <p class="text-lg font-semibold text-[#4e5554] cursor-auto my-3">$180</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><FaRegHeart></FaRegHeart></div>
                    </div>
                </div>
                </a>
            </div>
  

  
  <div class="w-72 bg-[#C2DFDC] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src="https://i.postimg.cc/PqmQVr1N/png-transparent-blue-suede-chair-with-brown-wooden-base-table-chair-furniture-seat-armchair-blue-cou.png" alt="Product" class="h-80 w-72 object-cover rounded-t-xl p-8" />
      <div class="px-4 py-3 w-72">
        {/* <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
        <p class="text-lg font-bold text-[#4e5554] truncate block capitalize">Wingback Chair</p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-[#4e5554] cursor-auto my-3">$210</p>
          <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">$249</p>
          </del>
          <div class="ml-auto"><div class="ml-auto"><FaRegHeart></FaRegHeart></div></div>
        </div>
      </div>
    </a>
  </div>
  

  
  <div class="w-72 bg-[#C2DFDC] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
      <img src="https://i.postimg.cc/tJXbnTN6/17.png" alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
      <div class="px-4 py-3 w-72">
        {/* <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span> */}
        <p class="text-lg font-bold text-[#4e5554] truncate block capitalize">ChesterField Chair</p>
        <div class="flex items-center">
          <p class="text-lg font-semibold text-[#4e5554] cursor-auto my-3">$250</p>
          <del>
            <p class="text-sm text-gray-600 cursor-auto ml-2">$300</p>
          </del>
          <div class="ml-auto mt-[-5%]"><div class="ml-auto"><FaRegHeart></FaRegHeart></div></div>
        </div>
      </div>
    </a>
  </div>
  

  
 
  

</section>
<div className='flex justify-center mt-10'>
    <button className='btn bg-transparent border border-primary text-secondary hover:bg-primary hover:text-white'>See More</button>
</div>
        </div>
    );
};

export default BestSeller;