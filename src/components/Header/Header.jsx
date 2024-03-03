import headerStyles from "./header.css";
import logo from "../../assets/img/header-logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <a href="/" className="header__logo">
            <img src={logo} alt="logo" />
          </a>
          <ul className="header__nav-menu">
            <li>
              <a href="#!">Main</a>
            </li>
            <li>
              <a href="#!">Catalog</a>
            </li>
            <li>
              <a href="#!">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
