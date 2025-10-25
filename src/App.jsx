
import { Routes, Route  } from "react-router-dom"
import Login from "./pages/Auth/Login"
import Signup from "./pages/Auth/Signup"
import { LandingPage } from "./pages/Landing/LandingPage"

function App() {

  return (
    <Routes>
      <Route path ="/" element={<LandingPage/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/signup" element={<Signup/>}/>
    </Routes>
    
  )
}

export default App
