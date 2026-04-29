import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <h1>My Website</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/board">Board</Link>
      </nav>
    </header>
  )
}

export default Header