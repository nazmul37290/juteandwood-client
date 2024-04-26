import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center mt-10">
        <span className="loading loading-spinner loading-lg "></span>
      </div>
    );
  } else if (user) {
    return children;
  } else {
    return <Navigate to={"/login"}></Navigate>;
  }
};
export default PrivateRoutes;

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
