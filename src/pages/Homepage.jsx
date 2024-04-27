import CraftItems from "../components/CraftItems";
import Slider from "../components/Slider";

const Homepage = () => {
  return (
    <div>
      <div className="h-auto lg:h-[800px]">
        <Slider></Slider>
      </div>
      <CraftItems></CraftItems>
    </div>
  );
};

export default Homepage;
