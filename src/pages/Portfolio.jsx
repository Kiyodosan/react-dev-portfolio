import Project from '../components/Project'
import { projects } from '../utils/projects'

const Portfolio = () => {
  return (
    <div>
      <div className="flex justify-center mb-16">
        <h1 className="justify-self-center px-4 text-6xl font-bold text-red-500 font-sans">Projects</h1>
      </div>
      <article className="flex flex-wrap justify-center">
        {projects.map(project => {
          return (
            <Project key={project.id} project={project} />
          )
        })}
      </article>
    </div>
  )
}

export default Portfolio