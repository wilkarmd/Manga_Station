import React from 'react';
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <ul className="nav-list">
          <li><a href="/"><b>MANGAS</b><i>TATION</i></a></li>
          <li><a href="/library">Biblioteca</a></li>
          <li><a href="/List">Listas</a></li>
          <li><a href="/foro">Foros</a></li>
        </ul>
        <div className="log_in">
          <button className='registro'>Registrarse</button>
          <button className='inicio_sesion'>Iniciar Sesion</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
