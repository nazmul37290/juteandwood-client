// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Typewriter } from "react-simple-typewriter";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        speed={1000}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <div className="bg-black ">
            <img src="/juteHomeDecor.jpg" className="opacity-40" />

            <div className="absolute translateHeight w-full  ">
              <div>
                <h2 className="text-xl md:text-5xl font-bold text-center mb-4 uppercase text-[#efeae3]">
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={[
                        "Jute home decor",
                        "Jute home decor",
                        "Jute home decor",
                      ]}
                      loop={100}
                      cursor
                      cursorStyle=""
                      typeSpeed={70}
                      deleteSpeed={100}
                      delaySpeed={1000}
                    />
                  </span>
                </h2>
                <p className="hidden md:flex md:w-[650px] mx-auto text-center text-[#efeae3]">
                  Jute home decor offers a natural and eco-friendly way to add
                  warmth, texture, and character to living spaces. Jute, a
                  versatile and sustainable fiber derived from the jute plant,
                  is prized for its durability, softness, and earthy appeal.
                  From rugs and curtains to wall hangings and furniture, jute
                  home decor items bring a touch of rustic charm and organic
                  beauty to any room.
                </p>
                <div className="text-center mt-4 ">
                  <button className="btn text-lg bg-[#ad9773] text-white">
                    View Cards
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <div className="bg-black ">
            <img src="/woodenkitchen.jpg" className="opacity-40" />

            <div className="absolute translateHeight w-full  ">
              <div>
                <h2 className="text-xl uppercase md:text-5xl font-bold text-center mb-4 text-[#efeae3]">
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={[
                        "Wooden kitchenware ",
                        "Wooden kitchenware ",
                        "Wooden kitchenware ",
                      ]}
                      loop={100}
                      cursor
                      cursorStyle=""
                      typeSpeed={70}
                      deleteSpeed={100}
                      delaySpeed={1000}
                    />
                  </span>
                </h2>
                <p className=" hidden md:flex md:w-[650px] mx-auto text-center text-[#efeae3]">
                  Wooden kitchenware offers a timeless and organic aesthetic
                  that adds warmth, charm, and functionality to any kitchen.
                  Crafted from natural wood materials such as maple, cherry,
                  walnut, and bamboo, wooden kitchenware items are prized for
                  their durability, versatility, and eco-friendly appeal.
                </p>
                <div className="text-center mt-4 ">
                  <button className="btn text-lg bg-[#ad9773] text-white">
                    View Items
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <div className="bg-black ">
            <img src="/woodenSculpture.jpg" className="opacity-40" />

            <div className="absolute translateHeight w-full  ">
              <div>
                <h2 className="text-xl md:text-5xl font-bold text-center uppercase mb-4 text-[#efeae3]">
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={["Wooden sculptures", "Wooden sculptures"]}
                      loop={100}
                      cursor
                      cursorStyle=""
                      typeSpeed={70}
                      deleteSpeed={100}
                      delaySpeed={1000}
                    />
                  </span>
                </h2>
                <p className="hidden md:flex md:w-[650px] mx-auto text-center text-[#efeae3]">
                  Wooden sculptures are exquisite works of art crafted from wood
                  through carving, shaping, and sculpting techniques. Dating
                  back thousands of years, wooden sculpture has been a prominent
                  form of artistic expression across cultures and civilizations.
                </p>
                <div className="text-center mt-4 ">
                  <button className="btn text-lg bg-[#ad9773] text-white">
                    View Items
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
