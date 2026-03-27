import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />, 
    },
    {
      path: "/register",
      element: <RegisterPage />
    },
  ]);

  return (
    <RouterProvider router={ router } />
  )
}
