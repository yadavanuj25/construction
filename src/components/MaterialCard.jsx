import React from "react";
import concreteImg from "../images/concrete.jpg";

const MaterialCard = ({ title }) => {
  return (
    <div className="flex flex-col items-center gap-2 px-3 py-4 border border-gray-200 rounded-xl bg-gary-800 shadow-sm cursor-pointer hover:shadow transition">
      <img
        src={concreteImg}
        alt="material"
        className="w-24 h-16 object-cover rounded-md"
      />
      <h4 className="text-sm font-medium text-gray-700 text-center leading-tight">
        {title}
      </h4>
    </div>
  );
};

export default MaterialCard;
