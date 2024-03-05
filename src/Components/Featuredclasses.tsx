import title from "../assets/hero/titlebg.svg"
import cyclist from "../assets/Features/cycling.jpg"
import karate from "../assets/Features/karate.jpg"
import power from "../assets/Features/power.jpg"
import meditate from "../assets/Features/meditation.jpg"
import martialarts from "../assets/Features/mma.jpg"
import crossfit from "../assets/Features/workout.jpg"
import { BiCycling } from "react-icons/bi"
import { TbKarate } from "react-icons/tb"
import { FaArrowRight, FaDumbbell } from "react-icons/fa"
import { GiBoxingGlove, GiJumpingRope, GiMeditation } from "react-icons/gi"
import cta from "../assets/Features/cta-bg.png"
import { Link } from "react-router-dom"

function Featuredclasses() {
  return (
    <>
      <div className="w-full flex flex-col items-center pt-16 font-Montserrat">
        <div className="flex flex-col items-center gap-4">
          <span className="relative">
            <img src={title} className="w-64" />
            <p className="absolute top-[20%] left-[10%] text-white font-bold text-lg">
              OUR FEATURED CLASS
            </p>
          </span>
          <h3 className="text-4xl text-center px-8 font-bold leading-[50px]">
            We Are Offering Best Flexible Classes
          </h3>
        </div>
        <div className="grid grid-cols-1 grid-rows-6 w-full place-items-center py-12 pb-16 gap-y-4 lg:grid-cols-4 lg:grid-rows-2 xl:w-3/4">
          <div className="w-11/12 relative h-72 py-4 overflow-hidden group lg:col-span-2 lg:w-[96%]">
            <img
              src={cyclist}
              className="object-cover object-center min-h-full hover:scale-[1.4] absolute top-0 right-0 left-0 bottom-0
               grayscale-[1] hover:grayscale-[0] transition-all duration-500 ease-in-out"
            />
            <h3 className="text-white font-semibold text-3xl z-30 absolute left-6 bottom-14">
              Cycling
            </h3>
            <p className="h-8 w-2/3 z-30 absolute left-6 bottom-4 bg-brightred flex items-center justify-center font-light text-white">
              Wednesday: 9:00am-10:00am
            </p>
            <span className="rounded-full rotate-[30deg] h-16 w-32 absolute top-20 -left-12 bg-white opacity-30 group-hover:opacity-90 duration-500 ease-in-out"></span>
            <BiCycling className="absolute top-[6.7rem] size-9 left-6 text-white group-hover:text-brightred transition-all duration-500 ease-in-out " />
          </div>
          <div className="w-11/12 relative h-72 py-4 overflow-hidden group ">
            <img
              src={karate}
              className="object-cover object-center min-h-full hover:scale-[1.4] absolute top-0 right-0 left-0 bottom-0
               grayscale-[1] hover:grayscale-[0] transition-all duration-500 ease-in-out"
            />
            <h3 className="text-white font-semibold text-3xl z-30 absolute left-6 bottom-14">
              Karate
            </h3>
            <p className="h-8 w-2/3 z-30 absolute left-6 bottom-4 bg-brightred flex items-center justify-center font-light text-white">
              Friday: 10:00am-11:00am
            </p>
            <span className="rounded-full rotate-[30deg] h-16 w-32 absolute top-20 -left-12 bg-white opacity-30 group-hover:opacity-90 duration-500 ease-in-out"></span>
            <TbKarate className="absolute top-[6.7rem] size-9 left-6 text-white group-hover:text-brightred transition-all duration-500 ease-in-out " />
          </div>
          <div className="w-11/12 relative h-72 py-4 overflow-hidden group ">
            <img
              src={power}
              className="object-cover object-center min-h-full hover:scale-[1.4] absolute top-0 right-0 left-0 bottom-0
               grayscale-[1] hover:grayscale-[0] transition-all duration-500 ease-in-out"
            />
            <h3 className="text-white font-semibold text-3xl z-30 absolute left-6 bottom-14">
              Power
            </h3>
            <p className="h-8 w-2/3 z-30 absolute left-6 bottom-4 bg-brightred flex items-center justify-center font-light text-white">
              Saturday: 9:00am-10:00am
            </p>
            <span className="rounded-full rotate-[30deg] h-16 w-32 absolute top-20 -left-12 bg-white opacity-30 group-hover:opacity-90 duration-500 ease-in-out"></span>
            <FaDumbbell className="absolute top-[6.7rem] size-9 left-6 text-white group-hover:text-brightred transition-all duration-500 ease-in-out " />
          </div>
          <div className="w-11/12 relative h-72 py-4 overflow-hidden group ">
            <img
              src={meditate}
              className="object-cover object-center min-h-full hover:scale-[1.4] absolute top-0 right-0 left-0 bottom-0
               grayscale-[1] hover:grayscale-[0] transition-all duration-500 ease-in-out"
            />
            <h3 className="text-white font-semibold text-3xl z-30 absolute left-6 bottom-14">
              Meditation
            </h3>
            <p className="h-8 w-2/3 z-30 absolute left-6 bottom-4 bg-brightred flex items-center justify-center font-light text-white">
              Sunday: 1:00pm-2:00pm
            </p>
            <span className="rounded-full rotate-[30deg] h-16 w-32 absolute top-20 -left-12 bg-white opacity-30 group-hover:opacity-90 duration-500 ease-in-out"></span>
            <GiMeditation className="absolute top-[6.7rem] size-9 left-6 text-white group-hover:text-brightred transition-all duration-500 ease-in-out " />
          </div>
          <div className="w-11/12 relative h-72 py-4 overflow-hidden group ">
            <img
              src={martialarts}
              className="object-cover object-center min-h-full hover:scale-[1.4] absolute top-0 right-0 left-0 bottom-0
               grayscale-[1] hover:grayscale-[0] transition-all duration-500 ease-in-out"
            />
            <h3 className="text-white font-semibold text-3xl z-30 absolute left-6 bottom-14">
              MMA
            </h3>
            <p className="h-8 w-2/3 z-30 absolute left-6 bottom-4 bg-brightred flex items-center justify-center font-light text-white">
              Tuesday: 9:00am-11:00am
            </p>
            <span className="rounded-full rotate-[30deg] h-16 w-32 absolute top-20 -left-12 bg-white opacity-30 group-hover:opacity-90 duration-500 ease-in-out"></span>
            <GiBoxingGlove className="absolute top-[6.7rem] size-9 left-6 text-white group-hover:text-brightred transition-all duration-500 ease-in-out " />
          </div>
          <div className="w-11/12 relative h-72 py-4 overflow-hidden group lg:col-span-2 lg:w-[96%]">
            <img
              src={crossfit}
              className="object-cover object-center min-h-full hover:scale-[1.4] absolute top-0 right-0 left-0 bottom-0
               grayscale-[1] hover:grayscale-[0] transition-all duration-500 ease-in-out"
            />
            <h3 className="text-white font-semibold text-3xl z-30 absolute left-6 bottom-14">
              Crossfit
            </h3>
            <p className="h-8 w-2/3 z-30 absolute left-6 bottom-4 bg-brightred flex items-center justify-center font-light text-white">
              Monday: 4:00pm-5:00pm
            </p>
            <span className="rounded-full rotate-[30deg] h-16 w-32 absolute top-20 -left-12 bg-white opacity-30 group-hover:opacity-90 duration-500 ease-in-out"></span>
            <GiJumpingRope className="absolute top-[6.7rem] size-9 left-6 text-white group-hover:text-brightred transition-all duration-500 ease-in-out " />
          </div>
        </div>
        <div className="w-full  min-h-48 bg-brightred text-center px-12 py-4">
          <img src={cta} className="hidden" />
          <h3 className="text-white text-2xl font-semibold">
            We Are Always Providing Best Fitness Service For You
          </h3>
          <div className="w-full flex justify-center">
            <Link to="/classes">
              <button className="w-48 h-14 bg-white flex justify-center items-center gap-2 font-semibold mt-8 relative">
                JOIN US <FaArrowRight className="text-red-600 size-4" />
                <span className="absolute border-2 opacity-50 border-white w-full h-full translate-x-3 -translate-y-3 transition-all duration-300 hover:translate-x-0 hover:translate-y-0"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Featuredclasses
