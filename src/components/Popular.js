import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="container my-12 px-6 mx-auto w-3/4">
      <section className="mb-32 text-gray-800">
        <div className="flex flex-col items-center text-center justify-center mb-6">
          <h3 className="text-xl font-semibold mb text-center ">Top Picks</h3>
          <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {recipes.map((items) => {
            return (
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover shadow-lg rounded-lg"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                <img src={items.image} className="w-full" alt={items.title} />
                <Link to={`/menuDetail/${items.id}`}>
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                  >
                    <div className="flex justify-start items-end h-full">
                      <div className="text-white m-6">
                        <h5 className="font-bold text-lg mb-3">
                          {items.title}
                        </h5>
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
