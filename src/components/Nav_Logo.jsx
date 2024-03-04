import brandLogo from "../assets/images/Kiyodo Logo - Watermark Ver. (150x150).jpg"

const Nav_Logo = () => {
  return (
    <div className="flex items-center">
      <img src={brandLogo} alt="brand logo" className="nav-logo rounded-full" />
    </div>
  )
}

export default Nav_Logo