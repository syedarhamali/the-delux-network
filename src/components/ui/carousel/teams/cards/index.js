import React from "react";

const TeamCard = ({ item }) => {
  const { name, designation, description, imageUrl } = item;
  return (
    <div className="px-6 mb-14 max-w-max sm:px-6 lg:px-4">
      <div className="flex flex-col">
        <a href="#" className="mx-auto">
          <img
            className="transition-all duration-200 delay-100 rounded-2xl drop-shadow-md hover:drop-shadow-xl"
            src={imageUrl}
          />
        </a>
        <div className="mt-6 text-center">
          <h1 className="mb-1 text-xl font-bold text-white">{name}</h1>
          <div className="mb-2 font-light text-primary-purple">
            {designation}
          </div>
          <div className="mb-2 font-light text-white">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
