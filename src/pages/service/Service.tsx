import { Card, Col, Row } from "antd";
import {
  ToolOutlined,
  SafetyCertificateOutlined,
  ShoppingOutlined,
  ThunderboltOutlined,
  GlobalOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

const services = [
  {
    icon: <ShoppingOutlined className="text-indigo-600 text-3xl" />,
    title: "Premium Bike Collection",
    description:
      "Choose from a handpicked collection of performance, mountain, road, and electric bikes.",
  },
  {
    icon: <ToolOutlined className="text-indigo-600 text-3xl" />,
    title: "Certified Bike Servicing",
    description:
      "Ensure optimal performance with our expert repairs, tuning, and full diagnostics.",
  },
  {
    icon: <SafetyCertificateOutlined className="text-indigo-600 text-3xl" />,
    title: "Genuine Warranty Coverage",
    description:
      "Ride worry-free with manufacturer-backed warranties and dedicated service support.",
  },
  {
    icon: <ThunderboltOutlined className="text-indigo-600 text-3xl" />,
    title: "Fast Delivery Nationwide",
    description:
      "Get your bike delivered within 3–5 days anywhere across the country, safely packaged.",
  },
  {
    icon: <GlobalOutlined className="text-indigo-600 text-3xl" />,
    title: "Global Brand Partnerships",
    description:
      "We stock top international brands like Trek, Giant, Cannondale, and more.",
  },
  {
    icon: <CustomerServiceOutlined className="text-indigo-600 text-3xl" />,
    title: "24/7 Customer Support",
    description:
      "Need help? Our support team is always ready to assist via chat, email, or phone.",
  },
];

const ServiceSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-16 bg-white border-t border-gray-200">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-2">Our Services</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Experience excellence from purchase to after-sales support with our end-to-end bike services.
        </p>
        <div className="w-20 h-1 mt-4 bg-indigo-600 mx-auto rounded-full" />
      </div>

      <Row gutter={[24, 24]} justify="center">
        {services.map((service, index) => (
          <Col key={index} xs={24} sm={12} md={8}>
            <Card
              hoverable
              bordered={false}
              className="rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 h-full"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ServiceSection;
