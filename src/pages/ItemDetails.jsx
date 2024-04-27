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
    <div className="min-h-screen bg-[#ded5c7] flex items-center justify-center">
      <div className="w-2/3 mx-auto flex bg-white h-[800px]">
        {/* left side */}
        <div className="w-1/2 bg-[#bdac8f]  flex items-center justify-center h-full">
          <div className="p-10 w-full">
            <img src={photo} alt="" />
          </div>
        </div>
        {/* right side */}
        <div className="flex w-1/2 items-center justify-center text-xl ">
          <div className="w-full space-y-2 p-10 text-[#3C2F19]">
            <h1 className="text-4xl mb-5 font-bold uppercase ">{item_name}</h1>
            <p className="">
              <span className="text-xl font-semibold">Category: </span>
              {subcategory_Name}
            </p>
            <p>
              <span className="font-semibold text-xl">Description: </span>
              {description}
            </p>
            <div className="flex items-center gap-10">
              <p>
                <span className="font-semibold text-xl">Rating: </span>
                {rating}
              </p>
              <p className="bg-green-500 mt-2 py-1 px-2 text-white w-fit font-semibold rounded-xl">
                {stockStatus}
              </p>
            </div>
            <div className="flex items-center gap-10">
              <p>
                <span className="font-semibold text-xl">Customization: </span>
                {customization}
              </p>
              <p className="">
                <span className="font-semibold text-xl">Processing Time: </span>
                {processing_time} min
              </p>
            </div>
            <p>
              <span className="font-semibold text-xl">Added By: </span> {name}
            </p>
            <p>
              <span className="font-semibold text-xl">Adder email: </span>{" "}
              {email}
            </p>
            <div>
              <p className="font-bold p-4 mt-10 bg-[#cec1ab] w-max rounded-md text-2xl">
                <span className="">Price: </span>
                {price} Tk
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
