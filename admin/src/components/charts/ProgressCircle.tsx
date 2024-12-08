import React from "react";

interface ProgressCircleProps {
  percentage: number;
  label: string;
  total: string;
  remaining: string;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  percentage,
  label,
  total,
  remaining,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center w-[100%]">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full">
          <circle
            cx="50%"
            cy="50%"
            r="40"
            strokeWidth="8"
            className="text-gray-200"
            stroke="currentColor"
            fill="transparent"
          />
          <circle
            cx="50%"
            cy="50%"
            r="40"
            strokeWidth="8"
            className="text-blue-500"
            stroke="currentColor"
            strokeDasharray="251.2"
            strokeDashoffset={(251.2 * (100 - percentage)) / 100}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-xl font-semibold">
          {percentage}%
        </span>
      </div>
      <p className="mt-2 font-bold">{label}</p>
      <div className="flex justify-between text-gray-600 text-sm w-full mt-2">
        <span>Total: {total}</span>
        <span>Remaining: {remaining}</span>
      </div>
    </div>
  );
};

export default ProgressCircle;
