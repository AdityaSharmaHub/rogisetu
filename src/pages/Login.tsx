import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import authServices from "@/services/appwrite/authServices"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../features/auth/authSlice"

type LoginFormData = {
  email: string;
  password: string;
}

const Login: React.FC = () => {

  const { register, handleSubmit, formState: {errors} } = useForm<LoginFormData>()

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onSubmit = async (data:LoginFormData) => {
    try {
      const {email, password} = data;
      const session = await authServices.loginUser(email, password)
      if(session) {
        const userData = await authServices.getCurrentUser()
        if(userData) {
          dispatch(login(userData))
          alert("Logged in successully!")
          navigate("/")
        }
      }
    } catch (error) {
      console.error("Login failed: ", error);
      throw error;
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-sm bg-card p-6 border rounded-lg shadow">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <h2 className="font-semibold text-xl">Welcome back</h2>
            <p className="text-muted-foreground text-sm">Login to access your account</p>
          </div>
          <div className="mb-4">
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
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
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button type="submit" size="lg" className="w-full">
            Login
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login