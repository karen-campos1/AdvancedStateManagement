// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Find the root element
const container = document.getElementById('root');

// Create a root and render the app
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
