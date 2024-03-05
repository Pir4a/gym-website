import { useState } from "react"
import logo from "../assets/logo/logo1.png"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoMdClose } from "react-icons/io"
import { IoMdLogIn } from "react-icons/io"
import { GoSidebarCollapse } from "react-icons/go"
import { Link } from "react-router-dom"
import sideBarImageOne from "../assets/sidebar/1.jpg"
import sideBarImageTwo from "../assets/sidebar/2.jpg"
import sideBarImageThree from "../assets/sidebar/3.jpg"
import sideBarImageFour from "../assets/sidebar/4.jpg"
import sideBarImageFive from "../assets/sidebar/5.jpg"
import sideBarImageSix from "../assets/sidebar/6.jpg"
import { IoLocationOutline } from "react-icons/io5"
import { LuPhone } from "react-icons/lu"
import { AiOutlineMail } from "react-icons/ai"
import { FaDumbbell, FaFacebook } from "react-icons/fa"
import { AiFillTwitterCircle } from "react-icons/ai"
import { RiInstagramFill } from "react-icons/ri"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)

  function setMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  function setSideBar() {
    setIsSideBarOpen(!isSideBarOpen)
  }
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <nav>
      <div className="flex justify-between items-center font-Montserrat bg-black py-4 px-4 fixed top-0 left-0 right-0 z-50 md:hidden">
        <Link to="/">
          <img src={logo} />
        </Link>

        <div className="flex items-center gap-4">
          <RxHamburgerMenu
            className="size-8 text-white hover:text-red-600 transition-all duration-200"
            onClick={setMenu}
          />
          <IoMdLogIn className="text-white size-8 hover:text-red-600 transition-all duration-200" />
          <GoSidebarCollapse
            className="text-white size-8 hover:text-red-600 transition-all duration-200"
            onClick={setSideBar}
          />
        </div>
        <div
          className={`flex flex-col items-center justify-center h-dvh w-full absolute bg-black text-white
         transition-all duration-300 ease-out top-0 bottom-0 ${
           isMenuOpen ? "left-0" : "-left-full"
         }`}
        >
          <ul className="flex flex-col gap-8 text-2xl text-center font-medium font-sans">
            <li onClick={scrollToTop}>
              <Link to="/" onClick={setMenu}>
                Home
              </Link>
            </li>
            <li onClick={scrollToTop}>
              {" "}
              <Link to="/about" onClick={setMenu}>
                About
              </Link>
            </li>
            <li onClick={scrollToTop}>
              <Link to="/gallery" onClick={setMenu}>
                Gallery
              </Link>
            </li>
            <li onClick={scrollToTop}>
              <Link to="/schedule" onClick={setMenu}>
                Schedule
              </Link>
            </li>
            <li onClick={scrollToTop}>
              <Link to="/blog" onClick={setMenu}>
                Blog
              </Link>
            </li>
            <li onClick={scrollToTop}>
              <Link to="/pricing" onClick={setMenu}>
                Pricing
              </Link>
            </li>
            <li onClick={scrollToTop}>
              <Link to="/classes" onClick={setMenu}>
                Classes
              </Link>
            </li>
            <li onClick={scrollToTop}>
              {" "}
              <Link to="/contact" onClick={setMenu}>
                Contact
              </Link>
            </li>
          </ul>
          <IoMdClose
            className="absolute top-8 right-8 size-10 text-red-600"
            onClick={setMenu}
          />
        </div>
        <div
          className={`flex flex-col items-center max-h-[125dvh] overflow-y-scroll z-50 w-full fixed bg-black text-white
         transition-all duration-300 ease-out top-0 bottom-0 ${
           isSideBarOpen ? "left-0" : "-left-full"
         }`}
        >
          <div className="flex justify-between p-8 w-full">
            {" "}
            <img src={logo} />
            <IoMdClose className=" size-10 text-red-600" onClick={setSideBar} />
          </div>
          <div className="pt-2 px-12 flex flex-col gap-4 ">
            <h2 className="text-2xl font-bold font-sans">About Us</h2>
            <p className="opacity-70 text-md">
              Find out who we are and what makes us unique. We are a
              community-driven gym committed to providing personalized fitness
              experiences for all levels of fitness enthusiasts in a welcoming
              and supportive environment.
            </p>
          </div>
          <div className="pt-4 px-12 flex flex-col gap-4 w-full ">
            <h2 className="text-2xl font-bold font-sans">Gallery</h2>
            <div className="grid grid-cols-3 grid-rows-2 gap-3">
              <img src={sideBarImageOne} className="rounded-lg" />
              <img src={sideBarImageTwo} className="rounded-lg" />
              <img src={sideBarImageThree} className="rounded-lg" />
              <img src={sideBarImageFour} className="rounded-lg" />
              <img src={sideBarImageFive} className="rounded-lg" />
              <img src={sideBarImageSix} className="rounded-lg" />
            </div>
          </div>
          <div className="pt-8 px-12 flex flex-col gap-4 w-full ">
            <h2 className="text-2xl font-bold font-sans">Contact Info</h2>
            <ul className="space-y-4">
              <li className="pt-2 flex gap-4 text-lg items-center">
                <IoLocationOutline className="size-6" /> 59 Street, House SickKT
                City
              </li>
              <li className="flex gap-4 text-lg items-center">
                <LuPhone className="size-6" /> +123-456-789
              </li>
              <li className="flex gap-4 text-lg items-center">
                <AiOutlineMail className="size-6" /> zyzzgym@gmail.com
              </li>
            </ul>
          </div>
          <div className="pt-8 px-12 flex flex-col gap-4 w-full bg-black pb-4">
            <h2 className="text-2xl font-bold font-sans">Socials</h2>
            <div className="flex gap-4 items-center">
              <FaFacebook className="size-8 " />
              <AiFillTwitterCircle className="size-8 " />
              <RiInstagramFill className="size-8" />
            </div>
          </div>
        </div>
      </div>

      {/*desktop*/}

      <div className="justify-between items-center font-Montserrat bg-black py-4 px-4 fixed top-0 left-0 right-0 z-50 hidden md:flex">
        <Link to="/">
          <img src={logo} />
        </Link>

        <div
          className={`flexitems-center justify-centerw-full bg-black text-white`}
        >
          <ul className="flex gap-8 text-lg text-center font-medium font-sans">
            <li className="hover:text-brightred transition-all duration-300 ease-in-out">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-brightred transition-all duration-300 ease-in-out">
              {" "}
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-brightred transition-all duration-300 ease-in-out">
              <Link to="/gallery">Gallery</Link>
            </li>
            <li className="hover:text-brightred transition-all duration-300 ease-in-out">
              <Link to="/schedule">Schedule</Link>
            </li>
            <li className="hover:text-brightred transition-all duration-300 ease-in-out">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:text-brightred transition-all duration-300 ease-in-out">
              <Link to="/pricing">Pricing</Link>
            </li>
            <li className="hover:text-brightred transition-all duration-300 ease-in-out">
              <Link to="/classes">Classes</Link>
            </li>
            <li className="hover:text-brightred transition-all duration-300 ease-in-out">
              {" "}
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-8 items-center">
          <GoSidebarCollapse
            className="text-white size-8 hover:text-red-600 transition-all duration-200 cursor-pointer"
            onClick={setSideBar}
          />
          <IoMdLogIn className="text-white size-8 hover:text-red-600 transition-all duration-200 cursor-pointer" />
          <Link to="/contact">
            <span className="text-md group flex items-center gap-4 font-semibold text-white border-2 border-brightred hover:border-red-500 p-2 rounded-lg">
              <FaDumbbell className="text-white group-hover:text-brightred transition-all duration-300 ease-in-out" />
              <p className="group-hover:text-brightred transition-all duration-300 ease-in-out">
                JOIN GYM NOW
              </p>
            </span>
          </Link>
        </div>
        <div
          className={`flex flex-col items-center max-h-[125dvh] overflow-y-scroll z-50 w-full fixed bg-black text-white
         transition-all duration-300 ease-out top-0 bottom-0 ${
           isSideBarOpen ? "left-0" : "-left-full"
         }`}
        >
          <div className="flex justify-between p-8 w-full">
            {" "}
            <img src={logo} />
            <IoMdClose className=" size-10 text-red-600" onClick={setSideBar} />
          </div>
          <div className="pt-2 px-12 flex flex-col gap-4 ">
            <h2 className="text-2xl font-bold font-sans">About Us</h2>
            <p className="opacity-70 text-md">
              Find out who we are and what makes us unique. We are a
              community-driven gym committed to providing personalized fitness
              experiences for all levels of fitness enthusiasts in a welcoming
              and supportive environment.
            </p>
          </div>
          <div className="pt-4 px-12 flex flex-col gap-4 w-full ">
            <h2 className="text-2xl font-bold font-sans">Gallery</h2>
            <div className="grid grid-cols-3 grid-rows-2 gap-3">
              <img src={sideBarImageOne} className="rounded-lg" />
              <img src={sideBarImageTwo} className="rounded-lg" />
              <img src={sideBarImageThree} className="rounded-lg" />
              <img src={sideBarImageFour} className="rounded-lg" />
              <img src={sideBarImageFive} className="rounded-lg" />
              <img src={sideBarImageSix} className="rounded-lg" />
            </div>
          </div>
          <div className="pt-8 px-12 flex flex-col gap-4 w-full ">
            <h2 className="text-2xl font-bold font-sans">Contact Info</h2>
            <ul className="space-y-4">
              <li className="pt-2 flex gap-4 text-lg items-center">
                <IoLocationOutline className="size-6" /> 59 Street, House SickKT
                City
              </li>
              <li className="flex gap-4 text-lg items-center">
                <LuPhone className="size-6" /> +123-456-789
              </li>
              <li className="flex gap-4 text-lg items-center">
                <AiOutlineMail className="size-6" /> zyzzgym@gmail.com
              </li>
            </ul>
          </div>
          <div className="pt-8 px-12 flex flex-col gap-4 w-full bg-black pb-4">
            <h2 className="text-2xl font-bold font-sans">Socials</h2>
            <div className="flex gap-4 items-center">
              <FaFacebook className="size-8 " />
              <AiFillTwitterCircle className="size-8 " />
              <RiInstagramFill className="size-8" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
