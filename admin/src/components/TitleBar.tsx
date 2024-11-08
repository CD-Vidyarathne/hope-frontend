import React from "react";

interface TitleBarProps {
  title: string;
}

function TitleBar({ title }: TitleBarProps) {
  return (
    <div className=" max-w-max relative flex h-[50px] text-white font-bold">
      <div className="bg-main p-3 px-16">{title}</div>
      <div className="border border-t-[25px] border-[25px] border-l-[25px] border-l-main border-t-transparent border-b-transparent border-r-transparent"></div>
    </div>
  );
}

export default TitleBar;
