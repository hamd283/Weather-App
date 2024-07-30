import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Website from './components/Website'
const App = () => {
    const router=createBrowserRouter([
        {
            path: "/",
            element:<><Navbar/><Website/></>
        },
        {
            path: "/home",
            element:<><Navbar/><Home/></>
        },
        {
            path: "/about",
            element:<><Navbar/><About/></>
        },
        {
            path: "/contact",
            element:<><Navbar/><Contact/></>
        }
    ])
  return (
    <div>
        
        <RouterProvider router={router}/>
    </div>
  )
}

export default App
