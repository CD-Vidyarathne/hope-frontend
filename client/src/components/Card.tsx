import React from "react";
import HopeButton from "./HopeButton";

interface CardProps {
  img: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ img, text }) => {
  return (
    <div className="max-w-[200px] h-[350px] bg-gradient-to-b from-white via-[#B6CAF2] to-[#FCFCFC] shadow-lg rounded-md p-4 flex flex-col justify-between items-center text-center border border-gray-200">
      <div className="flex justify-center items-center">
        <img src={img} className="max-w-full max-h-32 object-cover" />
      </div>
      <div className="text-md text-gray-700  overflow-hidden text-ellipsis">
        {text}
      </div>
      <HopeButton text="Donate" className="w-full py-1" />
    </div>
  );
};
export default Card;
