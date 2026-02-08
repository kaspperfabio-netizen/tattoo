import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';
import './index.css';

// Importing App and rendering it inside ThemeProvider
import ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
