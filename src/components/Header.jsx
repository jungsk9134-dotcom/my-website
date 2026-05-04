import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="campora-header">
      <Link to="/" className="logo">CAMPORA</Link>

      <nav className="campora-nav">
        <Link to="/brand">Brand</Link>
        <Link to="/curation">Curation</Link>
        <Link to="/category/tent">tent.tarps</Link>
        <Link to="/category/sleep">sleeping bag.mat</Link>
        <Link to="/category/table-chair">Table · Chair</Link>
        <Link to="/category/lantern">lantern.stove</Link>
      </nav>

      <div className="header-icons">
        <Link to="/search">⌕</Link>
        <Link to="/cart">🛒</Link>
      </div>
    </header>
  )
}

export default Header