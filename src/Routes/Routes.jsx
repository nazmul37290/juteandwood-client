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
import CategoryItems from "../pages/CategoryItems";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () =>
          fetch("https://hero-assignment-10-server-side.vercel.app/items"),
      },
      {
        path: "/allArtsAndCrafts",
        element: <AllArtsAndCrafts></AllArtsAndCrafts>,
        loader: () =>
          fetch("https://hero-assignment-10-server-side.vercel.app/items"),
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
          fetch(
            `https://hero-assignment-10-server-side.vercel.app/items/${params.id}`
          ),
      },
      {
        path: "/items/update/:id",
        element: (
          <PrivateRoutes>
            <Update></Update>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hero-assignment-10-server-side.vercel.app/items/${params.id}`
          ),
      },
      {
        path: "/categories/:name",
        element: <CategoryItems></CategoryItems>,
      },
    ],
  },
]);
export default Routes;
