import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./Components/Navbars";
import Home from "./Components/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Details from "./Components/Details";
import Errror from "./Components/Errror";
import Change from "./Components/Change";
function App() {
  return (
    <div>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<Details />} />
        <Route path="/change" element={<Change />} />
        <Route path="*" element={<Errror />} />
      </Routes>
    </div>
  );
}

export default App;
