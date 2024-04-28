import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

import MyCraftsCard from "../components/MyCraftsCard";
import Swal from "sweetalert2";

const MyCrafts = () => {
  const { user } = useContext(AuthContext);
  const [myItems, setMyItems] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/items/email/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyItems(data);
      });
  }, []);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/items/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.deletedCount) {
              const remainingItems = myItems.filter((item) => item._id !== id);
              setMyItems(remainingItems);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto mt-5">
      <h2 className="text-3xl font-bold text-center">My Arts & crafts</h2>
      <div className="mt-5 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {myItems.map((item) => {
          return (
            <MyCraftsCard
              key={item._id}
              handleDelete={handleDelete}
              item={item}
            ></MyCraftsCard>
          );
        })}
      </div>
    </div>
  );
};

export default MyCrafts;
