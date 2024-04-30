const Artisans = () => {
  return (
    <div>
      <h1 className="text-3xl mt-24 uppercase font-bold text-center">
        Meet Our Artisans
      </h1>
      <div className="grid mt-10 grid-cols-1 md:grid-cols-3">
        {/* card one */}
        <div className="w-[300px] mx-auto md:w-[350px] h-[450px] rounded-2xl bg-[#efeae3]">
          {/* upper side */}
          <div className="bg-[#ded5c7] rounded-2xl h-1/2 w-full relative">
            <div className="rounded-full h-[200px] w-[200px] absolute bottom-[-120px] flex translateLeft">
              <img
                className="w-full  rounded-full
               h-full"
                src="/team1.jpg"
                alt=""
              />
            </div>
          </div>
          {/* lower side */}
          <div className=" ">
            <div className="px-4 py-4 text-center text-lg">
              <h3 className="text-[#3C2F19] mt-6 uppercase overflow-hidden font-bold text-xl">
                Elena Woods
              </h3>
              <p className="text-[#3C2F19] font-medium ">Master Woodworker</p>
              <p className="text-base mt-4">
                Every piece of wood tells a story, and I am just the storyteller
                carving its narrative into existence.
              </p>
            </div>
          </div>
        </div>
        {/* card two */}
        <div className="w-[300px] mx-auto md:w-[350px] h-[450px] rounded-2xl bg-[#efeae3]">
          {/* upper side */}
          <div className="bg-[#ded5c7] rounded-2xl h-1/2 w-full relative">
            <div className="rounded-full h-[200px] w-[200px] absolute bottom-[-120px] flex translateLeft">
              <img
                className="w-full  rounded-full
               h-full"
                src="/team2.png"
                alt=""
              />
            </div>
          </div>
          {/* lower side */}
          <div className=" ">
            <div className="px-4 py-4 text-center text-lg">
              <h3 className="text-[#3C2F19] mt-6 uppercase overflow-hidden font-bold text-xl">
                Liam Weaver
              </h3>
              <p className="text-[#3C2F19] font-medium ">
                Jute Artisan Extraordinaire
              </p>
              <p className="text-base mt-4">
                Working with jute is like weaving dreams into reality, each knot
                and twist imbued with a piece of my soul.
              </p>
            </div>
          </div>
        </div>
        {/* card three */}
        <div className="w-[300px] mx-auto md:w-[350px] h-[450px] rounded-2xl bg-[#efeae3]">
          {/* upper side */}
          <div className="bg-[#ded5c7] rounded-2xl h-1/2 w-full relative">
            <div className="rounded-full h-[200px] w-[200px] absolute bottom-[-120px] flex translateLeft">
              <img
                className="w-full  rounded-full
               h-full"
                src="/team3.jpg"
                alt=""
              />
            </div>
          </div>
          {/* lower side */}
          <div className=" ">
            <div className="px-4 py-4 text-center text-lg">
              <h3 className="text-[#3C2F19] mt-6 uppercase overflow-hidden font-bold text-xl">
                Sophia Carver
              </h3>
              <p className="text-[#3C2F19] font-medium ">
                Sustainable Woodcraft Specialist
              </p>
              <p className="text-base mt-4">
                Crafting with sustainable wood is not just about making
                beautiful objects; it is about honoring natures gifts and
                preserving them for generations to come.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artisans;
