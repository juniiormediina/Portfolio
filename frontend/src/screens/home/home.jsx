import React from 'react';
import Data from '../../components/data/Data';
import ScrollDown from '../../components/scrollDown/scrollDown';
import Social from '../../components/social/Social';
import './home.css';

const Home = () => {
  return (
    <section className='home section' id='home'>
      <div className='home__container container grid'>
        <div className='home__content grid'>
          <Social />

          <div className='home__img'></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
