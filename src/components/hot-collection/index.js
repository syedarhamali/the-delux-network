const { default: HotCollectionsCarousel } = require("../ui/carousel/hot-collections");

const HotCollections = () => {
  return (
    <section className="bg-[#212428] h-screen relative">
      <div className="flex flex-col gap-6 px-4 mx-auto max-w-[1440px] sm:px-6">
        <p className="text-3xl font-bold text-white">Hot Collections</p>
        <HotCollectionsCarousel />
      </div>
    </section>
  );
};

export default HotCollections;
