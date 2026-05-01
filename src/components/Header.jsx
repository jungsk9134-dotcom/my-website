import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="campora-header">
      <Link to="/" className="logo">CAMPORA</Link>

      <nav className="campora-nav">
        <Link to="/brand">Brand</Link>
        <Link to="/curation">Curation</Link>
        <Link to="/tent">tent.tarps</Link>
        <Link to="/sleep">sleeping bag.mat</Link>
        <Link to="/table-chair">Table · Chair</Link>
        <Link to="/lantern">lantern.stove</Link>
      </nav>

      <div className="header-icons">
        <span>⌕</span>
        <span>🛒</span>
      </div>
    </header>
  )
}

export default Header