import Card from "./Card";

const CraftItems = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl text-center uppercase font-bold ">Craft Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default CraftItems;
