import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import authServices from "@/services/appwrite/authServices"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { login } from "../features/auth/authSlice"
import { useState } from "react"

type LoginFormData = {
  email: string;
  password: string;
}

const Login: React.FC = () => {

  const { register, handleSubmit, formState: {errors} } = useForm<LoginFormData>()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data:LoginFormData) => {
    setLoading(true)
    try {
      const {email, password} = data;
      const session = await authServices.loginUser(email, password)
      if(session) {
        const userData = await authServices.getCurrentUser()
        if(userData) {
          dispatch(login(userData))
          setLoading(false)
          alert("Logged in successully!")
          navigate("/")
        }
      }
    } catch (error) {
      console.error("Login failed: ", error);
      alert(error)
      setLoading(false)
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
                required: "Email is required",
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
                required: "Password is required",
                minLength: {value: 8, message: "Password must be at least 8 characters"}
              })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
          <Button type="submit" size="lg" className="w-full">
            {loading ? "Loading..." : "Login"}
          </Button>
        </form>
        <div className="mt-4">
          <p className="text-center text-sm text-muted-foreground">Don't have an account? <Link to="/signup" className="text-primary hover:underline">Create one</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login