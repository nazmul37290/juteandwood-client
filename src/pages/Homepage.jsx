import { useLoaderData } from "react-router-dom";
import CraftItems from "../components/CraftItems";
import Slider from "../components/Slider";

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
    </div>
  );
};

export default Homepage;
