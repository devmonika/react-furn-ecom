import React from 'react';

const Subscribe = () => {
    return (
        <div>
            {/* <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
--> */}

<section class="bg-gray-50 bg-fixed bg-cover bg-center" style={{backgroundImage:`url(https://i.postimg.cc/pTxX5p9Y/jason-wang-Nx-Awry-Abt-Iw-unsplash.jpg)`}}>
  <div class="p-8 md:p-12 lg:px-20 lg:py-24 ">
    <div className='bg-primary bg-opacity-40 py-16'>
    <div class="mx-auto max-w-lg text-center">
      <h2 class="text-2xl font-bold text-white md:text-3xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit
      </h2>

      <p class="hidden text-gray-300 sm:mt-4 sm:block">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor
        officia blanditiis repellat in, vero, aperiam porro ipsum laboriosam
        consequuntur exercitationem incidunt tempora nisi?
      </p>
    </div>

    <div class="mx-auto mt-8 max-w-xl">
      <form action="#" class="sm:flex sm:gap-4">
        <div class="sm:flex-1">
          <label for="email" class="sr-only">Email</label>

          <input
            type="email"
            placeholder="Email address"
            class="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
          />
        </div>

        <button
          type="submit"
          class="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#C2DFDC] px-5 py-3 text-secondary transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
        >
          <span class="text-sm font-medium"> Sign Up </span>

          <svg
            class="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </form>
    </div>
    </div>
  </div>
</section>

        </div>
    );
};

export default Subscribe;