import React from "react";
import { GiAbstract039 } from "react-icons/gi";
import art from "../assets/art.jpeg";
import shirts from "../assets/shirts.jpeg";
import shoes from "../assets/shoes.jpeg";
import modelshoot from "../assets/modelshoot.jpeg";
const LandingPage = () => {
  return (
    <div className="landingpage_section">
      <div className="black-section w-full bg-black flex text-slate-100 text-sm p-2 items-center justify-center gap-9">
        <span>Offical Produx Store</span>
        <span>Free Shipping</span>
        <span>Secure Shopping</span>
      </div>
      <div className="showcase h-96 w-full flex items-start justify-center pt-[10%]">
        <div className="content">
          <div className="header font-bold text-6xl tracking-widest text-white drop-shadow-2xl flex gap-2">
            ACTIVE READY <GiAbstract039 />
          </div>
        </div>
      </div>
      <div className="featured_product_section p-5 pt-10">
        <div className="featured_header text-xl text-center font-semibold">
          Featured Products
        </div>
        <div className="tracking-widest text-sm text-center mt-1 ">
          LIVE WITH THE MOMENT WITH PRODUX 
        </div>
        <div className="image-gallery flex flex-col flex-wrap justify-center items-center p-10 gap-3 mt-3 ">
          <div className="upper flex gap-3">
            <img src={shirts} alt="TSHIRTS" />
            <img src={shoes} alt="SHOES" />
            <img src={art} alt="ART" />
            <img src={modelshoot} alt="" />
          </div>
          <div className="lower flex gap-3">
            <img src={art} alt="ART" />
            <img src={modelshoot} alt="" />
            <img src={shirts} alt="TSHIRTS" />
            <img src={shoes} alt="SHOES" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
