import React from 'react';
import Backend from './backend';
import Frontend from './frontend';
import './skills.component.css';

const Skills = () => {
  return (
    <section className='skills section' id='skills'>
      <h2 className='section__title'>Skills</h2>
      <span className='section__subtitle'>My technical level</span>

      <div className='skills__container container grid'>
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;
