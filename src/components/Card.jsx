import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Card = ({ item }) => {
  return (
    <div className="w-[300px] mx-auto md:w-[320px] h-[550px] rounded-2xl bg-[#efeae3]">
      {/* upper side */}
      <div className="bg-[#ded5c7] rounded-2xl w-full relative">
        <div className=" mx-auto p-4 h-[220px] lg:h-[250px] w-[300px] lg:w-[320px] ">
          <img
            className="w-full rounded-2xl
               h-full"
            src={item.photo}
            alt=""
          />
          <p className="bg-green-600 text-white font-bold px-2 py-1 absolute top-4 right-4 rounded-lg max-w-fit">
            {item.stockStatus}
          </p>
        </div>
      </div>
      {/* lower side */}
      <div className=" ">
        <div className="px-4 py-4 space-y-1 text-lg">
          <h3 className="  uppercase min-h-14 overflow-hidden font-bold text-xl">
            {item.item_name}
          </h3>
          <p className="h-8 overflow-hidden">
            <span className="font-semibold">Description: </span>
            {item.description}
          </p>
          <div className="">
            <p className="text-black">
              <span className="font-semibold">Category:</span>{" "}
              {item.subcategory_Name}
            </p>
            <div
              className="flex
               justify-between"
            >
              <p>
                <span className="font-semibold">Ratings:</span> {item.rating}{" "}
              </p>
              <p className="font-bold text-lg">
                {item.price} <span>tk</span>
              </p>
            </div>
          </div>
          <div className="">
            <Link to={`/items/${item._id}`}>
              <button className="btn mt-4 bg-[#ad9773] text-white font-bold">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  item: PropTypes.object,
};
