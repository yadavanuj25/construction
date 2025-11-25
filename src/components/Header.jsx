import React from "react";
import {
  House,
  LayoutDashboard,
  HeartPulse,
  ChartBarStacked,
  Menu,
  Plus,
  Bell,
  Info,
  MapPin,
  User,
} from "lucide-react";
import logo from "../images/concrete.jpg";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 bg-white border-b border-gray-200 py-3 px-4 sm:px-6 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* LOGO + MOBILE MENU */}
        <div className="flex items-center gap-3">
          <button className="lg:hidden p-2 bg-gray-100 rounded-md border border-gray-300">
            <Menu size={22} />
          </button>

          <img
            src={logo}
            alt="logo"
            className="
      w-12 h-12 sm:w-14 sm:h-14
      object-cover
      rounded-full       
    "
          />
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-10 text-xs font-medium text-gray-600">
            <li className="flex flex-col items-center cursor-pointer text-blue-700 font-semibold">
              <House size={20} />
              <span>Home</span>
            </li>

            <li className="flex flex-col items-center cursor-pointer hover:text-blue-700 ">
              <LayoutDashboard size={20} />
              <span className="mt-0.5">Dashboard</span>
            </li>

            <li className="flex flex-col items-center cursor-pointer hover:text-blue-700">
              <ChartBarStacked size={20} />
              <span>Category</span>
            </li>

            <li className="flex flex-col items-center cursor-pointer hover:text-blue-700">
              <HeartPulse size={20} />
              <span>Connection</span>
            </li>

            <li className="flex flex-col items-center cursor-pointer hover:text-blue-700">
              <Menu size={20} />
              <span>More</span>
            </li>
          </ul>

          {/* Add Button */}
          <button className="p-3 rounded-full bg-[#0A1E5E] text-white shadow hover:bg-[#071642] transition">
            <Plus size={20} />
          </button>
        </nav>

        <div className="flex items-center gap-4 sm:gap-6 pl-4 sm:pl-6 border-l border-gray-300">
          <div className="hidden md:flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <User size={28} className="text-gray-500" />
            </div>

            <div>
              <h4 className="text-md font-semibold text-blue-900">Anuj</h4>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <MapPin size={14} />
                Jp nagar 7th p...
              </p>
            </div>

            <button className="px-5 py-1.5 bg-[#0A1E5E] text-white rounded-full text-sm font-medium hover:bg-[#071642] transition">
              Explore
            </button>
          </div>

          {/* USER ICON ON MOBILE */}
          <div className="md:hidden w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <User size={22} className="text-gray-500" />
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 rounded-full bg-white">
                <Info size={20} />
              </div>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </div>

            <div className="relative">
              <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center border border-gray-300 rounded-full bg-white">
                <Bell size={20} />
              </div>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
