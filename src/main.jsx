import React from 'react'
import ReactDOM from 'react-dom/client'
import ErrorPage from './Pages/errorPage.jsx'
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProductPage from './Pages/products.jsx'
import DetailProductPage from './Pages/dataProduct.jsx';
import { Provider } from 'react-redux';
import store from './redux/store.js'
import DarkModeContextProvider from './context/DarkMode.jsx'
import { TotalPriceProvider } from './context/TotalPriceContext.jsx'

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
  {
    path:'/product/:id',
    element: <DetailProductPage />,
    errorElement: <ErrorPage />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <DarkModeContextProvider>
        <TotalPriceProvider>
          <RouterProvider router={router} />
        </TotalPriceProvider>
      </DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)
