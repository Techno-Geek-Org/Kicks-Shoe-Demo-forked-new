import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Cards from './components/Cards/Cards'
import Categories from './components/Categories/Categories'
import Review from './components/Reviews/Review'
import Products from './components/Products/Products'

const App = () => {
  return (
    <div>
      <Navbar />
      <Products/>
    </div>
  )
}

export default App
