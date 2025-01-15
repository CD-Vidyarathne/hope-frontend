import React from "react";
import TitleBar from "../components/TitleBar";
import MainSection from "../components/MainSection";
import Table from "../components/Table";

interface RequestTablePageProps {
  title: string;
}

const RequestTablePage: React.FC<RequestTablePageProps> = ({ title }) => {
  const data = [
    {
      id: "A101",
      name: "Anuradha Harischandra",
      nic: "19875485672",
      age: 36,
      reason: "Leukemia",
      amount: "Rs 25,000",
      date: "2024/09/11",
    },
    {
      id: "A102",
      name: "Amila Ranasinghe",
      nic: "19705485672",
      age: 54,
      reason: "Thyroid",
      amount: "Rs 100,000",
      date: "2024/09/13",
    },
    {
      id: "A103",
      name: "Sanath Gamage",
      nic: "19585485672",
      age: 63,
      reason: "Stroke",
      amount: "Rs 1,000,000",
      date: "2024/09/15",
    },
    {
      id: "A104",
      name: "Forid Muhhamad",
      nic: "19895485672",
      age: 35,
      reason: "Obesity",
      amount: "Rs 400,000",
      date: "2024/09/15",
    },
    {
      id: "A107",
      name: "Renuka Priyadarshani",
      nic: "19985485672",
      age: 26,
      reason: "Liver Transplant",
      amount: "Rs 100,000",
      date: "2024/09/16",
    },
    {
      id: "A111",
      name: "Somapala Bandara",
      nic: "19835485672",
      age: 41,
      reason: "Chronic",
      amount: "Rs 70,000",
      date: "2024/09/16",
    },
    {
      id: "A101",
      name: "Anuradha Harischandra",
      nic: "19875485672",
      age: 36,
      reason: "Leukemia",
      amount: "Rs 25,000",
      date: "2024/09/11",
    },
    {
      id: "A102",
      name: "Amila Ranasinghe",
      nic: "19705485672",
      age: 54,
      reason: "Thyroid",
      amount: "Rs 100,000",
      date: "2024/09/13",
    },
    {
      id: "A103",
      name: "Sanath Gamage",
      nic: "19585485672",
      age: 63,
      reason: "Stroke",
      amount: "Rs 1,000,000",
      date: "2024/09/15",
    },
    {
      id: "A104",
      name: "Forid Muhhamad",
      nic: "19895485672",
      age: 35,
      reason: "Obesity",
      amount: "Rs 400,000",
      date: "2024/09/15",
    },
    {
      id: "A107",
      name: "Renuka Priyadarshani",
      nic: "19985485672",
      age: 26,
      reason: "Liver Transplant",
      amount: "Rs 100,000",
      date: "2024/09/16",
    },
    {
      id: "A111",
      name: "Somapala Bandara",
      nic: "19835485672",
      age: 41,
      reason: "Chronic",
      amount: "Rs 70,000",
      date: "2024/09/16",
    },
  ];
  return (
    <div className="py-8">
      <TitleBar title={`Requests | ${title}`} />
      <MainSection>
        <Table data={data} />
      </MainSection>
    </div>
  );
};

export default RequestTablePage;
