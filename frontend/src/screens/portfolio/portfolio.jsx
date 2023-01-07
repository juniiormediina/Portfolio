import React, { useEffect, useState } from 'react';
import { ProjectsData, ProjectsNav } from '../../assets/Data/Portfolio_data';
import './Portfolio.css';
import PortfolioItems from './PortfolioItems';

const Portfolio = () => {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(ProjectsData);
    } else {
      const newProjects = ProjectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <section className='portfolio section' id='portfolio'>
      <h2 className='section__title'>Portfolio</h2>
      <span className='section__subtitle'>Most recent works</span>

      <div>
        <div className='portfolio__filters'>
          {ProjectsNav.map((item, index) => {
            return (
              <span
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${active === index ? 'active-portfolio' : ''} portfolio__item`}
                key={index}
              >
                {item.name}
              </span>
            );
          })}
        </div>

        <div className='portfolio__container container grid'>
          {projects.map((item) => {
            return <PortfolioItems item={item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
