import { useLoaderData } from "react-router-dom";

const ItemDetails = () => {
  const data = useLoaderData();
  const {
    name,
    email,
    item_name,
    photo,
    subcategory_Name,
    description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
  } = data;

  return (
    <div>
      <h1> Details page: {item_name}</h1>
    </div>
  );
};

export default ItemDetails;
