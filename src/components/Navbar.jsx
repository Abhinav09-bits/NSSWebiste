import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaMapMarkerAlt } from "react-icons/fa"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <img src="/nss-logo.png" alt="NSS NIT Hamirpur Logo" className="h-12" />
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-platinum-blue">
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        <ul
          className={`lg:flex space-y-2 lg:space-y-0 lg:space-x-6 ${isMenuOpen ? "block" : "hidden"} absolute lg:relative top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0`}
        >
          {["Home", "About", "Events", "Volunteer", "Contact"].map((item) => (
            <li key={item}>
              <Link
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-platinum-blue font-semibold relative group block"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-platinum-blue transition-all group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center text-platinum-blue">
          <FaMapMarkerAlt className="mr-2" />
          <span className="text-sm">NIT Hamirpur, HP 177005</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

