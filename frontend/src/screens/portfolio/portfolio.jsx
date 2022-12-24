import React, { useState } from 'react';
import './portfolio.css';

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className='portfolio section' id='portfolio'>
      <h2 className='section__title'>My Portfolio</h2>
      <span className='section__subtitle'>Recent Works</span>

      <div className='portfolio__container container grid'>
        <div className='portfolio__content'>
          <div>
            <i className='uil uil-web-grid portfolio__icon'></i>
            <h3 className='portfolio__title'>
              Product <br /> Designer
            </h3>
          </div>

          <span className='portfolio__button' onClick={() => toggleTab(1)}>
            View More <i className='uil uil-arrow-right portfolio__button-icon'></i>
          </span>

          <div className={toggleState === 1 ? 'portfolio__modal active-modal' : 'portfolio__modal'}>
            <div className='portfolio__modal-content'>
              <i className='uil uil-times portfolio__modal-close' onClick={() => toggleTab(0)}></i>

              <h3 className='portfolio__modal-title'>Product Designer</h3>
              <p className='portfolio__modal-description'>
                Service with more than 3 years of experience.Providing quality work to clients and companies.
              </p>

              <ul className='portfolio__modal-portfolio grid'>
                <li className='portfolio__modal-service'>
                  <i className='uil uil-check-circle portfolio__modal-icon'></i>
                  <p className='portfolio__modal-info'>I develop the user interface.</p>
                </li>
                <li className='portfolio__modal-service'>
                  <i className='uil uil-check-circle portfolio__modal-icon'></i>
                  <p className='portfolio__modal-info'>Web page development.</p>
                </li>
                <li className='portfolio__modal-service'>
                  <i className='uil uil-check-circle portfolio__modal-icon'></i>
                  <p className='portfolio__modal-info'>I create ux element interactions.</p>
                </li>
                <li className='portfolio__modal-service'>
                  <i className='uil uil-check-circle portfolio__modal-icon'></i>
                  <p className='portfolio__modal-info'>I position your company brand.</p>
                </li>
                <li className='portfolio__modal-service'>
                  <i className='uil uil-check-circle portfolio__modal-icon'></i>
                  <p className='portfolio__modal-info'>Design and mockups of products for companies.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='portfolio__content'>
          <div>
            <i className='uil uil-arrow portfolio__icon'></i>
            <h3 className='portfolio__title'>
              Ui/Ux <br /> Designer
            </h3>
          </div>

          <span className='portfolio__button' onClick={() => toggleTab(2)}>
            View More <i className='uil uil-arrow-right portfolio__button-icon'></i>
          </span>

          <div className={toggleState === 2 ? 'portfolio__modal active-modal' : 'portfolio__modal'}>
            <div className='portfolio__modal-content'>
              <i className='uil uil-times portfolio__modal-close' onClick={() => toggleTab(0)}></i>

              <h3 className='portfolio__modal-title'>Ui/Ux Designer</h3>
              <p className='portfolio__modal-description'>
                Service with more than 3 years of experience.Providing quality work to clients and companies.
              </p>

              <ul className='portfolio__modal-portfolio grid'>
                <li className='portfolio__modal-service'>
                  <i className='uil uil-check-circle portfolio__modal-icon'></i>
                  <p className='portfolio__modal-info'>I develop the user interface.</p>
                </li>
                <li className='portfolio__modal-service'>
                  <i className='uil uil-check-circle portfolio__modal-icon'></i>
                  <p className='portfolio__modal-info'>Web page development.</p>
                </li>
                <li className='portfolio__modal-service'>
                  <i className='uil uil-check-circle portfolio__modal-icon'></i>
                  <p className='portfolio__modal-info'>I create ux element interactions.</p>
                </li>
                <li className='portfolio__modal-service'>
                  <i className='uil uil-check-circle portfolio__modal-icon'></i>
                  <p className='portfolio__modal-info'>I position your company brand.</p>
                </li>
                <li className='portfolio__modal-service'>
                  <i className='uil uil-check-circle portfolio__modal-icon'></i>
                  <p className='portfolio__modal-info'>Design and mockups of products for companies.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='portfolio__content'>
          <div>
            <i className='uil uil-edit portfolio__icon'></i>
            <h3 className='portfolio__title'>
              Visual <br /> Designer
            </h3>
          </div>

          <span className='portfolio__button' onClick={() => toggleTab(3)}>
            View More <i className='uil uil-arrow-right portfolio__button-icon'></i>
          </span>

          <div className={toggleState === 3 ? 'portfolio__modal active-modal' : 'portfolio__modal'}>
            <div className='portfolio__modal-content'>
              <i className='uil uil-times portfolio__modal-close' onClick={() => toggleTab(0)}></i>

              <h3 className='portfolio__modal-title'>Visual Designer</h3>
              <p className='portfolio__modal-description'>
                Service with more than 3 years of experience.Providing quality work to clients and companies.
              </p>

              <ul className='portfolio__modal-portfolio grid'>
                <li className='portfolio__modal-service'>
                  <i className='uil uil-check-circle portfolio__modal-icon'></i>
                  <p className='portfolio__modal-info'>I develop the user interface.</p>
                </li>
                <li className='portfolio__modal-service'>
                  <i className='uil uil-check-circle portfolio__modal-icon'></i>
                  <p className='portfolio__modal-info'>Web page development.</p>
                </li>
                <li className='portfolio__modal-service'>
                  <i className='uil uil-check-circle portfolio__modal-icon'></i>
                  <p className='portfolio__modal-info'>I create ux element interactions.</p>
                </li>
                <li className='portfolio__modal-service'>
                  <i className='uil uil-check-circle portfolio__modal-icon'></i>
                  <p className='portfolio__modal-info'>I position your company brand.</p>
                </li>
                <li className='portfolio__modal-service'>
                  <i className='uil uil-check-circle portfolio__modal-icon'></i>
                  <p className='portfolio__modal-info'>Design and mockups of products for companies.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
