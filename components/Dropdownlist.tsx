"use client";
import React from "react";
import Image from "next/image";

const Dropdownlist = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="relative">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="filter-trigger">
          <figure>
            <Image
              src={"/assets/icons/hamburger.svg"}
              width={14}
              height={14}
              alt="menu"
            />
            Most Recent
          </figure>
          <Image
            src={"/assets/icons/arrow-down.svg"}
            width={20}
            height={20}
            alt="arrow-down"
            className={`${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Dropdownlist;
