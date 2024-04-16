import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate
} from "react-router-dom";
import './App.css';
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import Dashboard from "./components/Dashboard";
// import Home from "./components/Home";
import Applicant from "./components/Applicant";
import RegisterPage2 from "./components/Register2";
import SubmitApplicant from "./components/SubmitApplicant";
import CheckStatusPage from "./components/CheckStatus";
import YourDataPage from "./components/YourData";
import CommonPage from "./CommonPage";
import LoginTA from "./pages/TAApplicant/Login";
import RegisterTA from "./pages/TAApplicant/Register";
import LoginDS from "./pages/DepartmentStaff/Login";
import RegisterDS from "./pages/DepartmentStaff/Register";
import LoginCM from "./pages/TACommitte/Login";
import RegisterCM from "./pages/TACommitte/Register";
import LoginIN from "./pages/Instructor/Login";
import RegisterIN from "./pages/Instructor/Register";
import NavbarTA from "./pages/TAApplicant/Navbar";
import Home from './pages/TAApplicant/Home';




function App() {
  const user=localStorage.getItem('user')
  console.log(user);
  return (
    <div className="App">
    <Router>
      {!user&&<Routes>
      <Route path="/" element={<CommonPage/>} />
      {/* TA APPLICANT */}
      <Route path="/TAApplicant/login" element={<LoginTA/>}/>
      <Route path="/TAApplicant/register" element={<RegisterTA/>}/>

        {/* DEPARTMENT STAFF */}
        <Route path="/Department/login" element={<LoginDS/>}/>
        <Route path="/Department/register" element={<RegisterDS/>}/>

        {/* COMMITTE MEMBER */}
        <Route path="/TACommitte/login" element={<LoginCM/>}/>
        <Route path="/TACommitte/register" element={<RegisterCM/>}/>

        {/* INSTRUCTOR */}
        <Route path="/Instructor/login" element={<LoginIN/>}/>
        <Route path="/Instructor/register" element={<RegisterIN/>}/>
        </Routes>
        }

        {user==='taapplicant'&&
        <>
          <NavbarTA/>
          <Routes>
            <Route path="/TAApplicant/home" element={user?<Home/>:<Navigate to={'/'}/>}/>
          </Routes>
        </> 
        }
      <Routes>
        {/* <Route path="/" element={<LoginPage />} /> */}
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
