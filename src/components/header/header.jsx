import React from "react";

function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
        <div className="container-fluid ">
          <a className="navbar-brand me-auto" href="#">
            PumpDigital
          </a>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Pump Digital
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body d-flex flex-column justify-content-start">
              <ul className="navbar-nav justify-content-lg-center flex-grow-1 pe-3">
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a className="nav-link" aria-current="page" href="#">
                    Início
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a className="nav-link" href="#scrollspy-Services">
                    Serviços
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a className="nav-link" href="#scrollspy-About">
                    Quem Somos
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a className="nav-link" href="#scrollspy-Benefits">
                    Seus Benefícios
                  </a>
                </li>
                <li
                  className="nav-item"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                >
                  <a className="nav-link" href="#scrollspy-Contact">
                    Contato
                  </a>
                </li>
              </ul>
              <a
                className="d-lg-none d-block"
                href="https://linktr.ee/kaiquecolella"
              >
                <button type="button" className="btn">
                  Solicitar Avaliação
                </button>
              </a>
            </div>
          </div>
          <a
            className="d-none d-lg-block"
            href="https://linktr.ee/kaiquecolella"
          >
            <button type="button" className="btn">
              Solicitar Avaliação
            </button>
          </a>
          <button
            className="navbar-toggler pe-0 border-0 shadow-none"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
