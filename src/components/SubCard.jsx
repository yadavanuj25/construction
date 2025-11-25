import { LayoutDashboard } from "lucide-react";
import React from "react";

const SubCard = ({ title }) => {
  return (
    <div
      className="
        flex items-center gap-3 
        bg-white border border-gray-300 
        rounded-2xl cursor-pointer 
        hover:bg-gray-50 transition
        px-4 py-3      
        sm:px-5 sm:py-4 
        md:px-6 md:py-5 
      "
    >
      <LayoutDashboard
        size={20}
        className="text-gray-700 sm:size-[22px] md:size-[24px]"
      />

      <span
        className="
          font-medium leading-tight text-gray-700
          text-sm      
          sm:text-base  
           
        "
      >
        {title}
      </span>
    </div>
  );
};

export default SubCard;
