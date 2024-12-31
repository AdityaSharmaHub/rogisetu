import { Link, NavLink } from "react-router-dom"
import { Button } from "../ui/button"
import { useSelector } from "react-redux"
import LogoutBtn from "./LogoutBtn"

const Header = () => {

  const authStatus = useSelector((state: any) => state.auth.status)

  const navitems = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Signup",
      path: "/signup"
    },
  ]

  return (
    <header className="bg-background border-b border-card-background py-4 px-12 flex items-center justify-between">
      <Link to="/" className="text-xl font-medium">RogiSetu</Link>
      <nav className="flex gap-8">
        {navitems.map((item) => (
          <NavLink 
          key={item.title} 
          to={item.path}
          className={({ isActive }) => `${(isActive ? "text-primary" : "text-muted-foreground")} hover:text-secondary-foreground`}
          >{item.title}</NavLink>
        ))}
      </nav>
      <div className="flex gap-4">
        {!authStatus && (
          <Button asChild>
            <Link to="/login">Login</Link>
          </Button>
        )}
        {authStatus && (
          <LogoutBtn />
        )}
      </div>
    </header>
  )
}

export default Header