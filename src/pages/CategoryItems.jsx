import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";

const CategoryItems = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(
      `https://hero-assignment-10-server-side.vercel.app/categories/${name}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoader(false);
      });
  }, []);
  return (
    <div className="mt-10 max-w-6xl mx-auto ">
      <h1 className="text-3xl text-center uppercase font-bold ">{name}</h1>
      {items.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
            {items.map((item) => {
              return (
                <>
                  <Card key={item._id} item={item}></Card>
                </>
              );
            })}
          </div>
        </>
      ) : loader ? (
        <div className="text-center mx-auto mt-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <p className="text-2xl mt-10 font-medium text-center">
          Nothing in this Category yet !!
        </p>
      )}
    </div>
  );
};

export default CategoryItems;
