import { useState } from "react"
import Heroes from "../Components/Heroes"
import SCHEDULE_DATA from "../Components/ScheduleData"

function Schedule() {
  const [day, setDay] = useState(0)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
  }

  return (
    <div className="py-12">
      <Heroes hero={"Schedule"} />
      <div className="flex flex-col items-center w-full">
        <div className="w-full">
          <div className="grid grid-cols-2 place-items-center py-12 gap-4 lg:w-3/5 lg:mx-auto lg:grid-rows-1 lg:grid-cols-7 lg:gap-0">
            <button
              className={`w-32 h-12  text-black hover:text-white transition-all border-[1px] border-slate-300 duration-300 hover:bg-brightred rounded-2xl font-medium
               ${day == 0 ? "bg-brightred text-white" : "bg-white"}`}
              onClick={() => setDay(0)}
            >
              Monday
            </button>
            <button
              className={` w-32 h-12  text-black hover:text-white transition-all border-[1px] border-slate-300 duration-300 hover:bg-brightred rounded-2xl font-medium ${
                day == 1 ? "bg-brightred text-white" : "bg-white"
              }`}
              onClick={() => setDay(1)}
            >
              Tuesday
            </button>
            <button
              className={` w-32 h-12  text-black hover:text-white transition-all border-[1px] border-slate-300 duration-300 hover:bg-brightred rounded-2xl font-medium ${
                day == 2 ? "bg-brightred text-white" : "bg-white"
              }`}
              onClick={() => setDay(2)}
            >
              Wednessday
            </button>
            <button
              className={` w-32 h-12  text-black hover:text-white transition-all border-[1px] border-slate-300 duration-300 hover:bg-brightred rounded-2xl font-medium ${
                day == 3 ? "bg-brightred text-white" : "bg-white"
              }`}
              onClick={() => setDay(3)}
            >
              Thirsday
            </button>
            <button
              className={` w-32 h-12  text-black hover:text-white transition-all border-[1px] border-slate-300 duration-300 hover:bg-brightred rounded-2xl font-medium ${
                day == 4 ? "bg-brightred text-white" : "bg-white"
              }`}
              onClick={() => setDay(4)}
            >
              Friday
            </button>
            <button
              className={` w-32 h-12  text-black hover:text-white transition-all border-[1px] border-slate-300 duration-300 hover:bg-brightred rounded-2xl font-medium ${
                day == 5 ? "bg-brightred text-white" : "bg-white"
              }`}
              onClick={() => setDay(5)}
            >
              Saturday
            </button>
            <span className="w-full flex justify-center pb-0">
              <button
                className={` w-32 h-12  text-black hover:text-white transition-all border-[1px] border-slate-300 duration-300 hover:bg-brightred rounded-2xl font-medium ${
                  day == 6 ? "bg-brightred text-white" : "bg-white"
                }`}
                onClick={() => setDay(6)}
              >
                Sunday
              </button>
            </span>
          </div>

          <div className="space-y-4 w-11/12 mx-auto lg:w-full lg:flex lg:flex-col lg:items-center">
            <div className="flex flex-col py-8 gap-8 items-center w-full bg-stone-100 lg:w-3/5 lg:flex-row lg:gap-8 lg:justify-center lg:py-4 lg:px-0 lg:items-center">
              <span className="text-center lg:w-1/4">
                <h4 className="opacity-70 font-semibold">Class Name</h4>
                <p className="text-xl font-bold py-2 lg:pt-0">
                  {SCHEDULE_DATA[day].classone.name}
                </p>
              </span>
              <span className="text-center pt-4 lg:pt-0 lg:w-1/4">
                <h4 className="opacity-70 font-semibold">Time</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classone.time}
                </p>
              </span>
              <span className="text-center pt-4 lg:pt-0 lg:w-1/4">
                <h4 className="opacity-70 font-semibold">Trainer</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classone.trainer}
                </p>
              </span>

              <button
                className=" w-28 h-12 bg-neutral-500 rounded-2xl text-white font-medium"
                onClick={scrollToTop}
              >
                Join Now
              </button>
            </div>{" "}
            <div className="flex flex-col py-8 gap-8 items-center w-full bg-stone-100  lg:w-3/5 lg:flex-row lg:gap-8 lg:justify-center lg:py-4 lg:px-0 lg:items-center">
              <span className="text-center lg:w-1/4">
                <h4 className="opacity-70 font-semibold">Class Name</h4>
                <p className="text-xl font-bold py-2 lg:py-0 ">
                  {SCHEDULE_DATA[day].classtwo.name}
                </p>
              </span>
              <span className="text-center pt-4 lg:pt-0 lg:w-1/4">
                <h4 className="opacity-70 font-semibold">Time</h4>
                <p className="text-xl font-bold py-2 lg:py-0">
                  {SCHEDULE_DATA[day].classtwo.time}
                </p>
              </span>
              <span className="text-center pt-4 lg:pt-0 lg:w-1/4">
                <h4 className="opacity-70 font-semibold">Trainer</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classtwo.trainer}
                </p>
              </span>

              <button
                className=" w-28 h-12 bg-neutral-500 rounded-2xl text-white font-medium"
                onClick={scrollToTop}
              >
                Join Now
              </button>
            </div>
            <div className="flex flex-col py-8 gap-8 items-center w-full bg-stone-100  lg:w-3/5 lg:flex-row lg:gap-8 lg:justify-center lg:py-4 lg:px-0 lg:items-center">
              <span className="text-center lg:w-1/4">
                <h4 className="opacity-70 font-semibold">Class Name</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classthree.name}
                </p>
              </span>
              <span className="text-center pt-4 lg:pt-0 lg:w-1/4">
                <h4 className="opacity-70 font-semibold">Time</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classthree.time}
                </p>
              </span>
              <span className="text-center pt-4 lg:pt-0 lg:w-1/4">
                <h4 className="opacity-70 font-semibold">Trainer</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classthree.trainer}
                </p>
              </span>

              <button
                className=" w-28 h-12 bg-neutral-500 rounded-2xl text-white font-medium"
                onClick={scrollToTop}
              >
                Join Now
              </button>
            </div>
            <div
              className={
                SCHEDULE_DATA[day].classfour.name == ""
                  ? "hidden"
                  : "flex flex-col py-8 gap-8 items-center w-full bg-stone-100  lg:w-3/5 lg:flex-row lg:gap-8 lg:justify-center lg:py-4 lg:px-0 lg:items-center"
              }
            >
              <span className="text-center lg:w-1/4">
                <h4 className="opacity-70 font-semibold">Class Name</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classfour.name}
                </p>
              </span>
              <span className="text-center pt-4 lg:pt-0 lg:w-1/4">
                <h4 className="opacity-70 font-semibold">Time</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classfour.time}
                </p>
              </span>
              <span className="text-center pt-4 lg:pt-0 lg:w-1/4">
                <h4 className="opacity-70 font-semibold">Trainer</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classfour.trainer}
                </p>
              </span>

              <button
                className=" w-28 h-12 bg-neutral-500 rounded-2xl text-white font-medium"
                onClick={scrollToTop}
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
