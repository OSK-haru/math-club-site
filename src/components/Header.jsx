import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>数学研究同好会</h1>
      <nav>
        <Link to="/">トップ</Link> |{' '}
        <Link to="/resources">資料ページ</Link> |{' '}
        <Link to="/diary">部長のひとりごと</Link>
      </nav>
    </header>
  );
}

export default Header;
