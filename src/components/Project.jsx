import { getWindowSize } from "../utils/getWindowSize"

const Project = ({project}) => {  
  const windowSize = getWindowSize();

  return (
    <div className={windowSize >= 706 ? "flex w-2/5" : "flex w-4/5"}>
      <a
        target="_blank"
        rel="noreferrer"
        href={project.url}
      >
        <img
          className="preview-image "
          src={
            project.image
          }
          alt={
            project.name
          }
        />
      </a>
      <p className="w-4/5">
        {
          project.description
        }
      </p>
    </div>
  )
}

export default Project