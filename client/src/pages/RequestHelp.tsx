import React from "react";
import HopeButton from "../components/HopeButton";

const RequestHelp = () => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("File Change", e);
  };

  return (
    <div className="p-8 w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold italic mb-2 w-full text-center">
        HELLO
      </h1>
      <p className="mb-6 w-full text-center">
        Support is just a step away. Join us and let us walk this journey with
        you.
      </p>
      <div className="flex gap-8 items-center justify-center h-full">
        <div className="flex flex-col h-full items-start justify-center flex-grow border shadow-lg p-8 rounded-lg">
          <div className="mb-6 w-full">
            <label className="block text-lg font-semibold mb-2">Need</label>
            <select className="p-2 border border-gray-300 rounded-md w-full bg-wblue">
              <option value="patient-care">Patient Care</option>
              <option value="elder-care">Elder Care</option>
              <option value="child-care">Child Care</option>
            </select>
          </div>

          <div className="mb-6 w-full">
            <label className="block text-lg font-semibold mb-2">
              Donation Amount
            </label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-md w-full bg-wblue"
              placeholder="Enter donation amount (numbers only)"
              min={0}
              max={10000000}
            />
            <small className="text-sm text-gray-500 mt-2 block">
              Please enter the amount in whole numbers. Do not use cents.
            </small>
          </div>

          <div className="mb-6 w-full">
            <label className="block text-lg font-semibold mb-2">
              Donation Type
            </label>
            <select className="p-2 border border-gray-300 rounded-md w-full bg-wblue">
              <option value="one-time">One Time</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>
          <div className="mb-6 w-full">
            <label className="block text-lg font-semibold mb-2">
              Description About You
            </label>
            <textarea className="p-2 border border-gray-300 rounded-md w-full bg-wblue" />
          </div>
          <label className="block text-lg font-semibold mb-2">Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-wblue file:text-dblue hover:file:bg-blue-100 cursor-pointer"
          />
        </div>

        <div className="flex flex-col h-full items-start justify-center flex-grow border shadow-lg p-8 rounded-lg">
          <div className="mb-6 w-full">
            <label className="block text-lg font-semibold mb-2">
              Bank Name
            </label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md w-full bg-wblue"
            />
          </div>
          <div className="mb-6 w-full">
            <label className="block text-lg font-semibold mb-2">Branch</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md w-full bg-wblue"
            />
          </div>
          <div className="mb-6 w-full">
            <label className="block text-lg font-semibold mb-2">
              Account Holder's Name
            </label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md w-full bg-wblue"
            />
          </div>
          <div className="mb-6 w-full">
            <label className="block text-lg font-semibold mb-2">
              Account Number
            </label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-md w-full bg-wblue"
            />
          </div>
          <HopeButton text="Request" className="w-3/4 self-center mt-6 mb-2" />
          Hope team will investigate your details and contact you shortly.
          <p className="text-xs font-bold text-center w-full"></p>
        </div>
      </div>
    </div>
  );
};

export default RequestHelp;
