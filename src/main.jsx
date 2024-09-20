// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CssBaseline, ThemeProvider } from '@mui/material';  // Update to use Material UI ThemeProvider
import theme from './theme';  // Import the theme from theme.js
import './index.css';  // Ensure this path is correct

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}> {/* Use ThemeProvider from @mui/material */}
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
