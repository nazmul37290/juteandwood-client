const Card = () => {
  return (
    <div className="w-[300px] mx-auto md:w-[350px] h-[450px] rounded-2xl bg-[#efeae3]">
      {/* upper side */}
      <div className="bg-[#ded5c7] rounded-2xl w-full h-1/2">
        <div className=" mx-auto p-4 h-[250px] w-[250px] lg:w-[350px] relative">
          <img
            className="w-full rounded-2xl
               h-full"
            src="/cardmaking.jpg"
            alt=""
          />
          <p className="bg-green-600 text-white font-bold p-1 absolute top-4 right-4 rounded-xl max-w-fit">
            In Stock
          </p>
        </div>
      </div>
      {/* lower side */}
      <div className=" ">
        <div className="px-4 py-4 space-y-1 text-lg">
          <h3 className="text-[#3C2F19] uppercase min-h-16 overflow-hidden font-bold text-2xl">
            This is the titlegsjkgklajfafoafhhoiasfhaoihoih
          </h3>
          <div className="">
            <p className="text-black">
              <span className="font-semibold">Category:</span> Glass painting
            </p>
            <div
              className="flex
               justify-between"
            >
              <p>
                <span className="font-semibold">Ratings:</span> 4.4{" "}
              </p>
              <p className="font-bold text-lg">500 tk</p>
            </div>
          </div>
          <div className="">
            <button className="btn mt-4 bg-[#ad9773] text-white font-bold">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
