import React from 'react'
import './Categories.css'

const Categories = () => {
  return (
    <div className='categories'>
      <div className="category-title">
        <h1>CATEGORIES</h1>
      </div>
      <div className="category-shoes">
        <div className="shoe-1">
            <img src="/assets/category_shoe1.png" alt="" />
            <h2>LIFESTYLE SHOES</h2>
        </div>
        <div className="shoe-2">
            <img src="/assets/category_shoe2.png" alt="" />
            <h2>BASKETBALL SHOES</h2>
        </div>
      </div>
    </div>
  )
}

export default Categories
