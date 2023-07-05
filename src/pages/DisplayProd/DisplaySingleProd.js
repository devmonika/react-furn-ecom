import React from 'react';
import "./Prod.css";
import { MdShoppingCart } from "react-icons/md";
const DisplaySingleProd = () => {
    return (
        <div  className='grid grid-cols-1 lg:grid-cols-3'>
            <div class="wrapper antialiased text-gray-900">
        <div>
            
           <div className='bg-[#C2DFDC] h-48 w-60 p-7 text-[#4e5554] rounded rounded-lg'>
            <span className='bg-primary text-white product-cart'><MdShoppingCart></MdShoppingCart></span>
            <h1>Vintage Chair</h1>
            <p>$660$</p>
           </div>
            
        <div class="relative px-4 -mt-32  ">
        <div class=" p-6 rounded-lg">
            {/* <div class="flex items-baseline">
            <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                New
            </span>
            <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
            2 baths  &bull; 3 rooms
        </div>  
            </div> */}
{/*             
            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>
        
        <div class="mt-1">
            $1800
            <span class="text-gray-600 text-sm">   /wk</span>
        </div>
        <div class="mt-4">
            <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
            <span class="text-sm text-gray-600">(based on 234 ratings)</span>
        </div>   */}
        <img src='https://i.postimg.cc/7hXxKDQz/mid-century-danish-h-office-chair-11563308634ranbx22obp-1.png' alt=""/>
        </div>
        </div>
        
        </div>
        </div>
        {/* 2nd */}
        <div class="wrapper antialiased text-gray-900">
        <div>
            
           <div className='bg-[#C2DFDC] h-48 w-60 p-7 text-[#4e5554] rounded rounded-lg'>
            <span className='bg-primary text-white product-cart'><MdShoppingCart></MdShoppingCart></span>
            <h1>Vintage Chair</h1>
            <p>$660$</p>
           </div>
            
        <div class="relative px-4 -mt-32  ">
        <div class=" p-6 rounded-lg">
            {/* <div class="flex items-baseline">
            <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                New
            </span>
            <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
            2 baths  &bull; 3 rooms
        </div>  
            </div> */}
{/*             
            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>
        
        <div class="mt-1">
            $1800
            <span class="text-gray-600 text-sm">   /wk</span>
        </div>
        <div class="mt-4">
            <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
            <span class="text-sm text-gray-600">(based on 234 ratings)</span>
        </div>   */}
        <img src='https://i.postimg.cc/PqmQVr1N/png-transparent-blue-suede-chair-with-brown-wooden-base-table-chair-furniture-seat-armchair-blue-cou.png' alt=""/>
        </div>
        </div>
        
        </div>
        </div>
        {/* 3rd */}
        <div class="wrapper antialiased text-gray-900">
        <div>
            
           <div className='bg-[#C2DFDC] h-48 w-60 p-7 text-[#4e5554] rounded rounded-lg'>
            <span className='bg-primary text-white product-cart'><MdShoppingCart></MdShoppingCart></span>
            <h1>Vintage Chair</h1>
            <p>$660$</p>
           </div>
            
        <div class="relative px-4 -mt-40  ">
        <div class=" p-6 rounded-lg">
            {/* <div class="flex items-baseline">
            <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                New
            </span>
            <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
            2 baths  &bull; 3 rooms
        </div>  
            </div> */}
{/*             
            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>
        
        <div class="mt-1">
            $1800
            <span class="text-gray-600 text-sm">   /wk</span>
        </div>
        <div class="mt-4">
            <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
            <span class="text-sm text-gray-600">(based on 234 ratings)</span>
        </div>   */}
        <img src='https://i.postimg.cc/tJXbnTN6/17.png' alt="" className='h-60'/>
        </div>
        </div>
        
        </div>
        </div>
        </div>
    );
};

export default DisplaySingleProd;