// components/Header.jsx
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="logo">Math Club</div>
      <nav>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>ホーム</Link>
        <Link to="/resources" className={location.pathname === '/resources' ? 'active' : ''}>資料</Link>
        <Link to="/diary" className={location.pathname === '/diary' ? 'active' : ''}>ひとりごと</Link>
      </nav>
    </header>
  );
}

export default Header;
