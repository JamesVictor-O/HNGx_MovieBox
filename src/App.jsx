import { useEffect, useState } from 'react'
import { MyContextProvider } from './components/contextApis/ContextProvider'

import LandingPage from './page/landingPage/landingPage'
import FeaturedMovie from './page/moviePage/MoviePage'
import HomePage from './page/homePage/hompage'
import Root from './Root'

import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from "react-router-dom"

import './index.css'

function App() {
  
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
          <Route index element={<LandingPage />}/>
          <Route path='movie' element={<FeaturedMovie />}/>
          <Route path='movies/:id' element={ <HomePage/> }/> 
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
