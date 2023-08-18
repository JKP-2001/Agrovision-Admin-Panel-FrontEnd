import Login from "./Components/Authentication/Login";
import styles from "./index.css"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useParams
} from "react-router-dom";

import Navbar from './Pages/Navbar';
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import { Toaster } from "react-hot-toast";
import LandPage from "./Components/LandingPage/LandPage";

function App() {
  return (
    <div className="">
       <Router>
        <Toaster />
            <Routes>
              <Route path="/" element={<LandPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
