import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const VolunteeringActivities = () => {
  const donations = [
    {
      date: "2023-12-01",
      beneficiary: "John Doe",
      cause: "Education",
      amount: 100,
    },
    {
      date: "2023-11-15",
      beneficiary: "Jane Smith",
      cause: "Healthcare",
      amount: 150,
    },
  ];

  const upcomingDates = ["2025-01-10", "2025-02-15", "2025-03-20"];

  const isUpcomingDate = (date: Date) => {
    return upcomingDates.includes(date.toISOString().split("T")[0]);
  };

  const tileClassName = ({ date }: { date: Date }) => {
    return isUpcomingDate(date) ? "highlight" : "";
  };

  return (
    <div className="w-full h-full">
      <h2 className="text-xl text-center font-bold mt-8">
        Volunteering Activities
      </h2>
      <div className="p-4 h-full grid grid-cols-[3fr,1fr] gap-8">
        <div className="overflow-y-auto bg-wblue p-4 rounded-lg shadow-md">
          {donations.map((donation, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-md mb-4 shadow-lg relative"
            >
              <div className="absolute top-2 right-2 text-sm text-gray-600">
                {donation.date}
              </div>
              <p>
                <strong>Program:</strong> {donation.beneficiary}
              </p>
              <p className="text-gray-500 text-sm">Cause: {donation.cause}</p>
              <p className="text-gray-500 text-sm">
                Amount Given: {donation.amount} LKR
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center flex items-center justify-center flex-col">
          <h2 className="text-xl font-bold mb-4">
            Upcoming Volunteering Programs
          </h2>
          <Calendar tileClassName={tileClassName} />
        </div>

        <style>{`
          .highlight {
            background: #1d72b8;
            color: white;
            border-radius: 100%;
          }
        `}</style>
      </div>
    </div>
  );
};

export default VolunteeringActivities;
