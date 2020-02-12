import React from 'react';
import s from './Header.module.scss';
import NavBar from '../NavBar/NavBar';
import HeadText from '../HeadText/HeadText';

function Header() {
    return (
        <header className={s.header}>
            <NavBar />
            <HeadText />
            <div className={s.up} ></div>
        </header>
    )
}

export default Header;