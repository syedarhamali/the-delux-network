const { default: ProductsCarousel } = require("../ui/carousel");

const Products = () => {
  return (
    <section className="bg-[#212428] h-screen relative">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 flex flex-col gap-6">
        <p className="text-white text-3xl font-bold">New Items</p>
        <ProductsCarousel />
      </div>
    </section>
  );
};

export default Products;
