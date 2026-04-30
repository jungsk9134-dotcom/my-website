import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Board from './pages/Board'
import BoardDetail from './pages/BoardDetail'
import BoardWrite from './pages/BoardWrite'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/board" element={<Board />} />
        <Route path="/board/:id" element={<BoardDetail />} />
        <Route path="/board/write" element={<BoardWrite />} />
      </Routes>
    </>
  )
}

export default App
