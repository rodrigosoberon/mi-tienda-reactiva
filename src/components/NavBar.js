import logo from "../logo.svg";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img src={logo} width={30} height={30} />
        Mi tienda reactiva
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Inicio <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Categorías
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">
                Televisores
              </a>
              <a class="dropdown-item" href="#">
                Celulares y tablets
              </a>
              <a class="dropdown-item" href="#">
                Notebooks
              </a>
              <a class="dropdown-item" href="#">
                Cámaras
              </a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Ofertas
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
