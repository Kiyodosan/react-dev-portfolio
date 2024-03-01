import Project from '../components/Project'
import { projects } from '../utils/projects'

const Portfolio = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {projects.map(project => {
        return (
          <Project key={project.id} project={project} />
        )
      })}
    </div>
  )
}

export default Portfolio