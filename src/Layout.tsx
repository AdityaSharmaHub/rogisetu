import { Outlet } from "react-router-dom"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { Toaster } from "./components/ui/sonner"

function Layout() {
  return (
    <>
      <Header />
      <main className="p-12">
        <Outlet />
      </main>
      <Toaster richColors theme="light" />
      <Footer />
    </>
  )
}

export default Layout