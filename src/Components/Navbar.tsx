import { useState } from "react"
import logo from "../assets/logo/logo1.png"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"
import { IoMdLogIn } from "react-icons/io"
import { GoSidebarCollapse } from "react-icons/go"
import { Link } from "react-router-dom"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function setMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav>
      <div className="flex justify-between items-center font-Montserrat bg-black py-4 px-4">
        <img src={logo} />

        <div className="flex items-center gap-4">
          <RxHamburgerMenu
            className="size-8 text-white hover:text-red-600 transition-all duration-200"
            onClick={setMenu}
          />
          <IoMdLogIn className="text-white size-8 hover:text-red-600 transition-all duration-200" />
          <GoSidebarCollapse className="text-white size-8 hover:text-red-600 transition-all duration-200" />
        </div>
        <div
          className={`flex flex-col items-center justify-center h-dvh w-full absolute bg-white
         transition-all duration-300 ease-out top-0 bottom-0 ${
           isMenuOpen ? "left-0" : "-left-full"
         }`}
        >
          <ul className="flex flex-col gap-8 text-2xl text-center font-medium font-sans">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/schedule">Schedule</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Link to="/classes">Classes</Link>
            </li>
            <li>
              {" "}
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <IoMdClose
            className="absolute top-8 right-8 size-10 text-red-600"
            onClick={setMenu}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
