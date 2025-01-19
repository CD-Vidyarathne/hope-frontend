import React, { useState } from "react";
import { EmptyProf } from "../assets";
import HopeButton from "../components/HopeButton";
import useAuth from "../hooks/useAuth";
import api from "../config/axios";

const EditProfile = () => {
  const { user, setUser } = useAuth();
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [profilePicURL, setProfilePicURL] = useState<string | undefined>(
    user?.profilePicURL,
  );
  const [address, setAddress] = useState(user?.address || "");
  const [contactNumber, setContactNumber] = useState(user?.contactNumber || "");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setProfilePic(file);
      setProfilePicURL(URL.createObjectURL(file));
    }
  };

  const handleSaveChanges = async () => {
    try {
      const formData = new FormData();
      if (profilePic) {
        formData.append("profilePic", profilePic);
      }
      formData.append("address", address);
      formData.append("contactNumber", contactNumber);

      const response = await api.put(`/users/${user?.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setUser({
        ...user!,
        address: response.data.address,
        contactNumber: response.data.contactNumber,
        profilePicURL: response.data.profilePicURL,
      });

      console.log("Profile updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Profile Picture
          </label>
          <div className="flex items-center space-x-4">
            <img
              src={profilePicURL || EmptyProf}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border border-gray-300"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-wblue file:text-dblue hover:file:bg-blue-100 cursor-pointer"
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
        <HopeButton text="Save Changes" onClick={handleSaveChanges} />
      </div>
    </div>
  );
};

export default EditProfile;
