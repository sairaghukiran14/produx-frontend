import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { FaUser, FaShoppingCart } from "react-icons/fa";

import { IoMdArrowDropdown } from "react-icons/io";
 
const NavigationBar = () => {
  const [t, setT] = useState("hidden");
  const [shoes, setShoes] = useState("hidden");
  return (
    <div className="flex items-center justify-between p-2 px-7">
      <div className="leftnav flex gap-5 font-semibold text-sm">
        <div
          className="tshirts flex items-center relative cursor-pointer"
          onClick={() => {
            t === "hidden" ? setT("block") : setT("hidden");
          }}
        >
          TSHIRTS <IoMdArrowDropdown className="text-slate-400" />
          <div
            className={`opendropdown absolute bg-white rounded-md p-4 top-7 ${t} flex flex-col w-48 border`}
          >
            <div className="coloredtees p-1">COLORED TSHIRTS</div>
            <div className="dropshoulders p-1">DROP SHOULDERS</div>
            <div className="graphictees p-1">GRAPHIC TSHIRTS</div>
          </div>
        </div>
        <div
          className="shoes flex items-center relative cursor-pointer"
          onClick={() => {
            shoes === "hidden" ? setShoes("block") : setShoes("hidden");
          }}
        >
          SHOES <IoMdArrowDropdown className="text-slate-400 " />
          <div
            className={`opendropdown absolute bg-white rounded-md p-4 top-7 ${shoes} flex flex-col w-48 border`}
          >
            <div className="sneakers p-1">SNEAKERS</div>
            <div className="highboots p-1">HIGH BOOTS</div>
          </div>
        </div>
        <div className="art flex items-center cursor-pointer">
          ART <IoMdArrowDropdown className="text-slate-400" />
        </div>
      </div>
      <div className="logo flex items-center gap-1 mr-[8%]">
        <div className="logoname font-semibold text-3xl tracking-widest">
          produx
        </div>
      </div>
      <div className="rightnav flex gap-6">
        <IoSearch className="cursor-pointer" />
        <FaUser className="cursor-pointer" />
        <FaShoppingCart className="cursor-pointer" />
      </div>
    </div>
  );
};

export default NavigationBar;
