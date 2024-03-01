import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import { getWindowSize } from '../utils/getWindowSize'

const Navigation = () => {
  // const windowSize = getWindowSize();
  //// console.log(getWindowSize());

/*   //// Nav menu is opened by default if width is under 706px. Not intended
  const [visibility, setVisibility] = useState(() => {
    if (windowSize >= 706) {
      return false;
    } else {
      return true;
    }
  }); */

  // Defaults collapsible nav menu to closed
  const [visibility, setVisibility] = useState(false);

  const handleNavClick = () => {
    setVisibility(!visibility);
  }

  const currentPage = useLocation().pathname;
  //// console.log(currentPage);

  return (
    <div>
      <button className="mobile-nav-toggle" aria-controls="primary-nav" aria-expanded={visibility} onClick={() => handleNavClick()}>
        <span className="sr-only">Menu</span>
      </button>

      <nav>
        <ul id="primary-nav" data-visible={visibility} className="primary-nav flex font-bold">
          <li>
            <Link
              to="/"
              className={currentPage === "/" ? "text-black text-size-1p5 active" : "text-black text-size-1p5"}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/Portfolio"
              className={currentPage === "/Portfolio" ? "text-black text-size-1p5 active" : "text-black text-size-1p5"}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className={currentPage === "/Contact" ? "text-black text-size-1p5 active" : "text-black text-size-1p5"}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/Resume"
              className={currentPage === "/Resume" ? "text-black text-size-1p5 active" : "text-black text-size-1p5"}
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation