import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddCrafts = () => {
  const { user } = useContext(AuthContext);
  const [loader, setLoader] = useState(false);
  const handleAddCrafts = (e) => {
    e.preventDefault();
    setLoader(true);
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

    const item = {
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
    console.log(item);

    fetch("http://localhost:4000/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setLoader(false);
          Swal.fire({
            title: "Item Added Successfully",

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
      <div className="container mx-auto w-1/2 h-full p-10">
        <div className=" flex w-full h-full items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 w-full  ">
                  <div className="md:mx-6 md:p-12">
                    {/* <!--Logo--> */}
                    <div className="text-center ">
                      {/* <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      /> */}
                      <h4 className="mb-12 mt-1 pb-1 text-2xl font-bold">
                        ADD CRAFTS
                      </h4>
                    </div>

                    <form onSubmit={handleAddCrafts}>
                      {/* <!--Username input--> */}
                      <label className="font-semibold">User Name</label>

                      <br />
                      <input
                        className="p-2 border w-full mb-2 rounded-md"
                        type="text"
                        name="name"
                        id=""
                        value={user.displayName}
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
                        value={user.email}
                        readOnly
                        placeholder="enter your user email"
                      />
                      <br />
                      {/* <!--Username input--> */}
                      <label className="font-semibold">Item Name</label>

                      <br />
                      <input
                        className="p-2 border w-full mb-2 rounded-md"
                        type="text"
                        name="itemName"
                        id=""
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
                        required
                        placeholder="enter your photoURL"
                      />
                      <br />
                      {/* <!--Username input--> */}
                      <label className="font-semibold">Subcategory Name</label>

                      <br />
                      <select
                        className="p-2 border w-full mb-2 rounded-md"
                        name="subcategoryName"
                        id=""
                        required
                      >
                        <option value="card">Card</option>
                        <option value="Scrapbooking">scrapbooking</option>
                        <option value="Paper quilling and origami ">
                          Paper Quilling & Origami
                        </option>
                        <option value="Glass Painting">Glass Painting</option>
                        <option value="Lampworking">Lampworking</option>
                        <option value="Glass Dying and staining">
                          Glass Dying & Staining
                        </option>
                      </select>
                      <br />
                      <label className="font-semibold">Short Description</label>
                      <textarea
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
                        name="stockStatus"
                        className="p-2 border w-full mb-2 rounded-md"
                        id=""
                      >
                        <option value="In Stock">In Stock</option>
                        <option value="Made to order">Made to order</option>
                      </select>
                      {/* show error messsage
                      <p className="text-red-500">{error}</p> */}

                      {/* <!--Submit button--> */}

                      <input
                        type="submit"
                        className="btn mt-4 font-bold text-lg w-full bg-[#ad9773] text-white"
                        value="Register"
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

export default AddCrafts;
