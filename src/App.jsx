import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import LoginPage from './pages/LoginPage'

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />
    },
  ])

  return (
    <RouterProvider router={ router } />
  )
}
