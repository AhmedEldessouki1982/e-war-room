import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
//react router dom
import { createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
//importing app pages
import Register from './pages/Register';
import Login from './pages/Login';
import LoginContext from './context/LoginContext';
import {LoginUser} from './context/LoginContext'; 
//importing axios
import axios from 'axios';
import {isUserAthu as url} from './utils/api.js'


// user confirmation logic


// let protectedUser;
let ProtectedRoute = ({children}) => {



  // let { loginState } =  React.useContext(LoginUser);
  // loginState.email !== "" ? protectedUser = true : protectedUser = false;

  if (0) {
    return (
      <Navigate to="/login"/>
    )
  }
  return (
    children
  )
}


const appRouter = createBrowserRouter ([
  {
    path: "/",
    element: <ProtectedRoute><App /></ProtectedRoute>
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <LoginContext>
   <RouterProvider router={appRouter} />
  </LoginContext>
);
