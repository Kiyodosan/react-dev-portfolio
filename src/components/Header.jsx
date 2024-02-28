import { useEffect } from 'react';
import '../assets/css/nav.css';

import Nav_Logo from './Nav_Logo';
import Nav_Button from './Nav_Button';
import Navigation from './Navigation';

const Header = () => {
  // Not sure if useEffect should be used only once or every time rerender occurs
/*   useEffect(() => {
    const script = document.createElement('script');

    script.src = '../assets/js/nav.js';
    script.defer = true;

    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []); */

  return (
    <>
      <Nav_Button />
      <Nav_Logo />
      <Navigation />
    </>
  )
}

export default Header