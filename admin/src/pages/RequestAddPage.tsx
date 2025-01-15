import React from "react";
import { useParams } from "react-router-dom";
import TitleBar from "../components/TitleBar";
import MainSection from "../components/MainSection";
import Button from "../components/HopeButton";

interface RequestAddPageProps {
  title: string;
}

const RequestAddPage: React.FC<RequestAddPageProps> = ({ title }) => {
  const { id } = useParams();
  return (
    <div className="py-8">
      <TitleBar title={`${title} | ${id} | Add`} />
      <MainSection>
        <div className="flex w-full h-full px-16 gap-8">
          <section className="w-[40%] h-full">
            <div className="relative w-full aspect-square border-2 border-gray-300 rounded-md">
              <img
                src="https://via.placeholder.com/300"
                alt="Preview"
                className="object-cover w-full h-full rounded-md"
              />
              {/* <div className="absolute top-2 right-2 flex gap-2"> */}
              {/*   <button className="bg-gray-600 text-white p-1 rounded"> */}
              {/*     Edit */}
              {/*   </button> */}
              {/*   <button className="bg-green-600 text-white p-1 rounded"> */}
              {/*     ✔ */}
              {/*   </button> */}
              {/*   <button className="bg-red-600 text-white p-1 rounded"> */}
              {/*     ✖ */}
              {/*   </button> */}
              {/* </div> */}
            </div>
            {title === "Events" ? (
              <>
                <div className="mt-4">
                  <label className="block text-main font-[700] mb-1">
                    Place
                  </label>
                  <div className="w-full border-gray-300 rounded p-2"></div>
                </div>
                <div className="mt-4">
                  <label className="block text-main font-[700] mb-1">
                    Time
                  </label>
                  <div className="w-full border-gray-300 rounded p-2" />
                </div>
                <div className="mt-4">
                  <label className="block text-main font-[700] mb-1">
                    Date
                  </label>
                  <div className="w-full border-gray-300 rounded p-2" />
                </div>
              </>
            ) : (
              <>
                <div className="mt-4">
                  <label className="block text-main font-[700] mb-1">
                    Donation Type
                  </label>
                  <select className="w-full border-gray-300 rounded p-2">
                    <option>Monthly</option>
                    <option>One-Time</option>
                  </select>
                </div>
                <div className="mt-4">
                  <label className="block text-main font-[700] mb-1">
                    Donation Amount
                  </label>
                  <input
                    type="text"
                    value="Rs. 25 000/="
                    className="w-full border-gray-300 rounded p-2"
                  />
                </div>
                <div className="mt-4">
                  <input
                    type="date"
                    className="w-full border-gray-300 rounded p-2"
                  />
                </div>
              </>
            )}
          </section>

          <section className="w-[60%] h-full p-4 rounded-md shadow-md">
            <div className="mb-4">
              <label className="block text-main font-[700] mb-1">Title</label>
              <input
                type="text"
                name="title"
                className="w-full border-gray-300 rounded p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-main font-[700] mb-1">
                Description
              </label>
              <textarea
                name="description"
                rows={6}
                className="w-full border-gray-300 rounded p-2 resize-none"
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-main font-[700] mb-1">Needs</label>
              <textarea
                name="needs"
                rows={3}
                className="w-full border-gray-300 rounded p-2 resize-none"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button text="Submit" className="w-[30%]" />
            </div>
          </section>
        </div>
      </MainSection>
    </div>
  );
};

export default RequestAddPage;
