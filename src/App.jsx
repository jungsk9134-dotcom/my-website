import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import TableChair from './pages/TableChair'
import Tent from './pages/Tent'
import Sleep from './pages/Sleep'
import Lantern from './pages/Lantern'
import ProductDetail from './pages/ProductDetail'
import Brand from "./pages/Brand";
import Search from './pages/Search'
import Cart from './pages/Cart'
import Curation from './pages/Curation'
import CurationFire from './pages/CurationFire'
import CurationCar from './pages/CurationCar'
import CurationMinimal from './pages/CurationMinimal'
import CategoryPage from './pages/CategoryPage'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/search" element={<Search />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/curation" element={<Curation />} />
        <Route path="/curation/fire" element={<CurationFire />} />
        <Route path="/curation/car" element={<CurationCar />} />
        <Route path="/curation/minimal" element={<CurationMinimal />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/category/:type" element={<CategoryPage />} />
      </Routes>
    </>
  )
}

export default App
