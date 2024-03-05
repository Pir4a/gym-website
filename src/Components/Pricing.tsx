import { Link } from "react-router-dom"
import titlebg from "../assets/hero/titlebg.svg"
import image1 from "../assets/pricing/img1.jpg"
import image2 from "../assets/pricing/img2.jpg"
import image3 from "../assets/pricing/img3.jpg"
import { FaArrowRight } from "react-icons/fa"

function Pricing() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <>
      <div className="flex flex-col text-center items-center py-24 bg-[url('/src/assets/pricing/background.jpg')] font-Montserrat ">
        <div className="flex flex-col items-center w-full gap-4">
          <span className="relative w-full flex items-center justify-center">
            <img src={titlebg} />
            <p className="absolute top-[0.5px] left-[42%] text-white font-semibold text-xl">
              Pricing
            </p>
          </span>
          <h3 className="text-3xl font-medium">Exclusive Pricing Plan</h3>
          <p className="opacity-70 font-medium">
            For each needs and budget, a different plan.
          </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-3 place-items-center w-full mt-12 gap-y-8 bg-white">
          <div className="flex flex-col items-center w-11/12 group shadow-lg pb-8">
            <img
              src={image1}
              className="object-cover w-full grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
            />
            <span className="flex justify-center items-center w-1/2 h-12 bg-white -mt-8 z-20 font-bold text-xl">
              <p className="opacity-80">Casual</p>
            </span>
            <h3 className="py-8 bg-white w-full space-x-4 text-xl">
              $ <span className="text-4xl font-bold">39 </span>/ month
            </h3>
            <span className="flex flex-col gap-4 opacity-70 w-full items-center">
              <p>24h Access</p>
              <p>Free Training Plan</p>
              <p>Cardio Zone Acess</p>
            </span>
            <div>
              <Link to="/contact">
                <button
                  className="w-48 h-14 bg-brightred text-white flex justify-center  items-center gap-2 font-semibold mt-8 relative"
                  onClick={scrollToTop}
                >
                  SUBSCRIBE <FaArrowRight className="text-white size-4" />
                  <span className="absolute border-2 opacity-50 border-brightred w-full h-full translate-x-3 -translate-y-3 transition-all duration-300 hover:translate-x-0 hover:translate-y-0"></span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center w-11/12 group shadow-lg pb-8">
            <img
              src={image2}
              className="object-cover w-full grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
            />
            <span className="flex justify-center items-center w-1/2 h-12 bg-white -mt-8 z-20 font-bold text-xl">
              <p className="opacity-80">Advanced</p>
            </span>
            <h3 className="py-8 bg-white w-full space-x-4 text-xl">
              $ <span className="text-4xl font-bold">49 </span>/ month
            </h3>
            <span className="flex flex-col gap-4 opacity-70 w-full items-center">
              <p>Bring one Friend with you</p>
              <p>No subscritions Fees</p>
              <p>Free meal plans</p>
            </span>
            <div>
              <Link to="/contact">
                <button
                  className="w-48 h-14 bg-brightred text-white flex justify-center  items-center gap-2 font-semibold mt-8 relative"
                  onClick={scrollToTop}
                >
                  SUBSCRIBE <FaArrowRight className="text-white size-4" />
                  <span className="absolute border-2 opacity-50 border-brightred w-full h-full translate-x-3 -translate-y-3 transition-all duration-300 hover:translate-x-0 hover:translate-y-0"></span>
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center w-11/12 group shadow-lg pb-8">
            <img
              src={image3}
              className="object-cover w-full grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
            />
            <span className="flex justify-center items-center w-1/2 h-12 bg-white -mt-8 z-20 font-bold text-xl">
              <p className="opacity-80">Pro</p>
            </span>
            <h3 className="py-8 bg-white w-full space-x-4 text-xl">
              $ <span className="text-4xl font-bold">59 </span>/ month
            </h3>
            <span className="flex flex-col gap-4 opacity-70 w-full items-center">
              <p>Bring two friend with you</p>
              <p>Personal Trainer</p>
              <p>Free Sports Drinks</p>
            </span>
            <div>
              <Link to="/contact">
                <button
                  className="w-48 h-14 bg-brightred text-white flex justify-center  items-center gap-2 font-semibold mt-8 relative"
                  onClick={scrollToTop}
                >
                  SUBSCRIBE <FaArrowRight className="text-white size-4" />
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

export default Pricing
