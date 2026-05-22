import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

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
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartItems')) || []

    return savedCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }))
  })

  const handleAddCart = (product) => {
    setCartItems((prev) => {
      const existItem = prev.find((item) => item.id === product.id)

      let newCartItems

      if (existItem) {
        newCartItems = prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        )
      } else {
        newCartItems = [...prev, { ...product, quantity: product.quantity || 1 }]
      }

      localStorage.setItem('cartItems', JSON.stringify(newCartItems))
      window.dispatchEvent(new Event('cartUpdated'))

      return newCartItems
    })
  }

  useEffect(() => {
    const handleCartUpdated = () => {
      const savedCart = JSON.parse(localStorage.getItem('cartItems')) || []

      const fixedCart = savedCart.map((item) => ({
        ...item,
        quantity: item.quantity || 1,
      }))

      setCartItems(fixedCart)
    }

    window.addEventListener('cartUpdated', handleCartUpdated)

    return () => {
      window.removeEventListener('cartUpdated', handleCartUpdated)
    }
  }, [])

  return (
    <>
      <Header cartCount={cartItems.length} />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/search" element={<Search />} />

        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />

        <Route path="/curation" element={<Curation />} />
        <Route path="/curation/fire" element={<CurationFire />} />
        <Route path="/curation/car" element={<CurationCar />} />
        <Route path="/curation/minimal" element={<CurationMinimal />} />

        <Route
          path="/product/:id"
          element={<ProductDetail onAddCart={handleAddCart} />}
        />

        <Route path="/category/:type" element={<CategoryPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App