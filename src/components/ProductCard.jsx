import { Users, MapPin } from "lucide-react";
import React from "react";
import concreteImg from "../images/concrete.jpg";

const ProductCard = () => {
  return (
    <div
      className="
        grid 
        grid-cols-1            /* mobile: stack */
        sm:grid-cols-[80px_1fr] /* tablet: 2 columns */
        lg:grid-cols-[90px_1fr_auto] /* desktop: 3 columns */

        gap-4 bg-gray-200 rounded-xl 
        p-3 sm:p-4 md:p-5
        shadow-sm hover:shadow-md transition
      "
    >
      {/* IMAGE */}
      <img
        src={concreteImg}
        alt="img"
        className="
          w-full object-contain rounded-lg bg-white p-2

          h-20     /* mobile height */
          sm:h-24  /* tablet */
          md:h-28  /* desktop */
        "
      />

      {/* DETAILS */}
      <div className="flex flex-col gap-1">
        <h4 className="font-semibold text-base sm:text-lg md:text-xl">
          Manufacturer
        </h4>

        <h5 className="text-xs sm:text-sm text-gray-600">
          Ramchandra Pvt Ltd.
        </h5>

        <p className="flex items-start sm:items-center gap-2 text-xs sm:text-sm text-gray-800">
          <MapPin size={14} className="sm:size-[16px]" />
          Lorem ipsum dolor sit amet consectetur | dolor sit amet consectetur
          adipisicing
        </p>

        <p className="flex items-start sm:items-center gap-2 text-xs sm:text-sm text-gray-800">
          <Users size={14} className="sm:size-[16px]" />
          Lorem ipsum dolor sit amet consectetur adipi | Lorem ipsum dolor sit
          amet consectetur adipi
        </p>
      </div>

      {/* ACTIONS */}
      <div
        className="
          flex flex-col items-stretch sm:items-end justify-between gap-3

          mt-2 sm:mt-0     /* fix spacing on mobile */
        "
      >
        {/* Price Box */}
        <button
          className="
            px-3 py-2 sm:px-4 sm:py-2 
            bg-yellow-300 rounded-lg text-center shadow-sm
          "
        >
          <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
            ₹4000 / Unit
          </h4>
          <p className="text-[10px] sm:text-xs text-gray-700">
            Ex-factory price
          </p>
        </button>

        {/* Connect Button */}
        <button
          className="
            px-4 py-2 
            bg-[#0A1E5E] text-white font-semibold rounded-lg shadow-sm
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
