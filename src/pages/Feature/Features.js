import React from 'react';
import "./Features.css"
const Features = () => {
    return (
        <div>
            
      <section>
  <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-16">
    <header class="text-center">
      <h2 class="text-5xl font-bold text-primary text-center mt-10 mb-16 titleone">
        Our Features
      </h2>
{/* 
      <p class="max-w-md mx-auto mt-4 text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p> */}
    </header>

    <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
      <li>
        <a href="#" class="relative block group">
          <img
            src="https://i.postimg.cc/L41N85t0/samuel-regan-asante-ky-B2m75-M6-M-unsplash.jpg"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 class="text-xl font-medium text-white">Dining Furniture</h3>

            <span
              class="mt-1.5 inline-block bg-secondary px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </a>
      </li>

      <li>
        <a href="#" class="relative block group">
          <img
            src="https://i.postimg.cc/pTxX5p9Y/jason-wang-Nx-Awry-Abt-Iw-unsplash.jpg"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 class="text-xl font-medium text-white">Livng Room Furniture</h3>

            <span
              class="mt-1.5 inline-block bg-secondary px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </a>
      </li>

      <li class="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="#" class="relative block group">
          <img
            src="https://i.postimg.cc/cLNQkJYP/virender-singh-Gybm-Mi0-QZV4-unsplash.jpg"
            alt=""
            class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-99"
          />

          <div
            class="absolute inset-0 flex flex-col items-start justify-end p-6"
          >
            <h3 class="text-xl font-medium text-white">Bed Room Furniture</h3>

            <span
              class="mt-1.5 inline-block bg-secondary px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
            >
              Shop Now
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</section>

        </div>
    );
};

export default Features;