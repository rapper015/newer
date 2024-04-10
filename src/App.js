import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";
import './App.css';
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Applicant from "./components/Applicant";
import RegisterPage2 from "./components/Register2";
import SubmitApplicant from "./components/SubmitApplicant";
import CheckStatusPage from "./components/CheckStatus";
import YourDataPage from "./components/YourData";

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/register2" element={<RegisterPage2/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/applicant" element={<Applicant/>} />
      <Route path="/submitapplicant" element={<SubmitApplicant/>} />
      <Route path="/checkstatus" element={<CheckStatusPage/>} />
      <Route path="/yourdata" element={<YourDataPage/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
