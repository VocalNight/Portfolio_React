import React, { useState } from 'react'
import ProjectCard from './ProjectCard';

export default function Accordion({ title, projects }) {

  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className='accordion'>
        <div className='accordion-item mx-2' 
        onClick={() => setIsActive(!isActive)}>
          <div className='accordion-title border-solid border-2 border-black mx-2 shadow-md'>
            <div>{title}</div>
            <div>{isActive ? '-' : '+'}</div>
          </div>
          {isActive && <div className='accordion-content'>
            <div 
              style={{ padding: '3px', display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
              {projects.map((project, index) => {
                return (
                  <ProjectCard project={project}></ProjectCard>
                );
              })}
            </div>
          </div>}
        </div>
      </div>

    </>
  );
}