import { useState } from 'react'
import './App.css'
import Homescreen from '../src/components/Homescreen/homescreen'
import Chatscreen from '../src/components/Chatscreen/chatscreen'
import LoginScreen from '../src/components/LoginScreen/loginScreen'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Homescreen />
    },
    {
      path:'/login',
      element:<LoginScreen />
    },
    {
      path:'/chatscreen',
      element:<Chatscreen />
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
