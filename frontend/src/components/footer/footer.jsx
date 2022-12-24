import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <h1 className='footer__title'>Medina</h1>

        <ul className='footer__list'>
          <li>
            <a href='#home' className='footer__link'>
              Home
            </a>
          </li>

          <li>
            <a href='#about' className='footer__link'>
              About
            </a>
          </li>

          <li>
            <a href='#portfolio' className='footer__link'>
              Portfolio
            </a>
          </li>

          {/* section under construction */}
          {/* <li>
            <a href='#blog' className='footer__link'>
              Blog
            </a>
          </li> */}
        </ul>

        <div className='footer__social'>
          <a
            href='https://www.linkedin.com/in/juniorhmedinab/?locale=en_US'
            className='footer__social-link'
            target='_blank'
            rel='noreferrer'
          >
            <i className='uil uil-linkedin-alt'></i>
          </a>

          <a href='https://github.com/juniiormediina' className='footer__social-link' target='_blank' rel='noreferrer'>
            <i className='uil uil-github-alt'></i>
          </a>
        </div>

        <div className='footer__copy'>&#169; Junior Medina. All rigths reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
