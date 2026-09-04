import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; // ☝️ Importe le fichier CSS global de l'application
//...