import { useEffect, useState } from 'react'
import { MyContextProvider } from './components/ContextProvider'

import LandingPage from './page/landingPage/landingPage'
import FeaturedMovie from './page/featured Movie/featuredMovie'
import AboutPage from './page/aboutPage/aboutPage'
import Root from './Root'

import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from "react-router-dom"

import './index.css'

function App() {
  
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Root/>}/>
         <Route path='/movies/:id' element={ <AboutPage/> }/>
      </Route>
     )
  )
  
  
  return (
    <div>
      <MyContextProvider>
         <RouterProvider router={router}/>
      </MyContextProvider>
    </div>
  )
}

export default App
