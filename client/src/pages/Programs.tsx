import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "../components/Card";

const districts = [
  "Colombo",
  "Gampaha",
  "Kalutara",
  "Kandy",
  "Matale",
  "Nuwara Eliya",
  "Galle",
  "Matara",
  "Hambantota",
  "Jaffna",
  "Kilinochchi",
  "Mannar",
  "Vavuniya",
  "Mullaitivu",
  "Batticaloa",
  "Ampara",
  "Trincomalee",
  "Kurunegala",
  "Puttalam",
  "Anuradhapura",
  "Polonnaruwa",
  "Badulla",
  "Moneragala",
  "Ratnapura",
  "Kegalle",
];

const Programs = () => {
  const samplePrograms = [];
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState("");

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDistrict(e.target.value);
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-start gap-4 mb-6">
        <h1 className="text-2xl font-bold">Filter : </h1>
        <select
          className="p-[0.6rem] border border-gray-300 rounded-md bg-wblue ml-10"
          value={selectedDistrict}
          onChange={handleDistrictChange}
        >
          <option value="">Select a District</option>
          {districts.map((district, index) => (
            <option key={index} value={district}>
              {district}
            </option>
          ))}
        </select>
        <DatePicker
          selected={selectedDate}
          onChange={(date: Date | null) => setSelectedDate(date)}
          minDate={new Date()}
          className="p-2 border border-gray-300 rounded-md bg-wblue"
          placeholderText="Select a Date"
        />
      </div>

      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
        {samplePrograms.map((program) => {
          return (
            <Card
              type="Participate"
              key={program.id}
              id={program.id}
              img={program.imageURL}
              text={program.venue}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
