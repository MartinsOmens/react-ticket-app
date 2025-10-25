
import { Routes, Route  } from "react-router-dom"
import Login from "./pages/Auth/Login"
import Signup from "./pages/Auth/Signup"
import { LandingPage } from "./pages/Landing/LandingPage"
import Dashboard from "./pages/Dashboard/DashboardPage"
import TicketsCreatePage from "./pages/Tickets/TicketCreatePage"

function App() {

  return (
    <Routes>
      <Route path ="/" element={<LandingPage/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/signup" element={<Signup/>}/>
      <Route path ="/dashboard" element={<Dashboard/>}/>
      <Route path="/tickets" element={<TicketsCreatePage />} />

    </Routes>
    
  )
}

export default App
