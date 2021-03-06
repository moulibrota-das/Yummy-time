import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    navigate("/search/" + searchQuery);
  };

  return (
    <div>
      <header className="text-gray-600 body-font mx-4">
        <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-around items-center text-base md:ml-auto">
            <Link
              to="/search/breakfast"
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Breakfast
            </Link>
            <Link
              to="/search/lunch"
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Lunch
            </Link>
            <Link
              to="/search/dinner"
              className="mr-5 hover:text-gray-900 cursor-pointer"
            >
              Dinner
            </Link>
            <Link
              to="/search/veg"
              className="hover:text-gray-900 cursor-pointer"
            >
              Vegeterian
            </Link>
          </nav>
          <a
            href="/"
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <span className="ml-3 text-2xl font-serif	font-family:'Times New Roman'">
              Yummy Times
            </span>
          </a>
          <div className="lg:w-2/5 flex inline-flex lg:justify-end  lg:ml-0 my-3 ">
            <form
              className="flex  md:items-center"
              onSubmit={handleQuerySubmit}
            >
              <input
                type="search"
                id="search"
                name="search"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                }}
                className="w-full h-11 bg-gray-100 bg-opacity-70 rounded-l-lg border border-gray-300 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              <button className="flex  text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded-r-lg text-lg">
                Search
              </button>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
