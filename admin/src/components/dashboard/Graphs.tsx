import ProgressCircle from "../charts/ProgressCircle";
import GrowthChart from "../charts/GrowthChart";
import MiniStat from "../charts/MiniStats";

const Graphs: React.FC = () => {
  return (
    <>
      <div
        className="w-full p-5 bg-bgblue grid gap-6 rounded-lg 
                      grid-cols0 sm:grid-cols-2 lg:grid-cols-3"
      >
        <GrowthChart title="Patient Profile Growth - 2025" />
        <div className="space-y-3">
          <MiniStat
            label="Visitors this month"
            value="2,235"
            trend="3%"
            isPositive={true}
          />
          <MiniStat
            label="Visitors this month"
            value="457"
            trend="4%"
            isPositive={false}
          />
        </div>
        <GrowthChart title="Donor Profile Growth - 2025" />
      </div>

      <div
        className="w-full p-5 bg-bgblue grid gap-6 rounded-lg 
                      grid-cols0 sm:grid-cols-2 lg:grid-cols-3 mt-6"
      >
        <ProgressCircle
          percentage={73}
          label="Donation Goal"
          total="Rs 503K"
          remaining="Rs 15K"
        />
        <ProgressCircle
          percentage={81}
          label="Yearly Income"
          total="Rs 55,000.00"
          remaining="-"
        />
        <ProgressCircle
          percentage={61}
          label="Volunteers"
          total="2,375"
          remaining="-"
        />
      </div>
    </>
  );
};

export default Graphs;
