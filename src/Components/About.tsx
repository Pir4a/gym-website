import TitleRed from "../assets/who-we-are/title-bg.svg"
import TrainersIcon from "../assets/who-we-are/weightlifter.png"
import ModernIcon from "../assets/who-we-are/equpments.png"
import LiftIcon from "../assets/who-we-are/gym.png"
/*import GirlRunning from "../assets/who-we-are/girl-run.png"
import GirlRedBg from "../assets/who-we-are/girl-redbg.svg"
import GirlText from "../assets/who-we-are/girl-side-text.png"
import GirlWind from "../assets/who-we-are/wind.png"*/
import ProgressionImg from "../assets/who-we-are/progresion.png"
import WorkoutImg from "../assets/who-we-are/workout.png"
import NutritionImg from "../assets/who-we-are/nutritions.png"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"

function About() {
  return (
    <>
      <div className="w-full font-Montserrat  bg-[url('/src/assets/who-we-are/background.jpg')] pb-16">
        <div className="grid grid-cols-1 grid-rows-3 place-items-center w-full gap-24">
          <div
            className="flex flex-col text-center items-center w-[90%] px-6 gap-4 py-8 rounded-tl-[40px] -mt-12  rounded-br-[40px] bg-white shadow-xl
           hover:bg-[url('/src/assets/who-we-are/info-card-bg.jpg')] hover:text-white transition-all duration-300 "
          >
            <img src={ProgressionImg} />
            <h2 className="font-semibold text-2xl">PROGRESSION</h2>
            <p className="font-medium">
              Our team of experts will work with you to create a customized plan
              that helps you achieve success one step at a time.
            </p>
          </div>
          <div
            className="flex flex-col text-center items-center w-[90%] px-6 gap-4 py-8 rounded-tl-[40px] -mt-12  rounded-br-[40px] bg-white shadow-xl
          hover:bg-[url('/src/assets/who-we-are/info-card-bg.jpg')] hover:text-white transition-all duration-300 "
          >
            <img src={WorkoutImg} />
            <h2 className="font-semibold text-2xl">WORKOUT</h2>
            <p className="font-medium">
              With a variety of workouts to choose from, you'll have everything
              you need to get into the best shape of your life.
            </p>
          </div>
          <div
            className="flex flex-col text-center items-center w-[90%] px-6 gap-4 py-8 rounded-tl-[40px] -mt-12  rounded-br-[40px] bg-white shadow-xl 
          hover:bg-[url('/src/assets/who-we-are/info-card-bg.jpg')] hover:text-white transition-all duration-300"
          >
            <img src={NutritionImg} />
            <h2 className="font-semibold text-2xl">NUTRITIONS</h2>
            <p className="font-medium">
              Our team will work with you to create a personalized meal plan
              that helps you reach your specific health goals.
            </p>
          </div>
        </div>
        <div className="py-12">
          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="relative">
              <img src={TitleRed} className="w-64 relative"></img>
              <p className="absolute top-[20%] left-[30%] text-white font-semibold">
                WHO WE ARE
              </p>
            </div>
            <h2 className="text-center font-semibold text-4xl px-8">
              Take Your Health And Body To Next Level
            </h2>
            <p className="opacity-70 text-center -mt-4 px-4">
              Take your health and body to the next level with our comprehensive
              program designed to help you reach your fitness goals.
            </p>
            <div className="flex flex-col gap-8 w-full items-center py-4">
              <span className="flex flex-col gap-4 items-center font-semibold text-center text-xl">
                <img src={TrainersIcon} className="size-14" />
                <h3>
                  PROFESSIONAL <br /> TRAINERS
                </h3>
              </span>{" "}
              <span className="flex flex-col gap-4 items-center font-semibold text-center text-xl">
                <img src={ModernIcon} className="size-14" />
                <h3>
                  MODERN <br /> EQUIPMENTS
                </h3>{" "}
              </span>
              <span className="flex flex-col gap-4 items-center font-semibold text-center text-xl">
                <img src={LiftIcon} className="size-14" />
                <h3>
                  FANCY GYM <br /> MACHINES
                </h3>{" "}
              </span>
            </div>
            <div>
              <Link to="/classes">
                <button className="w-48 h-14 bg-zinc-500 flex justify-center items-center gap-2 font-semibold mt-8 relative text-white">
                  TAKE A TOUR <FaArrowRight className="text-red-600 size-4" />
                  <span className="absolute border-2 opacity-50 border-zinc-500 w-full h-full translate-x-3 -translate-y-3 transition-all duration-300 hover:translate-x-0 hover:translate-y-0"></span>
                </button>
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default About
