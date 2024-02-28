import { useEffect } from 'react';
import '../assets/css/nav.css';
// import { navJs } from '../assets/js/nav.js';

export function addScript() {
  const script = document.createElement('script');
  script.src = '../assets/js/nav.js';
  script.async = true;
  script.defer = true;
  script.onload = () => this.scriptLoaded();
  document.body.appendChild(script);
}

const Nav_Button = () => {
/*   useEffect(() => {
    const script = document.createElement('script');

    script.src = '../assets/js/nav.js';
    script.async = true;
    // script.defer = true;

    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []); */
  
  // navJs();

/*   const script = document.createElement('script');
  script.src = '../assets/js/nav.js';
  script.async = true;
  script.defer = true;
  script.onload = () => this.scriptLoaded();
  document.body.appendChild(script); */

  return (
    <button className="mobile-nav-toggle" aria-controls="primary-nav" aria-expanded="false">
      <span className="sr-only">Menu</span>
      {addScript()}
    </button>
  )
}

export default Nav_Button