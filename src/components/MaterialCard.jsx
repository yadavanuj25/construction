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
        sm:px-4 sm:py-4    
        md:px-5 md:py-5     
      "
    >
      <img
        src={concreteImg}
        alt="material"
        className="
          object-cover rounded-md
          w-20 h-14      
          sm:w-24 sm:h-16 
          md:w-28 md:h-20 
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
