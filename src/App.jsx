import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import TableChair from './pages/TableChair'
import ProductDetail from './pages/ProductDetail'
import Brand from "./pages/Brand";
import Curation from './pages/Curation'
import CurationFire from './pages/CurationFire'
import CurationCar from './pages/CurationCar'
import CurationMinimal from './pages/CurationMinimal'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/curation" element={<Curation />} />
        <Route path="/curation/fire" element={<CurationFire />} />
        <Route path="/curation/car" element={<CurationCar />} />
        <Route path="/curation/minimal" element={<CurationMinimal />} />
        <Route path="/table-chair" element={<TableChair />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </>
  )
}

export default App
