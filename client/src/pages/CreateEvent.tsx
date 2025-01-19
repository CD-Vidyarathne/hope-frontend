import DatePicker from "react-datepicker";
import HopeButton from "../components/HopeButton";
import { useState } from "react";
const CreateEvent = () => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("File Change", e);
  };
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="p-8 w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold italic mb-2 w-full text-center">
        Let's Get Started
      </h1>
      <p className="mb-6 w-full text-center">
        Lend a hand and touch a life. Your volunteer work can create lasting
        positive change.
      </p>
      <div className="flex w-[70%] gap-8 items-center justify-center h-full">
        <div className="max-w-[50%] flex flex-col h-full items-start justify-start flex-grow border shadow-lg p-8 rounded-lg">
          <div className="mb-6 w-full">
            <label className="block text-lg font-semibold mb-2">
              Event Cover Photo
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 mb-6 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-wblue file:text-dblue hover:file:bg-blue-100 cursor-pointer"
            />
          </div>
          <div className="mb-6 w-full">
            <label className="block text-lg font-semibold mb-2">
              Name of Event
            </label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md w-full bg-wblue"
            />
          </div>

          <div className="mb-6 w-full">
            <label className="block text-lg font-semibold mb-2">Purpose</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md w-full bg-wblue"
            />
          </div>

          <div className="mb-6 w-full">
            <label className="block text-lg font-semibold mb-2">Place</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md w-full bg-wblue"
            />
          </div>

          <div className="mb-6 w-full">
            <label className="block text-lg font-semibold mb-2">Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => setSelectedDate(date)}
              minDate={new Date()}
              className="p-2 border border-gray-300 rounded-md bg-wblue w-full"
            />
          </div>
          <div className="mb-6 w-full">
            <label className="block text-lg font-semibold mb-2">Time</label>
            <input
              type="time"
              className="p-2 border border-gray-300 rounded-md w-full bg-wblue"
            />
          </div>
        </div>

        <div className="max-w-[50%] flex flex-col h-full items-start justify-start flex-grow border shadow-lg p-8 rounded-lg">
          <div className="mb-6 w-full">
            <label className="block text-lg font-semibold mb-2">
              Comittee Members Emails
            </label>
            <input
              type="email"
              className="p-2 mb-2 border border-gray-300 rounded-md w-full bg-wblue"
            />
            <input
              type="email"
              className="p-2 mb-2 border border-gray-300 rounded-md w-full bg-wblue"
            />
            <input
              type="email"
              className="p-2 mb-2 border border-gray-300 rounded-md w-full bg-wblue"
            />
          </div>
          <div className="mb-6 w-full">
            <label className="block text-lg font-semibold mb-2">
              Number of Participants expecting
            </label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-md w-full bg-wblue"
              min={1}
              max={100}
            />
          </div>
          <HopeButton text="Request" className="w-3/4 self-center mt-6 mb-2" />
          <p className="text-xs font-bold text-center w-full">
            {" "}
            Hope team will contact you shortly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
