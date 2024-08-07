import ProjectCard from './ProjectCard';

export default function ProjectView({projects}) {

    return(
        <>
            <div 
              style={{ padding: '3px', display: 'flex', flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: "center", alignItems: "center", minHeight: '500px' }}>
              {projects.map((project, index) => {
                return (
                  <div className='cardContainer pt-5'>
                  <ProjectCard project={project}></ProjectCard>
                  </div>
                );
              })}
            </div>
        </>
    )
}
