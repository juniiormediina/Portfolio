import React, { useState } from 'react';
import { Back, Front } from '../../assets/Data/Skills_data';
import './Skills.css';

const Skills = () => {
  const [frontend] = useState(Front);
  const [backend] = useState(Back);

  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <span className='section__subtitle'>My technical level</span>

      <div className='skills__container container grid'>
        {/*=============== Frontend ===============*/}
        <div className='skills__content'>
          <h3 className='skills__title'>Frontend developer</h3>

          <div className='skills__box'>
            <div className='skills__group'>
              {frontend.map((frontend) =>
                frontend.id <= 3 ? (
                  <div className='skills__data' key={frontend.id}>
                    <i className='bx bx-badge-check'></i>

                    <div>
                      <h3 className='skills__name'>{frontend.skillName}</h3>
                      <span className='skills_level'>{frontend.level}</span>
                    </div>
                  </div>
                ) : null
              )}
            </div>

            <div className='skills__group'>
              {frontend.map((frontend) =>
                frontend.id >= 4 ? (
                  <div className='skills__data' key={frontend.id}>
                    <i className='bx bx-badge-check'></i>

                    <div>
                      <h3 className='skills__name'>{frontend.skillName}</h3>
                      <span className='skills_level'>{frontend.level}</span>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
        {/*=============== Backend ===============*/}

        <div className='skills__content'>
          <h3 className='skills__title'>Backend Developer</h3>

          <div className='skills__box'>
            <div className='skills__group'>
              {backend.map((backend) =>
                backend.id <= 3 ? (
                  <div className='skills__data' key={backend.id}>
                    <i className='bx bx-badge-check'></i>

                    <div>
                      <h3 className='skills__name'>{backend.skillName}</h3>
                      <span className='skills_level'>{backend.level}</span>
                    </div>
                  </div>
                ) : null
              )}
            </div>

            <div className='skills__group'>
              {backend.map((backend) =>
                backend.id >= 4 ? (
                  <div className='skills__data' key={backend.id}>
                    <i className='bx bx-badge-check'></i>

                    <div>
                      <h3 className='skills__name'>{backend.skillName}</h3>
                      <span className='skills_level'>{backend.level}</span>
                    </div>
                  </div>
                ) : null
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
