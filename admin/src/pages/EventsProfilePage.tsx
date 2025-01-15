import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import TitleBar from "../components/TitleBar";
import MainSection from "../components/MainSection";
import Button from "../components/HopeButton";

interface InfoRowProps {
  field: string;
  value: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ field, value }) => {
  return (
    <div className="bg-white text-main flex gap-3 text-left p-2 pl-6 rounded-full w-full">
      <div className="w-[33%] font-[700]">{field.toUpperCase()}</div>
      <div className="w-[64%]">{value}</div>
    </div>
  );
};

interface EventsProfilePageProps {
  title: string;
}

const EventsProfilePage: React.FC<EventsProfilePageProps> = ({ title }) => {
  const data = {
    id: "A111",
    name: "Somapala Bandara",
    nic: "19835485672V",
    age: 41,
    reason: "Chronic",
    amount: "Rs 70,000",
    date: "2024/09/16",
  };

  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <div className="py-8">
      <TitleBar title={`${title} | ${id!}`} />
      <MainSection>
        <div className="flex w-full h-full py-8 px-16">
          <section className="w-[40%] h-full border border-black flex flex-col">
            <div className="w-full aspect-square"></div>
            <div className="w-full aspect-square"></div>
          </section>
          <section className="w-[60%] h-full p-4 flex flex-col items-center justify-between">
            {Object.keys(data).map((key) => (
              <InfoRow key={key} field={key} value={data[key]} />
            ))}
            <div className="flex gap-4 w-full items-center justify-between">
              <Button
                text="Add"
                className="p-8 text-xl min-w-[25%]"
                onClick={() => navigate("add")}
              />
              <Button text="Reject" className="p-8 text-xl min-w-[25%]" />
              <Button
                text="Request Further Details"
                className="p-8 text-xl min-w-[25%]"
              />
            </div>
          </section>
        </div>
      </MainSection>
    </div>
  );
};

export default EventsProfilePage;
