import React from "react";

interface MainSectionProps {
  children: React.ReactNode;
}

const MainSection: React.FC<MainSectionProps> = ({ children }) => {
  return (
    <div className="p-8 w-full">
      <div className=" w-full h-[75vh] mx-auto bg-bgblue rounded-3xl py-8">
        <div className="overflow-y-scroll w-full h-full flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainSection;
