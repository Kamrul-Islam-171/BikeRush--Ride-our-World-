import { useLocation } from "react-router-dom";
import { Form, Input, Button, Card } from "antd";
import { useCreatePaymentMutation } from "../../redux/features/products/product.api";
import { toast } from "sonner";

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
}

const CheckOut: React.FC = () => {
  const location = useLocation();
  const product: Product | undefined = location.state?.product;
  const [createPayment] = useCreatePaymentMutation();

  const defaultValues = {
    name: "Kamal", 
    email: "kamal@gmail.com", 
    address: "123 Main Street, City, Country", 
  }

  if (!product) {
    return (
      <p className="text-center text-red-500 text-lg mt-10">
        No product selected for checkout.
      </p>
    );
  }

  const { id, name, image, price } = product;

  const onFinish = async(values: any) => {
    const toastId = toast.loading('Please wait...');
    try {
    //   console.log("Order placed:", { ...values, productId: id });
      const orderInfo = {
        ...values,
        productId: id,
      };
      const res = await createPayment(orderInfo);
      const paymentUrl = res?.data?.data?.paymentUrl
      // console.log(res);
      console.log(paymentUrl);
      if(paymentUrl) {
        window.location.replace(paymentUrl)
      }
      toast.success('Order Placed', {id: toastId, duration: 2000});
    } catch (err) {
        console.log(err);
        toast.error('Someting went wrong!', {id: toastId, duration: 2000})
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-10 p-4 flex flex-col justify-center h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="shadow-xl rounded-2xl bg-white">
          <div className="flex flex-col items-center text-center">
            <img
              src={image}
              alt={name}
              className="w-48 h-48 object-cover rounded-xl shadow-md border"
            />
            <h2 className="text-3xl font-semibold text-indigo-600 mt-4">
              {name}
            </h2>
            <p className="text-lg text-gray-600 mt-2">
              Price: <span className="text-indigo-500 font-bold">${price}</span>
            </p>
          </div>
        </Card>

        <Card className="shadow-xl rounded-2xl bg-white">
          <h2 className="text-2xl font-semibold text-indigo-600 mb-6 text-center">
            Shipping Information
          </h2>
          <Form layout="vertical" onFinish={onFinish} className="space-y-4" initialValues={defaultValues}>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                { required: true, message: "Please enter your full name" },
              ]}
            >
              <Input
                size="large"
                placeholder="Enter your full name"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Enter a valid email" },
              ]}
            >
              <Input
                type="email"
                size="large"
                placeholder="Enter your email"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: "Please enter your address" }]}
            >
              <Input.TextArea
                rows={3}
                placeholder="Enter your shipping address"
                className="rounded-lg"
              />
            </Form.Item>

            <Form.Item className="text-center">
              <Button
                // type="primary"
                htmlType="submit"
                size="large"
                className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium shadow-md rounded-lg"
              >
                Place Order
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default CheckOut;
