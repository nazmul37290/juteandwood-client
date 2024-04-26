import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      <Outlet></Outlet>
    </div>
  );
};

export default Layout;
