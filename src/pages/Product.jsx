import React from "react";
import SubCard from "../components/SubCard";
import MaterialCard from "../components/MaterialCard";
import { ArrowDownUp, ArrowDownWideNarrow, MapPin } from "lucide-react";
import ProductCard from "../components/ProductCard";
import ActiveSidebarCard from "../components/ActiveSidebarCard";

const Product = () => {
  return (
    <div
      className="
        grid 
        grid-cols-1                  /* mobile */
        md:grid-cols-[25%,75%]        /* tablet */
        lg:grid-cols-[18%,10%,70%]    /* desktop */
        gap-6 p-4 sm:p-6
      "
    >
      {/* Left Sidebar */}
      <div className="flex flex-col gap-3">
        <ActiveSidebarCard title="Material Marketplace" />
        <SubCard title="Construction line marketplace" />
        <SubCard title="Tools & Equipment line marketplace" />
      </div>

      {/* Middle Material Cards */}
      <div className="flex flex-col gap-3">
        <MaterialCard title="Manufacturer sand" />
        <MaterialCard title="Concrete sand" />
        <MaterialCard title="Plastering sand" />
        <MaterialCard title="Plastering sand" />
      </div>

      {/* Right Product List */}
      <div>
        {/* Top Filters */}
        <div
          className="
            flex flex-wrap gap-3 sm:gap-6 items-center

            /* Responsive spacing */
            text-sm sm:text-base
          "
        >
          <p className="flex items-center gap-3 px-4 py-2 border border-gray-500 rounded-full">
            Sort <ArrowDownUp size={16} />
          </p>

          <p className="flex items-center gap-3 px-4 py-2 border border-gray-500 rounded-full">
            Location <MapPin size={16} />
          </p>

          <p className="flex items-center gap-3 px-4 py-2 border border-gray-500 rounded-full">
            Filter <ArrowDownWideNarrow size={16} />
          </p>
        </div>

        {/* Product Cards */}
        <div className="flex flex-col gap-4 mt-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Product;
