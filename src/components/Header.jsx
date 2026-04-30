import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="campora-header">
      <Link to="/" className="logo">CAMPORA</Link>

      <nav className="campora-nav">
        <Link to="/brand">Brand</Link>
        <Link to="/">Curation</Link>
        <Link to="/">tant · tarps</Link>
        <Link to="/">Sleeping Bag · mat</Link>
        <Link to="/table-chair">Table · Chair</Link>
        <Link to="/">Lantern · stove</Link>
      </nav>

      <div className="header-icons">
        <span>⌕</span>
        <span>🛒</span>
      </div>
    </header>
  )
}

export default Header