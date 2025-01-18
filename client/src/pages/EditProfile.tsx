import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { EmptyProf } from "../assets";

const EditProfile = () => {
  const { user } = useAuth();

  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setProfilePic(file);
    }
  };

  const handleSaveChanges = () => {
    // Handle save logic here
    console.log("Profile picture:", profilePic);
    console.log("Address:", address);
    console.log("Contact Number:", contactNumber);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Profile Picture
        </label>
        <div className="flex items-center space-x-4">
          <img
            src={user?.profilePicURL || EmptyProf}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border border-gray-300"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Contact Number
        </label>
        <input
          type="text"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <button
        onClick={handleSaveChanges}
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600"
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditProfile;
