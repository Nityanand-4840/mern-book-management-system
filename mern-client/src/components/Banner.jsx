import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="flex items-center px-4 bg-teal-100 lg:px-24">
      <div className="flex flex-col items-center justify-between w-full gap-12 py-40 md:flex-row">
           {/* left side */}
           <div className="h-full space-y-8 md:w-1/2">
              <h2 className="text-5xl font-bold leading-snug text-black">Buy and Sell Your Books <span className="text-blue-700">for the best prices </span></h2>
              <p className="md:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam in sequi tempore consectetur mollitia fugit velit ea ipsa deleniti quibusdam, minus animi molestiae nisi quae totam vel dolore. Perferendis, sed!</p>
            <div>
                <input type="search" name="search" id="search" placeholder="Search a book" className="px-2 py-2 outline-none rounded-s-sm"/>
                <button className="px-6 py-2 font-medium text-white transition-all duration-200 ease-in bg-blue-700 hover:bg-black">Search</button>
            </div>
                         
            </div>
           {/* right side */}
           <div>
            <BannerCard/>
           </div>
        </div>
    </div>
  );
};

export default Banner;
