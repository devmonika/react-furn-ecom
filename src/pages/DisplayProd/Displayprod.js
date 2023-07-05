import React from 'react';
import DisplaySingleProd from './DisplaySingleProd';

const Displayprod = () => {
    return (
        <div>
            <div className="hero min-h-screen text-primary mt-0 lg:mt-[-4%]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left mt-5">
                    <div>
                        <DisplaySingleProd></DisplaySingleProd>
                    </div>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm ">
                    <div className="card-body">
                        <h1 className='text-5xl font-bold'>Made From Excellent Materials</h1>
                        <p>we have 5000+ review and  our customers trust on our Furniture and quality products.</p>
                        <div className="mt-6">
                        <button className="btn bg-secondary mr-4 border border-none hover:bg-white hover:text-primary">Explore</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Displayprod;