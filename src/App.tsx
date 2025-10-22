import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow scale-85">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
