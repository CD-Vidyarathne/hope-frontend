import ProgressCircle from "../charts/ProgressCircle";
import GrowthChart from "../charts/GrowthChart";
import MiniStat from "../charts/MiniStats";

function Graphs() {
  return (
    <>
      <div
        className="w-full p-6 bg-bgblue grid gap-6 rounded-lg 
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        <GrowthChart title="Patient Profile Growth - 2024" />
        <div className="space-y-4">
          <MiniStat
            label="Visitors this month"
            value="1,235"
            trend="2%"
            isPositive={true}
          />
          <MiniStat
            label="Visitors this month"
            value="456"
            trend="3%"
            isPositive={false}
          />
        </div>
        <GrowthChart title="Donor Profile Growth - 2024" />
      </div>

      <div
        className="w-full p-6 bg-bgblue grid gap-6 rounded-lg 
                      grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6"
      >
        <ProgressCircle
          percentage={72}
          label="Donation Goal"
          total="Rs 502K"
          remaining="Rs 14K"
        />
        <ProgressCircle
          percentage={80}
          label="Yearly Income"
          total="Rs 54,000.00"
          remaining="-"
        />
        <ProgressCircle
          percentage={60}
          label="Volunteers"
          total="1,375"
          remaining="-"
        />
      </div>
    </>
  );
}

export default Graphs;
