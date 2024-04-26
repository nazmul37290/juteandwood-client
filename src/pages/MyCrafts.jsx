import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const MyCrafts = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h2>My crafts</h2>
    </div>
  );
};

export default MyCrafts;
