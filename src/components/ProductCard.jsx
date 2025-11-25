import { Users, MapPin } from "lucide-react";
import React from "react";
import concreteImg from "../images/concrete.jpg";

const ProductCard = () => {
  return (
    <div
      className="
        grid 
        grid-cols-1           
        sm:grid-cols-[80px_1fr] 
        lg:grid-cols-[90px_1fr_auto] 
        gap-4 bg-gray-200 rounded-xl 
        p-3 sm:p-4 md:p-5
        shadow-sm hover:shadow-md transition
      "
    >
      {/* IMAGE */}
      <img
        src={concreteImg}
        alt="img"
        className="w-full h-full object-cover rounded-md bg-white"
      />

      {/* DETAILS */}
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-base sm:text-lg">Manufacturer</h4>
        <h5 className="text-xs sm:text-sm text-gray-600">
          Ramchandra Pvt Ltd.
        </h5>

        {/* Location */}
        <div className="flex items-start gap-2 text-gray-800">
          <MapPin size={22} className="shrink-0 text-gray-700" />
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur | dolor sit amet consectetur
            adipisicing
          </p>
        </div>

        {/* Users */}
        <div className="flex items-start gap-2 text-gray-800">
          <Users size={22} className="shrink-0 text-gray-700" />
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipi | Lorem ipsum dolor sit
            amet consectetur adipi
          </p>
        </div>
      </div>

      {/* ACTIONS */}
      <div className="flex flex-col items-stretch sm:items-end justify-between gap-3 mt-2 sm:mt-0">
        <button className="px-4 py-2 bg-yellow-300 rounded-lg text-center shadow-sm">
          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
            ₹4000 / Unit
          </h4>
          <p className="text-[10px] sm:text-xs text-gray-700">
            Ex-factory price
          </p>
        </button>

        <button
          className="
            px-4 py-2 bg-[#0A1E5E] 
            text-white font-semibold rounded-lg shadow-sm
            hover:bg-blue-800 transition
            text-sm sm:text-base
          "
        >
          Connect
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
