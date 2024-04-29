import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

import MyCraftsCard from "../components/MyCraftsCard";
import Swal from "sweetalert2";

const MyCrafts = () => {
  const { user } = useContext(AuthContext);
  const [myItems, setMyItems] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    fetch(
      `https://hero-assignment-10-server-side.vercel.app/items/email/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyItems(data);
        setLoader(false);
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
        fetch(`https://hero-assignment-10-server-side.vercel.app/items/${id}`, {
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

      {myItems.length > 0 ? (
        <>
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
        </>
      ) : loader ? (
        <div className="text-center mt-10">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <p className="text-2xl mt-24 font-medium text-center">
          You have not added any crafts yet !!!
        </p>
      )}
    </div>
  );
};

export default MyCrafts;
