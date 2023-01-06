import React, { useEffect, useState } from 'react';
import { ProjectsData, ProjectsNav } from '../../assets/Data/portfolio_data';
import './portfolio.css';
import WorksItems from './WorksItems';

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
    <section className='work section' id='portfolio'>
      <h2 className='section__title'>Portfolio</h2>
      <span className='section__subtitle'>Most recent works</span>

      <div>
        <div className='work__filters'>
          {ProjectsNav.map((item, index) => {
            return (
              <span
                onClick={(e) => {
                  handleClick(e, index);
                }}
                className={`${active === index ? 'active-work' : ''} work__item`}
                key={index}
              >
                {item.name}
              </span>
            );
          })}
        </div>

        <div className='work__container container grid'>
          {projects.map((item) => {
            return <WorksItems item={item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
