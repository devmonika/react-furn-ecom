import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-primary text-white mt-0 lg:mt-[-4%]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left mt-5">
                    <img src="https://i.postimg.cc/W3BD1PkB/phillip-goldsberry-f-Zule-Efe-A1-Q-unsplash-1.png" alt=""/>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm ">
                    <div className="card-body">
                        <h1 className='text-5xl font-bold'>Furniture that everyone loves!</h1>
                        <p>we have 5000+ review and  our customers trust on our Furniture and quality products.</p>
                        <div className="mt-6">
                        <button className="btn bg-secondary mr-4 border border-none hover:bg-white hover:text-primary">Shop Now</button>
                        <button className="btn bg-transparent border border-white hover:bg-secondary hover:border-none">Read More</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;