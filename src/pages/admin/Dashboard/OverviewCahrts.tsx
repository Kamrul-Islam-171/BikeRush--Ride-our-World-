import { Card, Tooltip } from "antd";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";

const OverviewCahrts = () => {
  const data = [
    { name: "January", sales: 4000 },
    { name: "February", sales: 3000 },
    { name: "March", sales: 5000 },
    { name: "April", sales: 2000 },
    { name: "May", sales: 2780 },
  ];
  return (
    <div>
      <Card title="Sales Trends" bordered={false}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </Card>
    </div>
  );
};

export default OverviewCahrts;
