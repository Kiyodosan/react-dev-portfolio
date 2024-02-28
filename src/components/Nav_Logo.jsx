import { useEffect } from 'react';
// import '../assets/css/nav.css';

const Nav_Logo = () => {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = '../assets/js/nav.js';
    script.defer = true;

    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div>
      <img src="../assets/images/" alt="brand logo" className="nav-logo" />
    </div>
  )
}

export default Nav_Logo