import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/Footer";
const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <ToastContainer></ToastContainer>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
