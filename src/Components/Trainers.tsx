import TitleRed from "../assets/who-we-are/title-bg.svg"
import shape from "../assets/trainers/shape.png"
import trainer1 from "../assets/trainers/trainer1.png"
import trainer2 from "../assets/trainers/trainer2.png"
import trainer3 from "../assets/trainers/trainer3.png"
import { SlArrowUp } from "react-icons/sl"
import { FaFacebook, FaInstagram, FaMailchimp, FaTwitter } from "react-icons/fa"

function Trainers() {
  return (
    <>
      <div className="bg-[url('/src/assets/trainers/dot-bg.png')] bg-center  py-24 font-Montserrat">
        <div className="w-full flex flex-col items-center py-4">
          <span className="relative">
            <img src={TitleRed} className="w-56" />
            <p className="absolute top-[10%] left-[16%] text-white font-bold text-xl">
              GYM TRAINERS
            </p>
          </span>
          <h3 className="text-4xl font-bold text-center pt-4 leading-[3rem]">
            Team Of Expert <br /> Coaches
          </h3>
          <p className="opacity-70 font-medium text-center px-8 pt-4">
            Expert team of coaches helps you succeed in any goal, personalized
            guidance and motivation provided!
          </p>
        </div>
        <div className="grid grid-cols-1 py-8 grid-rows-3 place-items-center  w-11/12 gap-y-12 mx-auto">
          <div className="flex flex-col w-full items-center group">
            <div className="max-h-[250px] w-full overflow-hidden relative justify-center items-center bg-[url('/src/assets/trainers/trainer-bg.png')] bg-no-repeat bg-cover">
              <img
                src={trainer1}
                className=" w-56 mx-auto grayscale group-hover:grayscale-0  transition-all duration-300 ease-in-out"
              />
              <img
                src={shape}
                className="absolute -bottom-2 left-[33%] w-32 h-[2.5rem]"
              />
              <SlArrowUp className="absolute bottom-1 left-[46.5%] size-5" />
            </div>
            <div className="pt-4 min-h-28 gap-1 shadow-lg w-full flex flex-col items-center">
              <h3 className="text-xl font-semibold">John Lewis</h3>
              <p className="opacity-70">Yoga Trainer</p>
              <span className="flex gap-4 py-2">
                <FaFacebook /> <FaTwitter /> <FaInstagram /> <FaMailchimp />
              </span>
              <span className=" border-[3px] border-b-brightred w-2/12 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </div>
          </div>
          <div className="flex flex-col w-full items-center group">
            <div className="max-h-[250px] w-full overflow-hidden relative justify-center items-center bg-[url('/src/assets/trainers/trainer-bg.png')] bg-no-repeat bg-cover">
              <img
                src={trainer2}
                className=" w-56 mx-auto grayscale group-hover:grayscale-0  transition-all duration-300 ease-in-out"
              />
              <img
                src={shape}
                className="absolute -bottom-2 left-[33%] w-32 h-[2.5rem]"
              />
              <SlArrowUp className="absolute bottom-1 left-[46.5%] size-5" />
            </div>
            <div className="pt-4 min-h-28 gap-1 shadow-lg w-full flex flex-col items-center">
              <h3 className="text-xl font-semibold">Johnatahn Doe</h3>
              <p className="opacity-70">Crossfit Trainer</p>
              <span className="flex gap-4 py-2">
                <FaFacebook /> <FaTwitter /> <FaInstagram /> <FaMailchimp />
              </span>
              <span className=" border-[3px] border-b-brightred w-2/12 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </div>
          </div>
          <div className="flex flex-col w-full items-center group">
            <div className="max-h-[250px] w-full overflow-hidden relative justify-center items-center bg-[url('/src/assets/trainers/trainer-bg.png')] bg-no-repeat bg-cover">
              <img
                src={trainer3}
                className=" w-56 mx-auto grayscale group-hover:grayscale-0  transition-all duration-300 ease-in-out"
              />
              <img
                src={shape}
                className="absolute -bottom-2 left-[33%] w-32 h-[2.5rem]"
              />
              <SlArrowUp className="absolute bottom-1 left-[46.5%] size-5" />
            </div>
            <div className="pt-4 min-h-28 gap-1 shadow-lg w-full flex flex-col items-center">
              <h3 className="text-xl font-semibold">Ana June</h3>
              <p className="opacity-70">Powerlifting Trainer</p>
              <span className="flex gap-4 py-2">
                <FaFacebook /> <FaTwitter /> <FaInstagram /> <FaMailchimp />
              </span>
              <span className=" border-[3px] border-b-brightred w-2/12 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Trainers
