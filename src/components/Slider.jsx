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
            <img src="/cardmaking.jpg" className="opacity-40" />

            <div className="absolute translateHeight w-full  ">
              <div>
                <h2 className="text-xl md:text-5xl font-bold text-center mb-4 text-[#efeae3]">
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={[
                        "Greeting Cards",
                        "Greeting Cards",
                        "Greeting Cards",
                      ]}
                      loop={5}
                      cursor
                      cursorStyle=""
                      typeSpeed={70}
                      deleteSpeed={100}
                      delaySpeed={1000}
                    />
                  </span>
                </h2>
                <p className="md:w-[650px] mx-auto text-center text-[#efeae3]">
                  Greeting cards are timeless tokens of sentiment, often
                  exchanged to convey emotions ranging from love and gratitude
                  to sympathy and celebration. These small pieces of folded
                  paper hold the power to brighten someones day, strengthen
                  relationships, and commemorate special occasions.
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
            <img src="/glasspainting.jpg" className="opacity-40" />

            <div className="absolute translateHeight w-full  ">
              <div>
                <h2 className="text-xl md:text-5xl font-bold text-center mb-4 text-[#efeae3]">
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={[
                        "Glass Painting",
                        "Glass Painting",
                        "Glass Painting",
                      ]}
                      loop={5}
                      cursor
                      cursorStyle=""
                      typeSpeed={70}
                      deleteSpeed={100}
                      delaySpeed={1000}
                    />
                  </span>
                </h2>
                <p className="md:w-[650px] mx-auto text-center text-[#efeae3]">
                  Glass painting is a captivating craft that transforms plain
                  glass surfaces into vibrant works of art. Whether creating
                  stained glass windows, decorative ornaments, or intricate
                  designs on glassware, this versatile medium offers endless
                  possibilities for creativity and expression. Using specialized
                  paints, brushes, and techniques, artists can adorn glass
                  surfaces with intricate patterns, vivid colors, and
                  captivating imagery, resulting in stunning pieces that capture
                  the eye and inspire the imagination.
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
            <img src="/scrapbooking.jpg" className="opacity-40" />

            <div className="absolute translateHeight w-full  ">
              <div>
                <h2 className="text-xl md:text-5xl font-bold text-center mb-4 text-[#efeae3]">
                  <span style={{ color: "white", fontWeight: "bold" }}>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                      words={["Scrapbooking", "Scrapbooking", "Scrapbooking"]}
                      loop={5}
                      cursor
                      cursorStyle=""
                      typeSpeed={70}
                      deleteSpeed={100}
                      delaySpeed={1000}
                    />
                  </span>
                </h2>
                <p className="md:w-[650px] mx-auto text-center text-[#efeae3]">
                  Scrapbooking is a cherished craft that transforms ordinary
                  photographs, memorabilia, and mementos into treasured
                  keepsakes. It offers a creative outlet for preserving
                  memories, telling stories, and celebrating lifes moments, both
                  big and small.
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
