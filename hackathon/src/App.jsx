import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDashboard from './pages/AdminDashboard';
import LandingPage from './pages/LandingPage';
import CalculatorPage from './pages/CalculatorPage';
import UserDashboard from './pages/UserDashboard';
import LoanRequestForm from './pages/LoanRequestForm';
import Users from './pages/Users';
import LoginForm from './pages/LoginForm';
import Signup from './pages/Signup';
import RegistrationPage from "./pages/RegistrationPages";
      
const App = () => {
  return (
    <div>
       <Router>
        <Routes>
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
          <Route path="/LandingPage" element={<LandingPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/userDashboard" element={<UserDashboard />} />
          <Route path="/loanRequestForm" element={<LoanRequestForm />} />
          <Route path="/registrationPage" element={<RegistrationPage />} />
          <Route path="/users" element={<Users />} />
          <Route path="/loginForm" element={<LoginForm />} />
          <Route path="/" element={<Signup />} />
          
        </Routes>
      </Router>



    </div>
  );
};

export default App;
