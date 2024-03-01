import Nav_Logo from './Nav_Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Nav_Logo />
        <Navigation />
      </div>
      <h2 id="devName" className="mb-4 flex justify-center font-bold text-3xl">Tyler Odo</h2>
    </div>
  )
}

export default Header