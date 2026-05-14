import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import Brand from './pages/Brand'
import Search from './pages/Search'
import Cart from './pages/Cart'
import Curation from './pages/Curation'
import CurationFire from './pages/CurationFire'
import CurationCar from './pages/CurationCar'
import CurationMinimal from './pages/CurationMinimal'
import CategoryPage from './pages/CategoryPage'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'

function App() {
  const [cartItems, setCartItems] = useState([])

  return (
    <>
      <Header cartAdded={cartItems.length > 0} />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={
          <Cart 
            cartItems={cartItems}
            setCartItems={setCartItems} />} />
        <Route path="/curation" element={<Curation />} />
        <Route path="/curation/fire" element={<CurationFire />} />
        <Route path="/curation/car" element={<CurationCar />} />
        <Route path="/curation/minimal" element={<CurationMinimal />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route
          path="/product/:id"
          element={<ProductDetail setCartItems={setCartItems} />}
        />

        <Route path="/category/:type" element={<CategoryPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App