
import { useLocation } from "react-router-dom";
import { Form, Input, Button, Card, Select } from "antd";
import { useCreatePaymentMutation } from "../../redux/features/products/product.api";
import { toast } from "sonner";
import { useState } from "react";
import { useAppSelector } from "../../redux/features/hook";
import { selectCurrenttoken } from "../../redux/features/auth/AuthSlice";
import { VerifyToken } from "../../utils/verifyToken";
import { JwtPayload } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
  email: string;
}

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
  const [totalPrice, setTotalPrice] = useState(product?.price);
  const [form] = Form.useForm();

  let user : CustomJwtPayload | null = null;
  const token = useAppSelector(selectCurrenttoken);
  if(token) {
    user = VerifyToken(token) as CustomJwtPayload;
  }
  
  
  const defaultValues = {
    name: "Kamal",
    email: user?.email,
    address: "123 Main Street, City, Country",
    paymentMethod: "USD",
    totalPrice: totalPrice,
  };
  
  if (!product) {
    return (
      <p className="text-center text-red-500 text-lg mt-10">
        No product selected for checkout.
      </p>
    );
  }

  const { id, name, image, price } = product;

   const onFinish = async(values: any) => {
    //  console.log("Order placed:", { ...values, productId: id });
    const toastId = toast.loading('Please wait...');
    try {
      const orderInfo = {
        ...values,
        totalPrice:Number(values.totalPrice), 
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

  const handleSelect = (value: string) => {
    console.log(value);
    if (value === "BDT") {
      const priceInBDT:number = parseInt((product?.price * 83.18).toString());
      setTotalPrice(priceInBDT);
      form.setFieldsValue({ totalPrice: priceInBDT });
    } else {
      setTotalPrice(product?.price);
      form.setFieldsValue({ totalPrice: product?.price });
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
          <Form
            layout="vertical"
            onFinish={onFinish}
            className="space-y-4"
            initialValues={defaultValues}
            form={form}
          >
            <Form.Item label="Full Name" name="name" rules={[{ required: true, message: "Please enter your full name" }]}>
              <Input size="large" placeholder="Enter your full name" className="rounded-lg" />
            </Form.Item>

            <Form.Item label="Email" name="email"  rules={[{ required: true, message: "Please enter your email" }, { type: "email", message: "Enter a valid email" }]}>
              <Input disabled type="email" size="large"  placeholder="Enter your email" className="rounded-lg" />
            </Form.Item>

            <Form.Item label="Address" name="address" rules={[{ required: true, message: "Please enter your address" }]}>
              <Input.TextArea rows={3} placeholder="Enter your shipping address" className="rounded-lg" />
            </Form.Item>

            <Form.Item label="Total Price" name="totalPrice">
              <Input disabled className="rounded-lg" />
            </Form.Item>

            <Form.Item label="Payment Method" name="paymentMethod" rules={[{ required: true, message: "Please select a payment method" }]}>
              <Select size="large" onChange={handleSelect}>
                <Select.Option value="BDT">BDT</Select.Option>
                <Select.Option value="USD">USD</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item className="text-center">
              <Button htmlType="submit" size="large" className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium shadow-md rounded-lg">
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
