import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CategoryItems = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(
      `https://hero-assignment-10-server-side.vercel.app/categories/${name}`
    )
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div className="mt-10">
      <h1 className="text-3xl text-center uppercase font-bold ">{name}</h1>
      <div>
        {items.map((item) => {
          return (
            <>
              <li>{item.item_name}</li>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryItems;
