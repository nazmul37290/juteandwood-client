import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyCrafts = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="max-w-6xl mx-auto mt-5">
      <h2 className="text-3xl font-bold text-center">My Arts & crafts</h2>
    </div>
  );
};

export default MyCrafts;
