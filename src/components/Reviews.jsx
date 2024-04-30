import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css";

const Reviews = () => {
  return (
    <div className="mt-24">
      <h1 className="text-3xl  text-center uppercase font-bold ">Reviews</h1>
      <div className="mt-20 ">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="bg-[#efeae3] flex py-5 px-10 gap-5 rounded-2xl ">
              <img
                src="/team1.jpg"
                className=" h-20 w-20 top-[-40px] right-5 rounded-2xl "
                alt=""
              />

              <div>
                <h1 className="font-bold text-xl">Review by Sarah Woods</h1>
                <p className="font-semibold text-base">Interior Designer</p>
                <p className="p-4">
                  As an interior designer, Im always on the lookout for unique
                  and sustainable pieces to incorporate into my projects. I
                  stumbled upon this website while searching for eco-friendly
                  decor options, and Im so glad I did! The craftsmanship is
                  impeccable, and the attention to detail is evident in every
                  piece. I recently used one of their jute wall hangings in a
                  clients living room, and it instantly became the focal point
                  of the space. I highly recommend their products to anyone
                  looking to add a touch of artisanal charm to their home.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#efeae3] flex py-5 px-10 gap-5 rounded-2xl ">
              <img
                src="/team1.jpg"
                className=" h-20 w-20 top-[-40px] right-5 rounded-2xl "
                alt=""
              />

              <div>
                <h1 className="font-bold text-xl">Review by Sarah Woods</h1>
                <p className="font-semibold text-base">Interior Designer</p>
                <p className="p-4">
                  As an interior designer, Im always on the lookout for unique
                  and sustainable pieces to incorporate into my projects. I
                  stumbled upon this website while searching for eco-friendly
                  decor options, and Im so glad I did! The craftsmanship is
                  impeccable, and the attention to detail is evident in every
                  piece. I recently used one of their jute wall hangings in a
                  clients living room, and it instantly became the focal point
                  of the space. I highly recommend their products to anyone
                  looking to add a touch of artisanal charm to their home.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#efeae3] flex py-5 px-10 gap-5 rounded-2xl ">
              <img
                src="/team1.jpg"
                className=" h-20 w-20 top-[-40px] right-5 rounded-2xl "
                alt=""
              />

              <div>
                <h1 className="font-bold text-xl">Review by Sarah Woods</h1>
                <p className="font-semibold text-base">Interior Designer</p>
                <p className="p-4">
                  As an interior designer, Im always on the lookout for unique
                  and sustainable pieces to incorporate into my projects. I
                  stumbled upon this website while searching for eco-friendly
                  decor options, and Im so glad I did! The craftsmanship is
                  impeccable, and the attention to detail is evident in every
                  piece. I recently used one of their jute wall hangings in a
                  clients living room, and it instantly became the focal point
                  of the space. I highly recommend their products to anyone
                  looking to add a touch of artisanal charm to their home.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Reviews;
