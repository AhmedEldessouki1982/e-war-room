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

//user confirmation logic
let protectedUser = 1; //temp varuable to test the user security

let ProtectedRoute = ({children}) => {
  if (!protectedUser) {
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
    element: <ProtectedRoute > <App /> </ProtectedRoute>
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
