import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../fontawesome-free-7.0.1-web/css/all.min.css';
import "./assets/css/Navbar.css";
import "./assets/css/Footer.css";
import "./assets/css/index.css";
import "./assets/css/orderTracking.css";
import "./assets/css/dashboard.css";
import "./assets/css/Events.css";
import "./assets/css/Volunteer.css";
import "./assets/css/form.css";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </StrictMode>,
)