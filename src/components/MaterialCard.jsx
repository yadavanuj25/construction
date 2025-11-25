import React from "react";
import concreteImg from "../images/concrete.jpg";

const MaterialCard = ({ title }) => {
  return (
    <div
      className="
        flex flex-col items-center gap-2
        border border-gray-200 rounded-xl shadow-sm cursor-pointer
        hover:shadow transition bg-white
        px-3 py-3           
        
      "
    >
      <img
        src={concreteImg}
        alt="material"
        className="
            w-full h-full 
            object-cover 
            rounded-lg bg-white
          "
      />

      <h4
        className="
          text-gray-700 text-center leading-tight font-medium
          text-xs        
          sm:text-sm     
        "
      >
        {title}
      </h4>
    </div>
  );
};

export default MaterialCard;
