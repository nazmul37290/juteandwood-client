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
            <div className="bg-[#efeae3] flex py-5 px-10 gap-5 rounded-2xl justify-center">
              <div className="h-[250px] w-[300px]">
                <img
                  src="/3.jpg"
                  className=" h-20 w-20 top-[-40px] right-5 rounded-2xl "
                  alt=""
                />
              </div>

              <div className="w-1/2">
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
            <div className="bg-[#efeae3] flex py-5 px-10 gap-5 rounded-2xl justify-center items-center">
              <div className="h-[250px] w-[300px]">
                <img
                  src="/1.jpg"
                  className=" h-20 w-20 top-[-40px] right-5 rounded-2xl "
                  alt=""
                />
              </div>

              <div className="w-1/2">
                <h1 className="font-bold text-xl">Review by David Carpenter</h1>
                <p className="font-semibold text-base">DIY Enthusiast</p>
                <p className="p-4">
                  Ive been a woodworking hobbyist for years, and Im always on
                  the lookout for inspiration and new project ideas. This
                  website is like a treasure trove of creativity! The DIY
                  tutorials are easy to follow, even for someone like me with
                  intermediate skills. I recently tried one of their woodworking
                  projects, and I was thrilled with the results. The
                  step-by-step instructions were clear, and the end result
                  exceeded my expectations. I cant wait to try more projects
                  from this site!
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#efeae3] flex py-5 px-10 gap-5 rounded-2xl justify-center ">
              <div className="h-[250px] w-[300px]">
                <img
                  src="/2.jpg"
                  className=" h-20 w-20 top-[-40px] right-5 rounded-2xl "
                  alt=""
                />
              </div>

              <div className="w-1/2">
                <h1 className="font-bold text-xl">Review by Emily Weaver</h1>
                <p className="font-semibold text-base">Home Decor Enthusiast</p>
                <p className="p-4">
                  i have always had a passion for unique and handmade home decor
                  items, so when I stumbled upon this website, I was immediately
                  drawn in. The gallery section is like a feast for the eyes,
                  with stunning wood and jute creations that are both elegant
                  and eco-friendly. I recently purchased a set of wooden
                  coasters and a jute table runner for my dining room, and I
                  couldnot be happier with my purchase. The quality is
                  top-notch, and the items arrived beautifully packaged. I will
                  definitely be a repeat customer!
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
