import Home from "./Components/Home";
import { Routes,Route } from "react-router-dom";
import Register from "./Components/Register";
import LoginSignup from "./Components/LoginSignup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
