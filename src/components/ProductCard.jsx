import { Users, MapPin } from "lucide-react";
import React from "react";
import concreteImg from "../images/concrete.jpg";

const ProductCard = () => {
  return (
    <div className="grid grid-cols-[70px_1fr_auto] gap-4 bg-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <img
        src={concreteImg}
        alt="img"
        className="w-full object-contain rounded-lg bg-white p-2"
      />

      <div className="flex flex-col">
        <h4 className="font-semibold text-lg">Manufacturer</h4>
        <h5 className="text-sm text-gray-600 ">Ramchandra Pvt Ltd .</h5>

        <p className="flex items-center gap-2 text-sm text-gray-800">
          <MapPin size={16} /> Lorem ipsum, dolor sit amet consectetur | dolor
          sit amet consectetur adipisicing
        </p>

        <p className="flex items-center gap-2 text-sm text-gray-800">
          <Users size={16} /> Lorem ipsum dolor sit amet consectetur adipi |
          Lorem ipsum dolor sit amet consectetur adipi
        </p>
      </div>

      <div className="flex flex-col justify-between items-end gap-2">
        <button className="px-4 py-2 bg-yellow-300 rounded-lg text-center shadow-sm">
          <h4 className="font-semibold text-gray-900">₹4000 / Unit</h4>
          <p className="text-xs text-gray-700">Ex-factory price</p>
        </button>

        <button className="px-5 py-2 bg-[#0A1E5E] text-white font-semibold rounded-lg shadow-sm hover:bg-blue-800 transition">
          Connect
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
