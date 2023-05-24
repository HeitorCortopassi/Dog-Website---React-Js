import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="menu">
      <div className="logoContainer">
        <img src="/images/logo.png" alt="logo do site" className="logo" />
        <img src="/images/Dogin.png" alt="Dogin" className="logoName" />
      </div>
      <div className="menuOpts">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/breeds">Raças</Link>
          </li>
          <li>
            <Link to="/about">Sobre nós</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
