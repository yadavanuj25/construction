import { LayoutDashboard } from "lucide-react";
import React from "react";

const ActiveSidebarCard = ({ title }) => {
  return (
    <div
      className="
        flex items-center gap-3 
        bg-[#0A1E5E] text-white rounded-2xl shadow-sm cursor-pointer 
        px-4 py-4        
        sm:px-5 sm:py-5 
        md:px-6 md:py-6  
      "
    >
      <LayoutDashboard size={20} className="sm:size-[22px]" />

      <span
        className="
          font-semibold leading-tight
          text-sm           
          sm:text-base            
        "
      >
        {title}
      </span>
    </div>
  );
};

export default ActiveSidebarCard;
