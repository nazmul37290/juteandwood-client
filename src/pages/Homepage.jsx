import { useLoaderData } from "react-router-dom";
import CraftItems from "../components/CraftItems";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Artisans from "../components/Artisans";
import Reviews from "../components/Reviews";

const Homepage = () => {
  const items = useLoaderData();
  console.log(items);
  return (
    <div>
      <div className="h-auto lg:h-[800px]">
        <Slider></Slider>
      </div>
      <div className="max-w-6xl mx-auto">
        <CraftItems items={items}></CraftItems>
      </div>
      <div className="bg-[#efeae3] p-10 mt-10">
        <Categories></Categories>
      </div>
      <div className="max-w-6xl mx-auto">
        <Artisans></Artisans>
      </div>
      <div className="max-w-6xl mx-auto">
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default Homepage;
