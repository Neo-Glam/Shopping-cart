import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'
import { Cart } from './components/Cart.jsx';
import { Shop } from './components/Shop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>
  },
  {
    path:"cart",
    element: <Cart/>
  },
  {
    path:"shop",
    element: <Shop/>
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
