import React from "react";

const ProductsCarouselCard = ({ item }) => {
  return (
    <div
      className={`bg-[#282B2F] ${
        item === 1 ? "mx-0 max-w-max" : "mx-8"
      }  p-6 rounded-xl border border-gray-400 relative transition duration-300 ease-in-out`}
      style={{
        border: "solid 0.0625rem rgb(66 63 63 / 90%)",
        boxShadow: "1px 1px 8px 1px rgb(0 0 0 / 30%)",
      }}
    >
      <div className="relative transition ease-in-out duration-700 transform hover:scale-105">
        <img
          className="rounded-lg w-full h-full lg:max-w-max"
          src="/anim-5.webp"
          alt=""
        />
        <div className="absolute left-1/2 top-1/2 w-12 h-12 bg-purple-500 rounded-full flex justify-center items-center transform -translate-x-1/2 -translate-y-1/2 text-white text-center text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </div>
        <div className="absolute left-0 -top-1.5 w-10 h-10">
          <img
            width="200"
            height="200"
            className="rounded-full"
            src="author-1.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-5 p-0">
        <p className="font-extrabold text-base mb-1 text-gray-600">Cig Swaag</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
      </div>
      <div className="">
        <h5 className="text-sm font-semibold block text-gray-500">
          0.08 ETH <strong className="text-white"> 1/20</strong>
        </h5>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-purple-600">Place a bid</span>
        <div className="text-gray-400 flex gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
          </svg>
          50
        </div>
      </div>
    </div>
  );
};

export default ProductsCarouselCard;
