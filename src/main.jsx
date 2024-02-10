import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './Pages/errorPage.jsx'
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductPage from './Pages/products.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <div>Hello World!</div>,
    errorElement: <ErrorPage />
  },
  {
    path:'/login',
    element: <LoginPage />,
    errorElement: <ErrorPage />
  },
  {
    path:'/products',
    element:<ProductPage/>,
    errorElement:<ErrorPage/>
  },
  {
    path:'/register',
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
