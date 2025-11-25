import { LayoutDashboard } from "lucide-react";
import React from "react";

const Card = ({ title }) => {
  return (
    <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-2xl px-5 py-4 cursor-pointer hover:bg-gray-50">
      <LayoutDashboard size={22} className="text-gray-700" />
      <span className="text-base font-medium leading-tight text-gray-700">
        {title}
      </span>
    </div>
  );
};

export default Card;
