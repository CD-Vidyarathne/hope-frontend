import React, { useState } from "react";
import HopeButton from "../components/HopeButton";
import { Link } from "react-router-dom";

const DonationPayment = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);

  const handleDonationAmountChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const value = e.target.value.replace(/[^\d]/g, "");
    setDonationAmount(value);
  };

  const handleToggleAnonymous = () => {
    setIsAnonymous(!isAnonymous);
  };

  const handleConfirm = () => {
    console.log("Donation confirmed:", { donationAmount, isAnonymous });
  };

  return (
    <div className="p-8 w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold italic mb-2 w-full text-center">
        Your Kindness Makes an Impact
      </h1>
      <p className="mb-6 w-full text-center">
        Every contribution counts. Your kindness today is creating a better
        tomorrow for those in need.
      </p>

      <div className="flex-grow border shadow-lg p-8 rounded-lg">
        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">
            Donation Amount
          </label>
          <input
            type="text"
            value={donationAmount}
            onChange={handleDonationAmountChange}
            className="p-2 border border-gray-300 rounded-md w-full bg-wblue"
            placeholder="Enter donation amount (numbers only)"
          />
          <small className="text-sm text-gray-500 mt-2 block">
            Please enter the amount in whole numbers. Do not use cents.
          </small>
        </div>

        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            checked={isAnonymous}
            className="mr-2"
            onChange={handleToggleAnonymous}
          />
          <label className="text-sm">Donate Anonymously</label>
        </div>

        <div className="flex gap-4">
          <Link to="/donations">
            <HopeButton text="Back" />
          </Link>
          <HopeButton text="Confirm" onClick={handleConfirm} />
        </div>
      </div>
    </div>
  );
};

export default DonationPayment;
