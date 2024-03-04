import { getWindowSize } from "../utils/getWindowSize"
import image0 from "../assets/images/document-project-manager-img.png"
import image1 from "../assets/images/social-media-api-with-nosql-img.png"
import image2 from "../assets/images/note-maker-app-img.png"
import image3 from "../assets/images/demo-weather-dashboard-img.png"
import image4 from "../assets/images/game store app - demo.png"
import image5 from "../assets/images/README File Generator - demo.png"

const Project = ({project}) => {
  let imgThumb = null;

  switch(project.id) {
    case 0:
      imgThumb = image0;
      break;
    case 1:
      imgThumb = image1;
      break;
    case 2:
      imgThumb = image2;
      break;
    case 3:
      imgThumb = image3;
      break;
    case 4:
      imgThumb = image4;
      break;
    case 5:
      imgThumb = image5;
      break;
    default:
      console.log("Invalid id");
  }

  const windowSize = getWindowSize();
    
  return (
    <div className={windowSize > 706 ? "p-4 mx-4 w-[80svw] flex items-center border-2 border-blue-400 rounded-lg bg-slate-600" : "p-4 mx-4 flex flex-col w-4/5 justify-center items-center border-2 border-blue-400 rounded-lg bg-slate-600"}>
      <a href={project.url}>
        <img
          className="preview-image"
          src={imgThumb}
          alt={project.name}
        />
      </a>
      <div className="w-full">
        <p>
          {project.description}
        </p>
        <div className="mt-1">
          <p className="text-black font-bold">GitHub:</p>
          <a href={project.githubUrl}>
            {project.name}
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project