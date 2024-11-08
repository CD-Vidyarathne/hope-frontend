import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface GrowthChartProps {
  title: string;
}

interface DataPoint {
  name: string;
  growth: number;
}

const data: DataPoint[] = [
  { name: "Jan", growth: 50 },
  { name: "Feb", growth: 40 },
  { name: "Mar", growth: 80 },
  { name: "Apr", growth: 60 },
  { name: "May", growth: 70 },
  { name: "Jun", growth: 90 },
  { name: "Jul", growth: 85 },
];

function GrowthChart({ title }: GrowthChartProps) {
  return (
    <div className="bg-white h-[300px] px-8 pt-8 pb-16 md:pb-8 rounded-lg shadow-md w-[100%]">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="growth" fill="#3182CE" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GrowthChart;
