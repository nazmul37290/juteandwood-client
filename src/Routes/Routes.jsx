import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Homepage from "../pages/Homepage";
import AllArtsAndCrafts from "../pages/AllArtsAndCrafts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCrafts from "../pages/AddCrafts";
import MyCrafts from "../pages/MyCrafts";
import PrivateRoutes from "./PrivateRoutes";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () => fetch("http://localhost:4000/items"),
      },
      {
        path: "/allArtsAndCrafts",
        element: <AllArtsAndCrafts></AllArtsAndCrafts>,
      },
      {
        path: "/addCrafts",
        element: (
          <PrivateRoutes>
            <AddCrafts></AddCrafts>
          </PrivateRoutes>
        ),
      },
      {
        path: "/myCrafts",
        element: (
          <PrivateRoutes>
            <MyCrafts></MyCrafts>
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
export default Routes;
