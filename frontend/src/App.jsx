import Home from "./components/Home"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginForm from "./components/LoginForm"
import Dashboard from "./components/Dashboard"



function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<LoginForm/>
    },
    {
      path:'/dashboard',
      element:<Dashboard/>
    },
    {
      path:'/home',
      element:<Home/>
    },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
