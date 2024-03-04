import { getWindowSize } from "../utils/getWindowSize"

const Project = ({project}) => {  
  const windowSize = getWindowSize();

  return (
    <div className={windowSize > 706 ? "p-4 mx-4 w-[80svw] flex items-center border-2 border-blue-400 rounded-lg bg-slate-600" : "p-4 mx-4 w-full flex flex-wrap w-4/5 justify-center items-center border-2 border-blue-400 rounded-lg bg-slate-600"}>
      <a
        target="_blank"
        rel="noreferrer"
        href={project.url}
      >
        <img
          className="preview-image"
          src={project.image}
          alt={project.name}
        />
      </a>
      <div>
        <p>
          {project.description}
        </p>
        <div className="mt-1">
          <p className="text-black font-bold">GitHub: </p>
          <a
            target="_blank"
            rel="noreferrer"
            href={project.githubUrl}
          >
            {project.name}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project