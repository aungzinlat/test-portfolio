import React from "react";
import logo from "../assets/logo.svg";
const HeaderComponents = () => {
  return (
    <header id="head" className=" py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="">
            <h2 className=" font-primary font-medium text-accent text-[50px] tracking-[50%] uppercase">
              AZL
            </h2>
          </a>
          <button className=" btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponents;
