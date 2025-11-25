import React from "react";
import Card from "../components/Card";
import MaterialCard from "../components/MaterialCard";
import { ArrowDownUp, ArrowDownWideNarrow, MapPin } from "lucide-react";
import ProductCard from "../components/ProductCard";
import ActiveSidebarCard from "../components/ActiveSidebarCard";

const Product = () => {
  return (
    <div className="grid grid-cols-[18%,10%,70%] gap-6 p-6">
      <div className="flex flex-col gap-3">
        <ActiveSidebarCard title="Material Marketplace " />
        <Card title="Construction line marketplace" />
        <Card title="Tools & Equipement line marketplace" />
      </div>
      <div className="flex flex-col gap-3">
        <MaterialCard title="Manufature sand" />
        <MaterialCard title="Concrete sand" />
        <MaterialCard title="Plastering sand" />
        <MaterialCard title="Plastering sand" />
      </div>
      <div>
        <div className="flex items-center gap-6">
          <p className=" flex items-center gap-6 px-4 py-1  border border-gary-500 text-black rounded-full">
            Sort <ArrowDownUp size={16} />
          </p>
          <p className=" flex items-center gap-6 px-4 py-1 border border-gary-500 text-black rounded-full">
            Location <MapPin size={16} />
          </p>
          <p className=" flex items-center gap-6 px-4 py-1 border border-gary-500 text-black rounded-full">
            Filter <ArrowDownWideNarrow size={16} />
          </p>
        </div>
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
