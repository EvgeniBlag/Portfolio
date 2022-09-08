import React from 'react';
import s from'./Nav.module.css';

function Nav() {
  return (
    <div className={s.nav}>
    <a href=''>Inisio</a>
    <a href=''>Experencia</a>
    <a href=''>Prollectos</a>
    <a href=''>Contactos</a>
    </div>
  );
}

export default Nav;