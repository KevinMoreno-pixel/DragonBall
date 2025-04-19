import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import HomePage from './pages/HomePage/Home'
import FilterPage from './pages/FilterPage/FilterPage'
import DetailsPage from './pages/DetailsPage/Detailspage'
import AboutPage from './pages/InfoPage/InfoPage'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import './App.css'


const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchAllCharacters = async () => {
      let allCharacters = []
      let page = 1
      let hasMore = true

      while (hasMore) {
        const res = await fetch(`https://dragonball-api.com/api/characters?page=${page}`)
        const data = await res.json()

        if (data.items && data.items.length > 0) {
          allCharacters = [...allCharacters, ...data.items]
          page++
        } else {
          hasMore = false
        }
      }

      setCharacters(allCharacters)
    }

    fetchAllCharacters()
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage characters={characters} />} />
        <Route path='/details/:id' element={<DetailsPage />} />
        <Route path='/filter/:race/:gender' element={<FilterPage />} />
        <Route path='/info' element={<AboutPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

export default AppWrapper