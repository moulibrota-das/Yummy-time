import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

function Search() {
  const [searchResults, setSearchResults] = useState([]);
  const param = useParams();

  useEffect(() => {
    getResults(param.type);
    console.log(param.type);
  }, [param.type]);

  const getResults = async (input) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${input}&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    console.log(data.results);
    setSearchResults(data.results);
  };

  return (
    <div class="container my-12 px-6 mx-auto w-3/4">
      <section class="mb-32 text-gray-800">
        <div class="grid lg:grid-cols-3 gap-6">
          {searchResults.map((items) => {
            return (
              <div
                class="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img src={items.image} class="w-full" alt={items.title} />
                <Link to={`/menuDetail/${items.id}`}>
                  <div
                    class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                  >
                    <div class="flex justify-start items-end h-full">
                      <div class="text-white m-6">
                        <h5 class="font-bold text-lg mb-3">{items.title}</h5>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Search;
