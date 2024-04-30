import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

import Swal from "sweetalert2";

const Update = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [loader, setLoader] = useState(false);
  const item = useLoaderData();
  const {
    item_name,
    photo,
    subcategory_Name,
    description,
    price,
    rating,
    customization,
    processing_time,
    stockStatus,
  } = item;

  const handleUpdateCrafts = (e) => {
    setLoader(true);
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const item_name = form.itemName.value;
    const photo = form.photoURL.value;
    const subcategory_Name = form.subcategoryName.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processing_time = form.processingTime.value;
    const stockStatus = form.stockStatus.value;

    const updateItem = {
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
    };

    fetch(
      `https://hero-assignment-10-server-side.vercel.app/items/update/${id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateItem),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setLoader(false);
          Swal.fire({
            title: "Item Updated Successfully",

            icon: "success",
            confirmButtonText: "Okay!",
          });
          form.reset();
        }
      });
  };
  return (
    <section className="min-h-screen bg-[#ded5c7] dark:bg-neutral-700 ">
      <div
        className={`absolute left-[50%] top-[50%]  flex items-center justify-center ${
          loader ? "block" : "hidden"
        }`}
      >
        <span className="loading loading-spinner loading-lg"></span>
      </div>
      <div className="container mx-auto w-full md:w-1/2 h-full p-2 md:p-10">
        <div className=" flex w-full h-full items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="">
                {/* <!-- Left column container--> */}
                <div className="px-4 py-4 md:py-0 md:px-0 w-full  ">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center ">
                      <h4 className=" uppercase mb-12 mt-1 pb-1 text-2xl font-bold">
                        UPDATE CRAFT
                      </h4>
                    </div>

                    <form onSubmit={handleUpdateCrafts}>
                      {/* <!--Username input--> */}
                      <label className="font-semibold">User Name</label>

                      <br />
                      <input
                        className="p-2 border w-full mb-2 rounded-md"
                        type="text"
                        name="name"
                        id=""
                        value={user && user.displayName}
                        readOnly
                        placeholder="enter your user name"
                      />
                      <br />
                      {/* email input */}
                      <label className="font-semibold">User Email</label>
                      <br />
                      <input
                        className="p-2 border w-full mb-2 rounded-md"
                        type="email"
                        name="email"
                        id=""
                        value={user && user.email}
                        readOnly
                        placeholder="enter your user email"
                      />
                      <br />
                      {/* <!--item name input--> */}
                      <label className="font-semibold">Item Name</label>

                      <br />
                      <input
                        className="p-2 border w-full mb-2 rounded-md"
                        type="text"
                        name="itemName"
                        id=""
                        defaultValue={item_name}
                        required
                        placeholder="enter your Item name"
                      />
                      <br />
                      {/* photo url input */}
                      <label className="font-semibold">Item PhotoURL</label>
                      <br />
                      <input
                        className="p-2 border w-full mb-2 rounded-md"
                        type="text"
                        name="photoURL"
                        id=""
                        defaultValue={photo}
                        required
                        placeholder="enter your photoURL"
                      />
                      <br />
                      {/* <!--subcategory input--> */}
                      <label className="font-semibold">Subcategory Name</label>

                      <br />
                      <select
                        defaultValue={subcategory_Name}
                        className="p-2 border w-full mb-2 rounded-md"
                        name="subcategoryName"
                        id=""
                        required
                      >
                        <option value="Wooden Furniture & Sculptures">
                          Wooden Furniture & Sculptures
                        </option>
                        <option value="Wooden Home Decor">
                          Wooden Home Decor
                        </option>
                        <option value="Wooden Utensils and Kitchenware">
                          Wooden Utensils and Kitchenware
                        </option>
                        <option value="Jute Home Decor">Jute Home Decor</option>
                        <option value="JuteKitchenware & utensils">
                          JuteKitchenware & utensils
                        </option>
                        <option value="Jute and wooden jewellery">
                          Jute and wooden jewellery
                        </option>
                      </select>
                      <br />
                      {/* description input */}
                      <label className="font-semibold">Short Description</label>
                      <textarea
                        defaultValue={description}
                        className="p-2 border w-full mb-2 rounded-md"
                        name="description"
                        id=""
                        cols="30"
                        rows="10"
                        required
                        placeholder="enter short description"
                      ></textarea>
                      <br />
                      {/* <!--price input--> */}
                      <label className="font-semibold">Price</label>
                      <br />
                      <input
                        defaultValue={price}
                        className="p-2 border w-full mb-2 rounded-md"
                        type="text"
                        name="price"
                        id=""
                        placeholder="enter price"
                        required
                      />
                      <br />
                      {/* <!--Rating input--> */}
                      <label className="font-semibold">Rating</label>
                      <br />
                      <input
                        defaultValue={rating}
                        className="p-2 border w-full mb-2 rounded-md"
                        type="text"
                        name="rating"
                        id=""
                        required
                        placeholder="ratings"
                      />
                      <br />
                      {/* customization related input */}
                      <label className="font-semibold">Customization</label>
                      <br />
                      <select
                        defaultValue={customization}
                        required
                        name="customization"
                        className="p-2 border w-full mb-2 rounded-md"
                        id=""
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      <br />
                      {/* processing related input */}
                      <label className="font-semibold">Processing time</label>
                      <br />
                      <input
                        defaultValue={processing_time}
                        className="p-2 border w-full mb-2 rounded-md"
                        type="text"
                        name="processingTime"
                        id=""
                        required
                        placeholder="processing time in min"
                      />
                      <br />

                      {/* stock related input */}
                      <label className="font-semibold">Stock status</label>
                      <br />
                      <select
                        required
                        defaultValue={stockStatus}
                        name="stockStatus"
                        className="p-2 border w-full mb-2 rounded-md"
                        id=""
                      >
                        <option value="In Stock">In Stock</option>
                        <option value="Made to order">Made to order</option>
                      </select>

                      <input
                        type="submit"
                        className="btn mt-4 font-bold text-lg w-full bg-[#ad9773] text-white"
                        value="Update"
                      />

                      <br />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Update;
