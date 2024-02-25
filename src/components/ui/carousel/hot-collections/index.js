import React from "react";
import Slider from "react-slick";
import { twMerge } from "tailwind-merge";
import NewItemsCard from "./cards";

const mainSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToScroll: 1,
  slidesToShow: 4,
  arrows: true,
  swipeToSlide: true,
  draggable: true,
};

function NextArrow({ currentSlide, slideCount, cardsToShow, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        "absolute inline-flex items-center hover:opacity-65 justify-center right-0 border border-gray-200 rounded-full bottom-36 w-12 h-12"
      )}
      style={{
        border: "solid 0.0625rem rgb(66 63 63 / 90%)",
        boxShadow: "1px 1px 8px 1px rgb(0 0 0 / 30%)",
      }}
      aria-hidden="true"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="mx-auto w-7 h-7"
      >
        <path
          fillRule="evenodd"
          d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

function PrevArrow({ currentSlide, slideCount, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(
        "absolute inline-flex hover:opacity-65 items-center justify-center left-0 border border-gray-200 rounded-full z-20 bottom-36 w-12 h-12 "
      )}
      style={{
        border: "solid 0.0625rem rgb(66 63 63 / 90%)",
        boxShadow: "1px 1px 8px 1px rgb(0 0 0 / 30%)",
      }}
      aria-hidden="true"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="mx-auto w-7 h-7"
      >
        <path
          fillRule="evenodd"
          d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}

const HotCollections = () => {
  const cardsToShow = {
    desktop: 4,
    bigTablet: 4,
    tablet: 1.97,
    mobile: 2,
  };

  const data = [1, 2, 3, 4, 5, 6];

  const settings = {
    ...mainSettings,
    slidesToShow: cardsToShow.desktop,
    nextArrow: <NextArrow cardsToShow={cardsToShow.desktop} />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1366,
        settings: {
          slidesToShow: cardsToShow.bigTablet,
          nextArrow: <NextArrow cardsToShow={cardsToShow.bigTablet} />,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: cardsToShow.tablet,
          nextArrow: <NextArrow cardsToShow={cardsToShow.tablet} />,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: cardsToShow.mobile,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data && data.map((item , index) => <NewItemsCard key={index} item={item} />)}
    </Slider>
  );
};

export default HotCollections;
