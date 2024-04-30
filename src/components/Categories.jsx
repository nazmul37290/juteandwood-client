import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://hero-assignment-10-server-side.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div className="max-w-6xl mx-auto  mt-10 ">
      <h1 className=" text-lg md:text-3xl  text-center uppercase font-bold ">
        Art & Craft Categories
      </h1>
      {/* card container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        {categories.map((category) => {
          return (
            <>
              <Link to={`/categories/${category.sub_category}`}>
                <div className="w-[300px] mx-auto mb-2 md:w-[320px] h-[350px] rounded-2xl bg-[#cec1ab]">
                  {/* upper side */}
                  <div className="bg-[#ded5c7] rounded-2xl w-full relative">
                    <div className=" mx-auto p-4 h-[220px] lg:h-[250px] w-[300px] lg:w-[320px] ">
                      <img
                        className="w-full rounded-2xl
               h-full"
                        src={category.category_image}
                        alt=""
                      />
                    </div>
                  </div>
                  {/* lower side */}
                  <div className=" ">
                    <div className="px-4 py-4 space-y-1 text-lg">
                      <h3 className="text-[#3C2F19] uppercase min-h-16 overflow-hidden font-bold text-xl">
                        {category.sub_category}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
