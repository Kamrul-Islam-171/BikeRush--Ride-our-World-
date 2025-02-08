import { Button } from "antd";
import BSForm from "../../components/form/BSForm";
import BSInput from "../../components/form/BSInput";
import BSPassword from "../../components/form/BSPassword";
import { useNavigate } from "react-router-dom";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { VerifyToken } from "../../utils/verifyToken";
import { setUser, TUser } from "../../redux/features/auth/AuthSlice";
import { useAppDispatch } from "../../redux/features/hook";


const Login = () => {
    const [login] = useLoginMutation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const defaultValues = {
        email: "ami@gmail.com",
        password:"asdf1234"
    }
    const onSubmit = async(data: FieldValues) => {
      const loginIn = toast.loading("Loggin in..."); 
      const logData = {
          email: data?.email,
          password: data?.password
        }
        // console.log(logData)

        try {
            const res = await login(logData).unwrap();
            // console.log("after login = ",res);
            const user = VerifyToken(res?.data?.accessToken) as TUser;
            // console.log(res)
            dispatch(setUser({user, token: res?.data?.accessToken}));
            toast.success(res?.message, {id: loginIn, duration: 2000});
            navigate('/')
        } catch (err) {
          toast.error("Something went wrong.", { id: loginIn, duration: 2000 });
          console.log(err);
        }
    
      }
    return (
        <div className="max-w-md mx-auto flex flex-col justify-center min-h-screen p-4">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-semibold text-center mb-6 text-gray-600">Login</h1>
  
          <BSForm onSubmit={onSubmit}  defaultValues={defaultValues}>
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

export default Login;