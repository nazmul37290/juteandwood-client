import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

import MyCraftsCard from "../components/MyCraftsCard";

const MyCrafts = () => {
  const { user } = useContext(AuthContext);
  const [myItems, setMyItems] = useState([]);
  console.log(user);
  useEffect(() => {
    fetch(`http://localhost:4000/items/email/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyItems(data);
      });
  }, []);
  console.log(myItems);
  return (
    <div className="max-w-6xl mx-auto mt-5">
      <h2 className="text-3xl font-bold text-center">My Arts & crafts</h2>
      <div className="mt-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {myItems.map((item) => {
          return <MyCraftsCard key={item._id} item={item}></MyCraftsCard>;
        })}
      </div>
    </div>
  );
};

export default MyCrafts;
