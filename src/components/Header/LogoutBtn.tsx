import { User } from "lucide-react"
import { Button } from "../ui/button"
import { useDispatch, useSelector } from "react-redux"
import authServices from "@/services/appwrite/authServices"
import { logout } from "@/features/auth/authSlice"
import { toast } from "sonner"

const LogoutBtn = () => {

    const userData = useSelector((state: any) => state.auth.userData)
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authServices.logoutUser()
        .then(() => (
            dispatch(logout()),
            toast.success("Logout successfully!")
        ))
        .catch((err) => (
          console.error(err),
          toast.error("Failed to logout")
        ))
    }

  return (
    <div className="flex items-center gap-2">
        <p className="flex items-center p-1 pr-3 rounded hover:bg-neutral-100"><User height={16} /> {userData.name}</p>
        <Button variant="outline" onClick={logoutHandler}>Logout</Button>
    </div>
  )
}

export default LogoutBtn