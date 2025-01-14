import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import About from './components/AboutUs/About';
import Book from './components/BookRide/Book';
import Home from './components/Home/Home';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/system';
import { router } from './router/router';


const root = ReactDOM.createRoot(document.getElementById('root'));
const theme=createTheme();
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
