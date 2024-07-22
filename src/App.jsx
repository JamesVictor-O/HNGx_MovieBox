import { useEffect, useState } from 'react'
import { MyContextProvider } from './components/contextApis/ContextProvider'

import LandingPage from './page/landingPage/landingPage'
import FeaturedMovie from './page/moviePage/MoviePage'
import HomePage from './page/homePage/hompage'
import Series from './page/series/Series'
import Root from './Root'

import { createBrowserRouter, createRoutesFromElements, Route,RouterProvider } from "react-router-dom"

import './index.css'

function App() {
  
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
          <Route index element={<LandingPage />}/>
          <Route path='series' element={<Series/>}/>
          <Route path='movie' element={<FeaturedMovie />}/>
          <Route path='/:id' element={ <HomePage/> }/> 
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
