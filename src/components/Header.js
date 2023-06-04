import React from 'react';
import style from './Header.module.scss';

function Header() {
  return (
    <header>
      <span className={style.logo}>Logo Placeholder</span>
      <nav>
        <ul>
          <li className={style.searchBar} />
          <li className={style.menu} />
          <li className={style.languagePreview} />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
