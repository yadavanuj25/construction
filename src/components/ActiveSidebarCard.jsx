import { LayoutDashboard } from "lucide-react";
import React from "react";

const ActiveSidebarCard = ({ title }) => {
  return (
    <div className="flex items-center gap-3 bg-[#0A1E5E] text-white rounded-2xl px-6 py-6 shadow-sm cursor-pointer">
      <LayoutDashboard size={22} />
      <span className="text-base font-semibold leading-tight">{title}</span>
    </div>
  );
};

export default ActiveSidebarCard;
