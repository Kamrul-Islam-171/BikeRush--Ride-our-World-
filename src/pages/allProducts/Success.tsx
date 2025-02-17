import { Button, Card, Typography } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Success = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-green-50 p-4">
            <Card className="shadow-lg rounded-lg text-center max-w-md w-full">
                <CheckCircleOutlined className="text-green-500 text-6xl animate-bounce" />
                <Title level={2} className="mt-4">Payment Successful!</Title>
                <Text type="secondary">
                    Thank you for your purchase. Your payment was processed successfully.
                </Text>
                <div className="mt-6">
                    <Button type="primary" size="large" href="/" className="bg-green-600 hover:bg-green-700">
                        Go to Homepage
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default Success;
