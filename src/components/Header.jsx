import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <span className="navbar-brand">Trivia app</span>
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link to="/chuck" className="nav-link" aria-current="page">
              Chuck
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
};
export default Header;
