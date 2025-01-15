import React from "react";
import TitleBar from "../components/TitleBar";
import MainSection from "../components/MainSection";
import { eventuserset, eventsusericon } from "../assets";
import { useNavigate } from "react-router-dom";

const EventsPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="py-8">
      <TitleBar title="Events" />
      <MainSection>
        <div className="flex gap-4 w-[80%] items-center justify-between">
          <div
            onClick={() => navigate("users")}
            className="w-[40%] aspect-square bg-dark rounded-2xl flex flex-col items-center justify-center group cursor-pointer"
          >
            <img
              src={eventsusericon}
              alt="eventsusericon"
              className="w-[50%] group-hover:animate-pulse group-hover:scale-105 duration-200"
            />
            <p className="text-white font-[700] text-[1.5rem] group-hover:animate-pulse duration-200 group-hover:scale-105">
              User Posted Event Manage
            </p>
          </div>
          <div
            onClick={() => navigate("admin")}
            className="w-[40%] aspect-square bg-dark rounded-2xl flex flex-col items-center justify-center group cursor-pointer"
          >
            <img
              className="w-[50%] group-hover:animate-pulse group-hover:scale-105 duration-200"
              src={eventuserset}
              alt="eventuserset"
            />
            <p className="text-white font-[700] text-[1.5rem] group-hover:animate-pulse duration-200 group-hover:scale-105">
              Admin Event Manage
            </p>
          </div>
        </div>
      </MainSection>
    </div>
  );
};

export default EventsPage;
