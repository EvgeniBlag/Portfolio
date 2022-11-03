import React from 'react';
import s from'./Nav.module.css';

function Nav() {
  return (
    <div className={s.nav}>
    <a className={s.a} href=''>Inisio</a>
    <a className={s.a} href=''>Experencia</a>
    <a className={s.a} href=''>Prollectos</a>
    <a className={s.a} href=''>Contactos</a>
    </div>
  );
}

export default Nav;