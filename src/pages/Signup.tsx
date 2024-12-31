import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import authServices from "@/services/appwrite/authServices";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "@/features/auth/authSlice";

type SignupFormData = {
  name: string;
  email: string;
  password: string;
};

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>();

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: SignupFormData) => {
    setLoading(true)
    try {
      const { name, email, password } = data;
      const userData = await authServices.createAccount(email, password, name)

      if (userData) {
        setLoading(false)
        alert("Account created successfully!")
        const userData = await authServices.getCurrentUser();
        if (userData) {
          dispatch(login(userData))
          navigate('/')
        }
      }
    } catch (error) {
      console.error("Signup failed: ", error);
      alert(error)
      setLoading(false)
      throw error;
    }
  };

  return (
    <div className="flex items-center flex-col">
      <div className="w-full max-w-sm bg-card border p-6 rounded-lg shadow">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h2 className="font-semibold text-xl">Create an account</h2>
            <p className="text-muted-foreground text-sm">
              Let's start this beautiful journey
            </p>
          </div>
          <div className="mb-4">
            <Label htmlFor="name">Name:</Label>
            <Input
              type="text"
              id="name"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",
                minLength: {value: 3, message: "Name must be at least 3 characters"},
                maxLength: {value: 50, message: "Name must not exceed 50 characters"},
              })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  // regex
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-6">
            <Label htmlFor="password">Password:</Label>
            <Input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {value: 8, message: "Password must be at least 8 characters"},
                maxLength: {value: 30, message: "Password must not exceed 30 characters"},
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button type="submit" size="lg" className="w-full">
            {loading ? "Creating..." : "Create account"}
          </Button>
        </form>
        <div className="mt-4">
          <p className="text-center text-sm text-muted-foreground">Already have an account? <Link to="/login" className="text-primary hover:underline">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
