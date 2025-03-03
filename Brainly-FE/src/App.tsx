import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import LandingPage from "./pages/Landing";

function App(){
  return(
    <BrowserRouter >
      <Routes >
        <Route path="/signin" element={<Signin />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/" element={<LandingPage />}/>

      </Routes>
    </BrowserRouter>
  )
}
export default App;