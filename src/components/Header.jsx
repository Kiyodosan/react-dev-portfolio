import Nav_Logo from './Nav_Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <div className="mb-12">
      <div className="flex items-center justify-between">
        <Nav_Logo />
        <Navigation />
      </div>
    </div>
  )
}

export default Header