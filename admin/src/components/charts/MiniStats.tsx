import { FaArrowUp, FaArrowDown } from "react-icons/fa";

interface MiniStatProps {
  label: string;
  value: string;
  trend: string;
  isPositive: boolean;
}

function MiniStat({ label, value, trend, isPositive }: MiniStatProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4 w-[100%]">
      <div className="flex flex-col">
        <span className="text-lg font-bold">{value}</span>
        <span className="text-gray-500 text-sm">{label}</span>
      </div>
      <div
        className={`flex items-center text-sm ${
          isPositive ? "text-green-500" : "text-red-500"
        }`}
      >
        {isPositive ? <FaArrowUp /> : <FaArrowDown />}
        <span className="ml-1">{trend}</span>
      </div>
    </div>
  );
}

export default MiniStat;
