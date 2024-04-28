import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Homepage from "../pages/Homepage";
import AllArtsAndCrafts from "../pages/AllArtsAndCrafts";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddCrafts from "../pages/AddCrafts";
import MyCrafts from "../pages/MyCrafts";
import PrivateRoutes from "./PrivateRoutes";
import ItemDetails from "../pages/ItemDetails";
import ErrorPage from "../pages/ErrorPage";
import Update from "../pages/Update";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () => fetch("http://localhost:4000/items"),
      },
      {
        path: "/allArtsAndCrafts",
        element: <AllArtsAndCrafts></AllArtsAndCrafts>,
        loader: () => fetch("http://localhost:4000/items"),
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
      {
        path: "/items/:id",
        element: (
          <PrivateRoutes>
            <ItemDetails></ItemDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:4000/items/${params.id}`),
      },
      {
        path: "/items/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:4000/items/${params.id}`),
      },
    ],
  },
]);
export default Routes;
