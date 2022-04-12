import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function MenuDetail() {
  const [menuDetails, setMenuDetails] = useState([]);
  const param = useParams();

  const getMenuDetails = async (input) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${input}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const data = await api.json();
    setMenuDetails(data);
    console.log(data);
  };

  useEffect(() => {
    getMenuDetails(param.id);
    console.log(param.id);
  }, [param.id]);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col items-center text-center justify-center mb-6">
              <h3 className="text-2xl font-semibold mb text-center ">
                {menuDetails.title}
              </h3>
            </div>
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={menuDetails.image}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt text-gray-600 text-lg">
                    Ingredients
                  </h2>
                  <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                </div>

                <div className="px-5 flex flex-col items-center text-left justify-center">
                  <ul className="list-disc">
                    {menuDetails.extendedIngredients &&
                      menuDetails.extendedIngredients.map((ingredient) => {
                        return (
                          <li key={ingredient.id}>{ingredient.original}</li>
                        );
                      })}
                  </ul>
                </div>
              </div>

              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <div className="leading-relaxed text-lg mb-4">
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt text-gray-600 text-lg">
                      Instructions
                    </h2>
                    <div className="w-12 h-1 bg-yellow-500 rounded mt-2 mb-4"></div>
                  </div>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: menuDetails.instructions,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MenuDetail;
