import main from "../assets/ChooseUs/main-img.png"
import play from "../assets/ChooseUs/play.png"
import bench from "../assets/ChooseUs/bench-press.png"
import water from "../assets/ChooseUs/bottle-of-water.png"
import bag from "../assets/ChooseUs/gym-bag.png"
import training from "../assets/ChooseUs/training.png"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"
import titlebg from "../assets/hero/titlebg.svg"

function ChoseUs() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <>
      <div className="font-Montserrat bg-[url('/src/assets/ChooseUs/choose-bg.jpg')] py-20 lg:flex lg:justify-center lg:items-center ">
        <div className="flex justify-center relative xl:w-auto lg:w-1/3">
          <img src={main} className="w-80 lg:w-auto " />
          <span className="h-36 lg:h-64 w-[0.6rem] absolute bottom-0 left-4 lg:-left-4 bg-brightred"></span>
          <span className="h-[480px] lg:h-[580px] w-[0.6rem] absolute -bottom-8 -rotate-[6deg] right-[3.25rem] lg:bottom-0 lg:right-0 bg-brightred"></span>
          <span className="absolute top-[40%] p-4 bg-white w-24 h-24 rounded-full">
            <img src={play} className="absolute top-[18%] left-5" />
          </span>
        </div>
        <div className="w-full py-16 flex flex-col gap-4 text-white text-center items-center lg:items-start lg:px-24 xl:w-1/2 lg:w-2/3 lg:max-w-[700px] lg:relative">
          <img
            src={titlebg}
            className=" hidden lg:absolute lg:block top-[75px] left-[71px]"
          />
          <h4 className="text-lg font-semibold lg:text-left lg:py-4 z-10">
            WHY CHOOSE US
          </h4>
          <h3 className="text-3xl font-semibold px-16 lg:text-left lg:px-0 lg:text-4xl">
            We Can Give A Shape To Your Body Here!
          </h3>
          <p className="opacity-70 px-8 lg:px-0 lg:text-left ">
            At <b>ZyzzGym</b>, we are dedicated to helping you achieve the body
            of your dreams. Our expert trainers and nutritionists will work with
            you to create a personalized fitness and nutrition plan that helps
            you reach your specific goals.
          </p>
          <div className="flex flex-col items-center py-8 gap-8 w-full lg:grid lg:grid-cols-2 lg:grid-rows-2">
            <span className="flex items-center gap-8 font-semibold text-lg">
              <img src={training} />
              Free Fitness <br /> Training
            </span>
            <span className="flex items-center gap-8 font-semibold text-lg">
              {" "}
              <img src={bench} />
              Modern Gym <br /> Equipments
            </span>
            <span className="flex items-center gap-8 font-semibold text-lg">
              {" "}
              <img src={bag} />
              Gym Bag <br /> Equipments
            </span>
            <span className="flex items-center gap-8 font-semibold text-lg">
              {" "}
              <img src={water} />
              Fresh Water <br /> Bottle
            </span>
          </div>
          <div className="w-full flex justify-center lg:justify-start">
            <Link to="/classes">
              <button
                className="w-48 h-14 bg-neutral-700 flex justify-center items-center gap-2 font-semibold mt-8 relative"
                onClick={scrollToTop}
              >
                JOIN US <FaArrowRight className="text-red-600 size-4" />
                <span className="absolute border-2 opacity-50 border-neutral-700 w-full h-full translate-x-3 -translate-y-3 transition-all duration-300 hover:translate-x-0 hover:translate-y-0"></span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChoseUs
