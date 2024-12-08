import {
  FaHandHoldingHeart,
  FaUsers,
  FaUserNurse,
  FaCalendarAlt,
  FaUserFriends,
} from "react-icons/fa";

const Summary: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-bgblue p-6 rounded-lg w-full">
      <SummaryBox
        icon={<FaHandHoldingHeart />}
        title="Total Donors"
        value="2300"
      />
      <SummaryBox
        icon={<FaUserNurse />}
        title="Total Aid Seekers"
        value="1400"
      />
      <SummaryBox
        icon={<FaUserFriends />}
        title="Total Volunteers"
        value="1100"
      />
      <SummaryBox icon={<FaCalendarAlt />} title="Total Events" value="25" />
      <SummaryBox icon={<FaUsers />} title="Total Users" value="4800" />
    </div>
  );
};

export default Summary;

interface SummaryBoxProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

function SummaryBox({ icon, title, value }: SummaryBoxProps) {
  return (
    <div className="bg-main text-white flex flex-col items-center p-6 rounded-md shadow-lg">
      <div className="text-3xl mb-2">{icon}</div>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-lg font-bold mt-2">{value}</p>
    </div>
  );
}
