import { Button, Card, Typography } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Failed = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-red-50 p-4">
            <Card className="shadow-lg rounded-lg text-center max-w-md w-full">
                <CloseCircleOutlined className="text-red-500 text-6xl animate-bounce" />
                <Title level={2} className="mt-4">Payment Failed!</Title>
                <Text type="secondary">
                    Oops! Your payment could not be processed. Please try again or contact support.
                </Text>
                <div className="mt-6">
                    <Button type="primary" danger size="large" href="/" className="bg-red-600 hover:bg-red-700">
                        Try Again
                    </Button>
                </div>
            </Card>
        </div>
    );
};

export default Failed;
