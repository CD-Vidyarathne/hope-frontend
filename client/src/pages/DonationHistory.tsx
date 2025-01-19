const DonationHistory = () => {
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

  const totalDonations = donations.reduce(
    (sum, donation) => sum + donation.amount,
    0,
  );
  const monthsWithHope = new Date().getMonth() + 1;

  return (
    <div className="w-full h-full">
      <h2 className="text-xl text-center font-bold mt-8">Donation History</h2>
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
                <strong>Beneficiary:</strong> {donation.beneficiary}
              </p>
              <p className="text-gray-500 text-sm">Cause: {donation.cause}</p>
              <p className="text-gray-500 text-sm">
                Amount Given: {donation.amount} LKR
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col space-y-4">
          <div className="bg-dblue text-white p-6 rounded-lg shadow-md text-center">
            <p className="text-2xl font-bold">{totalDonations} LKR</p>
            <h3 className="text-sm">Total Donations</h3>
          </div>
          <div className="bg-dblue text-white p-6 rounded-lg shadow-md text-center">
            <p className="text-2xl font-bold">{monthsWithHope}</p>
            <h3 className="text-sm ">Months with Hope</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationHistory;
