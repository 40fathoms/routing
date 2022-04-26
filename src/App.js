import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Header from './components/Header'
import Welcome from './pages/Welcome'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Navigate to='/welcome' />} />
          <Route path='/welcome/*' element={<Welcome />} />
          <Route path='/products/' element={<Products />} />
          <Route path='/products/:productId' element={<ProductDetail />} />
        </Routes>
      </main>
    </div> 
  )
}

export default App 