import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"

function Banner() {
  return (
    <div className="bg-[url('/src/assets/Call/background(1).jpg')] bg-center min-h-72 gap-4 px-12 text-white flex font-Montserrat flex-col justify-center items-start">
      <h3 className="font-semibold text-4xl">Need a Fitness Trainer?</h3>
      <h4 className="font-semibold text-2xl">
        <span className="text-brightred">Call:</span> +123-456-789
      </h4>
      <div>
        <Link to="/classes">
          <button className="w-48 h-14 bg-brightred flex justify-center items-center gap-2 font-semibold mt-8 relative">
            BOOK MEETING
            <FaArrowRight className="text-white size-4" />
            <span className="absolute border-2 opacity-50 border-brightred w-full h-full translate-x-3 -translate-y-3 transition-all duration-300 hover:translate-x-0 hover:translate-y-0"></span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Banner
