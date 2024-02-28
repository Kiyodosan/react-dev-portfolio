import { useEffect } from 'react';
//// Test if I need to import nav.css here, if I'm also adding it to Header component
// import '../assets/css/nav.css';

//// Change the hrefs for react
const Navigation = () => {
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
    <nav>
      <ul id="primary-nav" data-visible="false" className="primary-nav flex">
        <li>
          <a href="index.html" className="text-black text-size-1p5">
            About Me
          </a>
        </li>
        <li>
          <a href="login.html" className="text-black text-size-1p5">
            Portfolio
          </a>
        </li>
        <li>
          <a href="account.html" className="text-black text-size-1p5">
            Contact
          </a>
        </li>
        <li>
          <a href="cart.html" className="text-black text-size-1p5">
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation