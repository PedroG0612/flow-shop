import './Header.css'
import logo from './assets/logo.png'
import magnifyingGlass from './assets/magnifying-glass.png'
import buys from './assets/buys.png'
import star from './assets/star.png'

function Header() {
  return (
    <header>
      <div className="Header-left">
        <img id="logo" src={logo} alt="FlowShop Logo" />
      </div>

      <div className="header-middle">
        <a className="nav-link" href="/">Início</a>
        <a className="nav-link" href="/catalogo">Catálogo</a>
        <a className="nav-link" href="/masculino">Masculino</a>
        <a className="nav-link" href="/feminino">Feminino</a>
        <a className="nav-link" href="/infantil">Infantil</a>
        <a className="nav-link" href="/lancamentos">Lançamentos</a>
      </div>

      <div className="Header-right">
        <a href="/busca">
          <img className="icon" src={magnifyingGlass} alt="Lupa" />
        </a>
        <a href="/carrinho">
          <img className="icon" src={buys} alt="Carrinho de Compras" />
        </a>
      </div>
    </header>
  );
}

export default Header