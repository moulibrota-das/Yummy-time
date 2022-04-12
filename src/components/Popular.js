import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../styles/popular.module.css";

function Popular() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setRecipes(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=6`
      );
      const data = await api.json();
      setRecipes(data.recipes);
      console.log(data.recipes);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
    }
  };

  return (
    <div class="container my-12 px-6 mx-auto w-3/4">
      <section class="mb-32 text-gray-800">
        <div class="flex flex-col items-center text-center justify-center mb-6">
          <h3 class="text-xl font-semibold mb text-center ">Top Picks</h3>
          <div class="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
        </div>

        <div class="grid lg:grid-cols-3 gap-6">
          {recipes.map((items) => {
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

export default Popular;
