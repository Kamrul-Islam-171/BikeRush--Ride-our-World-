import { Card, Button, Modal, Form, Input } from "antd";
import { Navigate } from "react-router-dom";
import Loading from "../../components/loading/Loading";
import { selectCurrenttoken } from "../../redux/features/auth/AuthSlice";
import { useChangePasswordMutation, useGetSingleCustomerQuery } from "../../redux/features/customers/customer.api";
import { useAppSelector } from "../../redux/features/hook";
import { VerifyToken } from "../../utils/verifyToken";
import { useState } from "react";
import { toast } from "sonner";

const CustomerProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const token = useAppSelector(selectCurrenttoken);
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  const user = VerifyToken(token) as {
    email: string;
    name: string;
    role: string;
  } | null;
  if (!user || !user.email) {
    return <Navigate to="/login" replace />;
  }

  const { data: Profile, isFetching } = useGetSingleCustomerQuery(user.email);
  const [changePassword] = useChangePasswordMutation();
  const ProfileInfo = Profile?.data;

  if (isFetching) {
    return <Loading />;
  }

  const handlePasswordChange = async(values: {
    currentPassword: string;
    newPassword: string;
  }) => {
    const toastId = toast.loading('Please Wait....');
    try {
      const data = {
        oldPassword: values.currentPassword,
        newPassword : values.newPassword
      }
      const res = await changePassword(data);
      // console.log(res)
      if(res?.data) {
        toast.success(res?.data?.message, {id: toastId, duration: 2000})
      }
      else {
        toast.error("Somethin Went Wrong!", {id: toastId, duration: 2000})
      }
    } catch (err) {
      toast.error("Somethin Went Wrong!", {id: toastId, duration: 2000})
    }
    
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-lg rounded-xl text-center p-6">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Profile"
          className="w-24 h-24 mx-auto rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold">{ProfileInfo?.name || user.name}</h2>
        <p className="text-gray-500">{ProfileInfo?.email || user.email}</p>
        <p className="text-gray-600 font-medium mt-2">
          {ProfileInfo?.role || user.role}
        </p>
        {/* <Button type="primary" className="mt-4">Edit Profile</Button> */}
        <Button
          className="flex-1 mt-2 items-center gap-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white font-medium shadow-md"
          onClick={() => setIsModalOpen(true)}
        >
          Change Password
        </Button>
      </Card>

      <Modal
        title="Change Password"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
      >
        <Form form={form} layout="vertical" onFinish={handlePasswordChange}>
          <Form.Item
            label="Current Password"
            name="currentPassword"
            rules={[
              {
                required: true,
                message: "Please enter your current password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="New Password"
            name="newPassword"
            rules={[
              { required: true, message: "Please enter a new password!" },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Button  htmlType="submit" className="w-full mt-2 flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium shadow-md">
            Update Password
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default CustomerProfile;
