import React from 'react';

const PortfolioItems = ({ item }) => {
  return (
    <div className='portfolio__card' key={item.id}>
      <img src={item.image} alt='' className='portfolio__img' />

      <h3 className='portfolio__title'>{item.title}</h3>

      <a href={item.deployed_url} target='_blank' rel='noreferrer' className='portfolio__button'>
        Demo <i className='bx bx-right-arrow-alt portfolio__button-icon'></i>
      </a>
    </div>
  );
};

export default PortfolioItems;
