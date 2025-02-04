import { Button } from "antd";
import BSForm from "../../components/form/BSForm";
import BSInput from "../../components/form/BSInput";
import BSPassword from "../../components/form/BSPassword";
import { useRegistrationMutation } from "../../redux/features/auth/authApi";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";


const Register = () => {

  const navigate = useNavigate();

  const [register] = useRegistrationMutation();
  const onSubmit = async(data: FieldValues) => {
    const regData = {
      name: data?.name,
      email: data?.email,
      password: data?.password
    }

    const regId = toast.loading('Register in...');
    
    try {
      const res = await register(regData);
      console.log("this is res = ", res)
      if(res?.error) {
        toast.error("Try Again...", { id: regId, duration: 2000 });
      }
      else {

        toast.success("Registration Done!", { id: regId, duration: 2000 });
        navigate('/login');
      }
      
    } catch (err) {
      toast.error("Something went wrong.", { id: regId, duration: 2000 });
      console.log(err);
    }
  }
  return (
    <div className="max-w-md mx-auto flex flex-col justify-center min-h-screen p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold text-center mb-6 text-gray-600">Register</h1>

        <BSForm onSubmit={onSubmit} >
          <BSInput
            name="name"
            label="Name"
            type="text"
            rules={{
              required: "Name is required", 
            }}
          />
          <BSInput
            name="email"
            label="Email"
            type="email"
            rules={{
              required: "Email is required", 
              pattern: { value: /^\S+@\S+$/, message: "Invalid email" }
            }}
          />
          <BSPassword
            name="password"
            label="Password"
            type="password"
            rules={{
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters" }, // Minimum length for Password
            }}
          />
          <div className="flex justify-end">
            <Button
              htmlType="submit"
              type="primary"
              className=" "
            >
              Submit
            </Button>
          </div>
        </BSForm>
      </div>
    </div>
  );
};

export default Register;