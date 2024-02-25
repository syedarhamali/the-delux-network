const { default: NewItemsCarousel } = require("../ui/carousel/new-items");

const NewItems = () => {
  return (
    <section className="bg-[#212428] py-24 relative">
      <div className="flex flex-col gap-6 px-4 mx-auto max-w-[1440px] sm:px-6">
        <p className="text-3xl font-bold text-white">New Items</p>
        <NewItemsCarousel />
      </div>
    </section>
  );
};

export default NewItems;
