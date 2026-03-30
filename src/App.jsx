import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      index: true,
      element: <LoginPage />, 
    },
    {
      path: "/register",
      element: <RegisterPage />
    },
    {
      path: "/dashboard",
      element: <DashboardPage />
    },
  ]);

  return (
    <RouterProvider router={ router } />
  )
}
