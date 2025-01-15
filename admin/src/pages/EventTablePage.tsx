import React from "react";
import TitleBar from "../components/TitleBar";
import MainSection from "../components/MainSection";
import Table from "../components/Table";

interface RequestTablePageProps {
  title: string;
}

const EventTablePage: React.FC<RequestTablePageProps> = ({ title }) => {
  const adminData = [
    {
      id: "EvA11",
      event: "Cancer awareness walk",
      time: "09:00 AM",
      location: "Colombo City Hall, Colombo",
      date: "2024/09/11",
    },
    {
      id: "EvA12",
      event: "Cancer awareness walk",
      time: "09:00 AM",
      location: "Colombo City Hall, Colombo",
      date: "2024/09/11",
    },
    {
      id: "EvA13",
      event: "Cancer awareness walk",
      time: "09:00 AM",
      location: "Colombo City Hall, Colombo",
      date: "2024/09/11",
    },
  ];
  const userData = [
    {
      id: "EvU11",
      event: "Cancer awareness walk",
      time: "09:00 AM",
      location: "Colombo City Hall, Colombo",
      date: "2024/09/11",
    },
    {
      id: "EvU12",
      event: "Cancer awareness walk",
      time: "09:00 AM",
      location: "Colombo City Hall, Colombo",
      date: "2024/09/11",
    },
    {
      id: "EvU13",
      event: "Cancer awareness walk",
      time: "09:00 AM",
      location: "Colombo City Hall, Colombo",
      date: "2024/09/11",
    },
  ];
  return (
    <div className="py-8">
      <TitleBar title={`Events | ${title}`} />
      <MainSection>
        <Table data={title.toLowerCase() === "admin" ? adminData : userData} />
      </MainSection>
    </div>
  );
};

export default EventTablePage;
