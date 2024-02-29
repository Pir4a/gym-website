import { useState } from "react"
import logo from "../assets/logo/logo1.png"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"
import { IoMdLogIn } from "react-icons/io"
import { GoSidebarCollapse } from "react-icons/go"

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
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Schedule</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Classes</li>
            <li>Contact</li>
          </ul>
          <IoMdClose
            className="absolute top-8 right-8 size-8"
            onClick={setMenu}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
