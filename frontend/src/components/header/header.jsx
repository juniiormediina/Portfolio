import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  /*=============== Change Background Header ===============*/
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');

    // When the scroll is higher than 560 viewport teight, add the scroll-header class to a tag with the header tag
    if (window.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });

  /*=============== Toogle Menu ===============*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <header className='header'>
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>
          Medina
        </a>

        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className='nav__list grid'>
            <li className='nav___item'>
              <a
                href='#home'
                onClick={() => setActiveNav('#home')}
                className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-estate nav__icon'></i> Home
              </a>
            </li>

            <li className='nav___item'>
              <a
                href='#about'
                onClick={() => setActiveNav('#about')}
                className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-user nav__icon'></i> About
              </a>
            </li>

            <li className='nav___item'>
              <a
                href='#skills'
                onClick={() => setActiveNav('#skills')}
                className={activeNav === '#skills' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-file-alt nav__icon'></i> Skills
              </a>
            </li>

            <li className='nav___item'>
              <a
                href='#portfolio'
                onClick={() => setActiveNav('#portfolio')}
                className={activeNav === '#portfolio' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-scenery nav__icon'></i> Portfolio
              </a>
            </li>

            {/* section under construction */}
            {/* 
            <li className='nav___item'>
              <a
                href='#blog'
                onClick={() => setActiveNav('#blog')}
                className={activeNav === '#blog' ? 'nav__link active-link' : 'nav__link'}
              >
                <i className='uil uil-scenery nav__icon'></i> Blog
              </a>
            </li> */}
          </ul>
          <i className='uil uil-times nav__close' onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
          <i className='uil uil-apps'></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
