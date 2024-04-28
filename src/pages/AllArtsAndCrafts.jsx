import { Link, useLoaderData } from "react-router-dom";

const AllArtsAndCrafts = () => {
  const items = useLoaderData();

  return (
    <div className="max-w-6xl mx-auto mt-4 bg-[#efeae3]">
      <div className="overflow-x-auto">
        <table className="table border border-[#bdac8f]">
          {/* head */}
          <thead>
            <tr className="text-base text-[#3C2F19] font-bold border border-[#bdac8f]">
              <th></th>
              <th>Item Name</th>
              <th>Sub Category</th>
              <th>Stock Status</th>
              <th>Customization</th>
              <th>Rating</th>

              <th>Added By</th>
              <th className="w-[80px]">Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const {
                name,
                email,
                item_name,
                photo,
                subcategory_Name,

                price,
                rating,
                customization,

                stockStatus,
              } = item;
              return (
                <>
                  <tr
                    key={item._id}
                    className="text-[#3C2F19] border border-[#bdac8f]"
                  >
                    {/* item photo */}
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={photo}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    {/* item name */}
                    <td className="w-[150px]">
                      <div className="font-bold uppercase">{item_name}</div>
                    </td>
                    {/* item sub category */}
                    <td className="font-semibold">
                      <p>{subcategory_Name}</p>
                    </td>
                    {/* stock status */}
                    <td className="w-[150px] ">
                      <p className="bg-green-500 text-center mx-auto px-2 max-w-fit font-semibold text-white rounded-lg">
                        {stockStatus}
                      </p>
                    </td>
                    {/* customization */}
                    <td>
                      <p className="font-semibold">{customization}</p>
                    </td>
                    {/* rating */}
                    <td>
                      <p className="font-semibold"> {rating}</p>
                    </td>
                    {/* item added by */}
                    <td>
                      <div>
                        <p>{name}</p>
                        <p>{email}</p>
                      </div>
                    </td>
                    {/* price */}

                    <td className="">
                      <p className="font-semibold">
                        <span>{price} </span>Tk
                      </p>
                    </td>
                    <td>
                      <Link to={`/items/${item._id}`}>
                        <button className="btn bg-[#ded5c7]">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllArtsAndCrafts;
