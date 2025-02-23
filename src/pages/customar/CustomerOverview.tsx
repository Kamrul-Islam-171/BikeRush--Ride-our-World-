import { Card, Col, Row, Statistic, Table } from "antd";
import { ColumnType } from "antd/es/table";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const CustomerOverview = () => {
  const orderData = [
    { name: "January", orders: 2000 },
    { name: "February", orders: 3000 },
    { name: "March", orders: 2500 },
    { name: "April", orders: 4000 },
    { name: "May", orders: 3500 },
  ];

  const productData = [
    { key: 1, product: "Mountain Bike", price: 200, available: "In Stock" },
    { key: 2, product: "Electric Bike", price: 500, available: "Out of Stock" },
    { key: 3, product: "Road Bike", price: 150, available: "In Stock" },
  ];

  const columns: ColumnType<{
    key: number;
    product: string;
    price: number;
    available: string;
  }>[] = [
    { title: "Product", dataIndex: "product", key: "product" },
    { title: "Price", dataIndex: "price", key: "price" },
    {
      title: "Availability",
      dataIndex: "available",
      key: "available",
      responsive: ["sm", "md", "lg"],
    },
  ];

  return (
    <div className="max-w-full p-6 space-y-6">
      <Row gutter={[16, 16]} justify="space-between">
        <Col xs={24} sm={12} lg={8}>
          <Card bordered={false}>
            <Statistic title="Total Orders" value={45} />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card bordered={false}>
            <Statistic title="Pending Orders" value={2} />
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card bordered={false}>
            <Statistic title="Completed Orders" value={42} />
          </Card>
        </Col>
      </Row>

      <Card title="Order Trends" bordered={false}>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={orderData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="orders" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      <Card title="Available Products" bordered={false}>
        <Table columns={columns} dataSource={productData} pagination={false} />
      </Card>
    </div>
  );
};

export default CustomerOverview;
