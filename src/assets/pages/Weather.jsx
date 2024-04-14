import React from "react";
import tw from "tailwind-styled-components";
import { FaSearch } from "react-icons/fa";
import Map from "../component/Map";
import Header from "../component/Header";

const SearchBar = () => {
  return (
    <Container className="mt-10 h-[400px] bg-no-repeat bg-cover bg-[url('https://img.freepik.com/free-photo/dark-stormy-clouds_181624-61.jpg?w=740')]">
        <div>
            <Header/>
        </div>
      <div className="relative text-center pt-20">
        <input
          type="text"
          className="border border-gray-300 rounded py-2 px-4 md:px-10 focus:outline-none focus:border-blue-500 max-w-full md:max-w-md mx-auto"
          placeholder="Search Your Address, City or Zip Code"
        />
        {/* <SearchIcon className="absolute left-1/2 transform -translate-x-1/2 top-[100px] text-gray-400 fas fa-search md:left-[1090px] md:top-[100px] lg:left-[720px] lg:top-[100px] xl:left-[960px] xl:top-[100px]" /> */}
      </div>

      <RecentLocations />
    </Container>
  );
};

const Container = tw.div`
  p-4
  bg-white
  rounded
  shadow
`;

// const SearchIcon = tw(FaSearch)`
//   absolute
//   top-[100px]
//   text-gray-400
//   md:right-[10px] // Starting position for medium screens (move to the right)
//   md:left-auto // Reset left positioning for medium screens
//   md:top-[100px]
//   lg:left-[720px]
//   lg:top-[100px]
//   xl:left-[960px]
//   xl:top-[100px]
// `;




const RecentLocations = () => {
  return (
    <div>
    <div className="mt-10 p-4 bg-white rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Recent Locations</h3>
      <ul>
        <li className="flex items-center mb-2">
          <div className="w-8 h-8 bg-blue-500 text-white flex items-center justify-center rounded mr-2">
            1
          </div>
          <div>
            <p className="text-gray-800 font-semibold">Muqdisho</p>
            <p className="text-gray-500 text-sm">Somalia</p>
          </div>
          <div className="ml-auto text-gray-500">
            <p className="text-gray-800 font-semibold">30°</p>
            <p className="text-gray-500 text-sm">RealFeel* 35°</p>
          </div>
        </li>
      </ul>

      
    </div>
    <div>
        <Map/>
  </div>
  </div>
  );
};

export default SearchBar;