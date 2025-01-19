import React from "react";
import HopeButton from "./HopeButton";
import { useNavigate } from "react-router-dom";

interface CardProps {
  type: string;
  id: string;
  img: string;
  text: string;
}

const handleParticipate = () => {
  console.log("Participate");
};

const Card: React.FC<CardProps> = ({ type, id, img, text }) => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[200px] h-[350px] bg-gradient-to-b from-white via-[#B6CAF2] to-[#FCFCFC] shadow-lg rounded-md p-4 flex flex-col justify-between items-center text-center border border-gray-200">
      <div className="flex justify-center items-center">
        <img src={img} className="max-w-full max-h-32 object-cover" />
      </div>
      <div className="text-md text-gray-700  overflow-hidden text-ellipsis">
        {text}
      </div>
      <HopeButton
        text={type}
        className="w-full py-1"
        onClick={() => {
          if (type == "Participate") {
            handleParticipate();
            return;
          }
          navigate(`/donations/${id}`);
        }}
      />
    </div>
  );
};
export default Card;
