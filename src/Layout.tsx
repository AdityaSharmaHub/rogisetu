import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"

function Layout() {
  return (
    <>
      <Header />
      <main className="p-12">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout