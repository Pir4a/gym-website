import { Link } from "react-router-dom"
import title from "../assets/hero/titlebg.svg"
import { FaArrowRight } from "react-icons/fa6"

function Hero() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <div className="w-full h-dvh flex justify-center bg-[url('/src/assets/hero/hero-img.jpg')] bg-cover bg-center font-Montserrat">
      <div className="w-full flex justify-center items-center flex-col gap-8">
        <div className="relative">
          <img src={title} className="title-white w-56" />
          <p className="absolute top-[15%] left-[13%]  font-bold text-black">
            FIND YOUR ENERGY
          </p>
        </div>
        <div className="">
          <h2 className="text-4xl font-medium text-white flex flex-col items-center text-center gap-8 ">
            <span className="font-semibold text-5xl">MAKE YOUR BODY</span> FIT &
            PERFECT
          </h2>
        </div>
        <div>
          <Link to="/classes">
            <button
              className="w-48 h-14 bg-white flex justify-center items-center gap-2 font-semibold mt-8 relative"
              onClick={scrollToTop}
            >
              OUR CLASSES <FaArrowRight className="text-red-600 size-4" />
              <span className="absolute border-2 opacity-50 border-white w-full h-full translate-x-3 -translate-y-3 transition-all duration-300 hover:translate-x-0 hover:translate-y-0"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
