import "./Header.css"

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <h1 className="header-title">Enquadramento Ambiental</h1>
        <nav className="header-nav">
          <ul className="nav-list">
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#contact">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
