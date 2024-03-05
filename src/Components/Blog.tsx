import { Link } from "react-router-dom"
import titlebg from "../assets/hero/titlebg.svg"
import { FaArrowRight } from "react-icons/fa"

function Blog() {
  return (
    <>
      <div className="py-12 flex flex-col gap-4 items-center font-Montserrat">
        <span className="relative">
          <img src={titlebg} className="w-56" />
          <p className="absolute left-[38%] top-[1px] text-2xl text-white font-bold">
            Blog
          </p>
        </span>
        <h3 className="text-4xl font-semibold">Our recent News</h3>
        <p className="opacity-70 font-medium text-center px-8">
          ZyzzGym's own latest blog posts for advices or news about the fitness
        </p>
        <div className="grid w-full grid-rows-3 grid-cols-1 gap-y-8 place-items-center py-4 lg:w-3/4  lg:grid lg:grid-cols-3 lg:grid-rows-1">
          <div className="flex flex-col gap-4 w-11/12 items-start px-12 py-8 shadow-xl lg:min-h-[490px] lg:justify-between">
            <span className="flex  justify-center items-center px-4 py-2 h-8 border-[1px] border-neutral-400 rounded-xl font-medium text-neutral-500">
              03.03.2024
            </span>
            <h3 className="font-semibold text-xl pt-4">
              Yoga For Everyone in 2023
            </h3>
            <p className="opacity-70">
              This is program designed to make the practice of yoga beneficial
              for people of all ages, abilities, and backgrounds.{" "}
            </p>
            <div>
              <Link to="/classes">
                <button className="w-48 h-14 bg-brightred text-white flex justify-center items-center gap-2 font-semibold mt-8 relative">
                  Read More <FaArrowRight className=" size-4 text-white" />
                  <span className="absolute border-2 opacity-50 border-brightred w-full h-full translate-x-3 -translate-y-3 transition-all duration-300 hover:translate-x-0 hover:translate-y-0"></span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-11/12 items-start px-12 py-8 shadow-xl lg:min-h-[490px] lg:justify-between">
            <span className="flex justify-center items-center px-4 py-2 h-8 border-[1px] border-neutral-400 rounded-xl font-medium text-neutral-500">
              02.03.2024
            </span>
            <h3 className="font-semibold text-xl pt-4">
              Is Sam Sulek the GOAT of BodyBuilding ?
            </h3>
            <p className="opacity-70">
              The well known and most influencial bodybuilder right now is
              probably Sam Sulek, you may have seen him in multiple social media
              platform, but is his training good? Is he enhanced? Is chocolate
              milk that good for bulking?{" "}
            </p>
            <div>
              <Link to="/classes">
                <button className="w-48 h-14 bg-brightred text-white flex justify-center items-center gap-2 font-semibold mt-8 relative">
                  Read More <FaArrowRight className="size-4 text-white" />
                  <span className="absolute border-2 opacity-50 border-brightred w-full h-full translate-x-3 -translate-y-3 transition-all duration-300 hover:translate-x-0 hover:translate-y-0"></span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-11/12 items-start px-12 py-8 shadow-xl lg:min-h-[490px] lg:justify-between">
            <span className="flex  justify-center items-center px-4 py-2 h-8 border-[1px] border-neutral-400 rounded-xl font-medium text-neutral-500">
              12.01.2024
            </span>
            <h3 className="font-semibold text-xl pt-4">
              Gael is the best boss fight in Dark Souls 3
            </h3>
            <p className="opacity-70">
              Unrelated to fitness, but Slave Knight Gael is the best boss fight
              in DS3, the music, the building up of the character and universe
              towards its *SPOILERS* ultimate collapse, the true end and
              beginning of Mankind.. And thats without mentionning the perfect
              fight that this battle is.{" "}
            </p>
            <div>
              <Link to="/classes">
                <button className="w-48 h-14 bg-brightred text-white flex justify-center items-center gap-2 font-semibold mt-8 relative">
                  Read More <FaArrowRight className="size-4 text-white" />
                  <span className="absolute border-2 opacity-50 border-brightred w-full h-full translate-x-3 -translate-y-3 transition-all duration-300 hover:translate-x-0 hover:translate-y-0"></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog
