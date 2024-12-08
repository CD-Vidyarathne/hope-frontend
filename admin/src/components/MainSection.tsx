import React from "react";

interface MainSectionProps {
  children: React.ReactNode;
}

const MainSection: React.FC<MainSectionProps> = ({ children }) => {
  return (
    <div className="p-8 w-full ">
      <div className="flex justify-center items-center w-full h-[75vh] mx-auto bg-bgblue rounded-3xl">
        {children}
      </div>
    </div>
  );
};

export default MainSection;
