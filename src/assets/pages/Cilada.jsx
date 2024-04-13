import React from "react";
import Munslider from "../component/Munslide";
import Map from "../component/Map";
import Header from "../component/Header";

function Cimlilada() {
  return (
    <div>
      <div>
        <Header />
      </div>
      {/* <Munslider /> */}
      <div className="mt-10 h-[400px] bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-photo/dark-stormy-clouds_181624-61.jpg?w=740')]">
        <div className="relative text-center pt-20">
          <input
            type="text"
            className="border border-gray-300 rounded py-2 px-4 md:px-10 focus:outline-none focus:border-blue-500 max-w-full md:max-w-md mx-auto"
            placeholder="Search Your Address"
          />
          {/* Adjusted position using relative units */}
          <i className="absolute left-1/2 transform -translate-x-1/2 top-[100px] text-gray-400 fas fa-search sm:left-[560px] sm:top-[100px]"></i>

        </div>
      </div>
      <Map />
    </div>
  );
}

export default Cimlilada;
