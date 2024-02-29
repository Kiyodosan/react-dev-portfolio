// import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

const Navigation = () => {
/*   useEffect(() => {
    const script = document.createElement('script');

    script.src = '../assets/js/nav.js';
    script.defer = true;

    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []); */

  // Returns window width in px, based on current size (even if page is minimized)
  const getWindowSize = () => {
    return window.screen.availWidth;
  }
  console.log(getWindowSize());

  const [visibility, setVisibility] = useState(() => {
    //// Find a way to convert em to px
    //// Currently testing with availWidth
    if (getWindowSize >= 560) {
      return false;
    } else {
      return true;
    }
  });

  const currentPage = useLocation().pathname;
  //// console.log(currentPage);

/*   const primaryNav = document.querySelector('.primary-nav');
  const navToggle = document.querySelector('.mobile-nav-toggle'); */

  const handleNavClick = () => {
    setVisibility(!visibility);

/*     const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === 'false') {
      primaryNav.setAttribute('data-visible', true);
      navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === 'true') {
      primaryNav.setAttribute('data-visible', false);
      navToggle.setAttribute('aria-expanded', false);
    } */
  }

  //// Modify active className to fit Tailwind CSS framework
  //// Testing using useState to set aria-expanded and data-visible with visibility's value
  return (
    <>
      <button className="mobile-nav-toggle" aria-controls="primary-nav" aria-expanded={visibility} onClick={() => handleNavClick()}>
        <span className="sr-only">Menu</span>
      </button>

      <nav>
        <ul id="primary-nav" data-visible={visibility} className="primary-nav flex">
          <li>
            <Link
              to="/About_Me"
              className={currentPage === "/About_Me" ? "text-black text-size-1p5 active" : "text-black text-size-1p5"}
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
    </>
  )
}

export default Navigation