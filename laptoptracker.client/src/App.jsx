// Import necessary modules
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap'; // Import Bootstrap JS
import 'jquery'; // Import jQuery
import '@popperjs/core'; // Import Popper.js
import 'bootstrap-icons/font/bootstrap-icons.css'; // If you are using Bootstrap icons instead of Font Awesome
import React from 'react';
import ReactDOM from 'react-dom/client'; // Update import to use 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import Routes and Route components
import LandingPage from './components/LandingPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import LaptopTrackerDashboard from './components/LaptopTrackerDashboard';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/terms" element={<TermsOfServicePage />} />
                <Route path="/privacy" element={<PrivacyPolicyPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/forgot" element={<ForgotPasswordPage />} />
                <Route path="/dashboard/*" element={<LaptopTrackerDashboard />} /> {/* Use wildcard for nested routes */}
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
