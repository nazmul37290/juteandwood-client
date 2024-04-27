import CraftItems from "../components/CraftItems";
import Slider from "../components/Slider";

const Homepage = () => {
  return (
    <div>
      <div className="h-auto lg:h-[800px]">
        <Slider></Slider>
      </div>
      <div className="max-w-6xl mx-auto">
        <CraftItems></CraftItems>
      </div>
    </div>
  );
};

export default Homepage;
