import Heroes from "../Components/Heroes"
import classdata from "../Components/ClassesData"
import { IoPersonOutline } from "react-icons/io5"
import { IoTimeOutline } from "react-icons/io5"
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa"

function ClassesPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <>
      <Heroes hero={"Classes"} />
      <div className="flex flex-col items-center w-11/12 gap-4 mx-auto py-8 font-Montserrat">
        {classdata.map((classes) => (
          <div
            className="min-h-[450px] shadow-lg rounded-lg relative w-full"
            key={classes.activity}
          >
            <img
              src={classes.image}
              className=" min-h-full object-cover rounded-xl absolute"
            />
            <div className="flex flex-col justify-end p-8 min-h-[450px]">
              <h2 className="text-white z-10  text-2xl font-semibold pb-2">
                {classes.activity}
              </h2>
              <span className="h-1 bg-brightred w-24 z-10 "></span>
              <span className="flex items-center pt-4 z-10 gap-4 text-white  font-medium text-sm">
                <p className="flex items-center gap-2 [text-shadow:_0_2px_0px_rgb(0_0_0_/_100%)]">
                  <IoPersonOutline className="size-6" /> {classes.trainer}
                </p>
                <p className="flex items-center gap-2 [text-shadow:_0_2px_0px_rgb(0_0_0_/_100%)]">
                  {" "}
                  <IoTimeOutline className="size-6" /> {classes.time}
                </p>
              </span>
              <div>
                <Link to="/contact">
                  <button
                    className="w-48 h-14 bg-white flex justify-center items-center gap-2 font-semibold mt-8 relative"
                    onClick={scrollToTop}
                  >
                    JOIN NOW <FaArrowRight className="text-red-600 size-4" />
                    <span className="absolute border-2 opacity-50 border-white w-full h-full translate-x-3 -translate-y-3 transition-all duration-300 hover:translate-x-0 hover:translate-y-0"></span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ClassesPage
