import { Link, NavLink } from "react-router-dom";
import "../index.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Tooltip } from "react-tooltip";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState("light");
  const handleTheme = (e) => {
    console.log(e.target);
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);
  console.log(theme);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  const links = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "bg-[#cec1ab]" : "")}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "bg-[#cec1ab]" : "")}
          to={"/allArtsAndCrafts"}
        >
          All Art and Crafts
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "bg-[#cec1ab]" : "")}
          to={"/addCrafts"}
        >
          Add Craft Item
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "bg-[#cec1ab]" : "")}
          to={"/myCrafts"}
        >
          My Art and craft List
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-[#ad9773] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-white text-black  z-10 rounded-box w-52 font-bold"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">Jute&Wood</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">{links}</ul>
      </div>
      {user ? (
        <div className="hidden md:flex navbar-end  gap-2">
          <>
            <label className="cursor-pointer grid place-items-center">
              <input
                onChange={handleTheme}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </>
          <div className="w-12 h-12 rounded-full">
            <Tooltip
              anchorSelect=".my-anchor-element"
              className="z-10"
              place="top"
            >
              {user.displayName}
            </Tooltip>
            <img
              className="rounded-full my-anchor-element w-full h-full"
              src={user && user.photoURL}
              alt="profile"
            />
          </div>
          <button
            onClick={handleLogOut}
            className="btn bg-[#bdac8f] text-white font-bold"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="hidden md:flex navbar-end  gap-2">
          <>
            <label className="cursor-pointer grid place-items-center">
              <input
                onChange={handleTheme}
                type="checkbox"
                value="synthwave"
                className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
              />
              <svg
                className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </>
          <Link to={"/login"} className="btn bg-[#bdac8f] text-white font-bold">
            Login{" "}
          </Link>
          <Link
            to={"/register"}
            className="btn  text-white font-bold bg-[#bdac8f]"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
