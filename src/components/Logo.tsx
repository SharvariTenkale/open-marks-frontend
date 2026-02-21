import logo from "../assets/openmarks-logo.png"

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <img src={logo} alt="OpenMarks Logo" className="w-8 h-8 object-contain" />
      <span className="text-lg font-semibold">OpenMarks</span>
    </div>
  )
}

export default Logo