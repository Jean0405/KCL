import { Avatar } from "@nextui-org/react";
import React from "react";

function Testimony() {
  return (
    <div className="w-full flex flex-col items-center md:items-start my-5">
      <h1 className="font-bold text-3xl">REFERENCIAS PERSONALES</h1>
      <Avatar
        className="w-20 h-20 mt-5 mb-2"
        radius="sm"
        src="https://i.pravatar.cc/150?u=a04258114e29026302d"
      />
      <h3 className="font-semibold text-xl">Carlos Alberto Villafrades</h3>
      <p className="text-lg text-justify">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
        explicabo laboriosam placeat rerum magni aperiam quam dignissimos in a
        tempore, praesentium earum sunt error autem, at, labore repellendus
        soluta ut.
      </p>
    </div>
  );
}

export default Testimony;
