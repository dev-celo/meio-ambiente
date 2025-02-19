import "./Header.css"

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-content">
        <img src="/public/logo_com_o_nome_ambitrade.png" alt="" width={"200px"} />
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
