import React from 'react';
import s from'./Header.module.css';
import Nav from '../nav/Nav';

function Header() {
    return (
        <div style={{backgroundColor:'aqua'}}>
            <div className={s.header}>
                <Nav />
            </div>
        </div>
    );
}

export default Header;