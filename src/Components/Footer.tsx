import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-3 place-items-center p-8 font-Montserrat lg:grid-cols-3 lg:grid-rows-1 lg:w-2/3 lg:mx-auto">
        <div className="">
          <p className="font-medium text-lg text-center lg:text-left">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <span className="flex gap-4 py-4 justify-center lg:justify-start">
            <FaFacebook className="size-8" />
            <FaTwitter className="size-8" />
            <FaInstagram className="size-8" />
            <FaTiktok className="size-8" />
          </span>
        </div>
        <div className="flex flex-col gap-1 items-center text-left lg:items-start ">
          <h3 className="font-bold text-xl py-4">Our Classes</h3>
          <span className="border-t-4 border-brightred w-1/3 pb-2 -mt-4"></span>
          <Link to={"/classes"}>
            <p className="opacity-70 font-medium hover:text-brightred hover:scale-110 hover:font-bold transition-all duration-200 ease-in-out">
              Cardio Classes
            </p>
          </Link>{" "}
          <Link to={"/classes"}>
            <p className="opacity-70 font-medium hover:text-brightred hover:scale-110 hover:font-bold transition-all duration-200 ease-in-out">
              Powerlifiting classes
            </p>{" "}
          </Link>
          <Link to={"/classes"}>
            <p className="opacity-70 font-medium hover:text-brightred hover:scale-110 hover:font-bold transition-all duration-200 ease-in-out">
              Bodybuilding classes
            </p>{" "}
          </Link>
          <Link to={"/classes"}>
            <p className="opacity-70 font-medium hover:text-brightred hover:scale-110 hover:font-bold transition-all duration-200 ease-in-out">
              Crossfit classes
            </p>
          </Link>{" "}
          <Link to={"/classes"}>
            <p className="opacity-70 font-medium hover:text-brightred hover:scale-110 hover:font-bold transition-all duration-200 ease-in-out">
              Olympic Lifting classes
            </p>
          </Link>
        </div>
        <div className="flex flex-col text-left items-center lg:items-start lg:h-full">
          <h3 className="font-bold text-xl py-4">Working hours</h3>
          <span className="border-t-4 border-brightred w-1/3 pb-2 -mt-2"></span>
          <p className="opacity-70 font-medium">Mon-Sun : 24/7</p>
        </div>
      </div>
    </>
  )
}

export default Footer
