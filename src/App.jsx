import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Hero from './components/Hero/Hero'
import Cards from './components/Cards/Cards'
import Categories from './components/Categories/Categories'
import Review from './components/Reviews/Review'
import Footer from './components/Footer/Footer'
import Signup from './page/Signup/Signup'
import Login from './page/Login/Login'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Hero />
        <Cards />
        <Categories />
        <Review />
        <Footer />
      </div>
    </Router>

  )
}

export default App
