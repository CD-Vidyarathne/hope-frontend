import React from "react";
import Graphs from "../components/dashboard/Graphs";
import Summary from "../components/dashboard/Summary";
import UpcomingEvents from "../components/dashboard/UpcomingEvents";
import TitleBar from "../components/TitleBar";

const DashboardPage: React.FC = () => {
  return (
    <div className="py-8">
      <TitleBar title="Dashboard" />
      <div className="p-8 flex flex-col justify-center items-center gap-4">
        <Summary />
        <UpcomingEvents />
        <Graphs />
      </div>
    </div>
  );
};

export default DashboardPage;
