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
          <div className="grid grid-cols-2 place-items-center py-12 gap-4">
            <button
              className=" w-28 h-12 bg-brightred rounded-2xl text-white font-medium"
              onClick={() => setDay(0)}
            >
              Monday
            </button>
            <button
              className=" w-28 h-12 bg-brightred rounded-2xl text-white font-medium"
              onClick={() => setDay(1)}
            >
              Tuesday
            </button>
            <button
              className=" w-28 h-12 bg-brightred rounded-2xl text-white font-medium"
              onClick={() => setDay(2)}
            >
              Wednessday
            </button>
            <button
              className=" w-28 h-12 bg-brightred rounded-2xl text-white font-medium"
              onClick={() => setDay(3)}
            >
              Thirsday
            </button>
            <button
              className=" w-28 h-12 bg-brightred rounded-2xl text-white font-medium"
              onClick={() => setDay(4)}
            >
              Friday
            </button>
            <button
              className=" w-28 h-12 bg-brightred rounded-2xl text-white font-medium"
              onClick={() => setDay(5)}
            >
              Saturday
            </button>
          </div>
          <span className="w-full flex justify-center pb-12">
            <button
              className=" w-28 h-12 bg-brightred rounded-2xl text-white font-medium"
              onClick={() => setDay(6)}
            >
              Sunday
            </button>
          </span>
          <div className="space-y-4 w-11/12 mx-auto">
            <div className="flex flex-col py-8 gap-8 items-center w-full bg-stone-100 ">
              <span className="text-center ">
                <h4 className="opacity-70 font-semibold">Class Name</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classone.name}
                </p>
              </span>
              <span className="text-center pt-4">
                <h4 className="opacity-70 font-semibold">Time</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classone.time}
                </p>
              </span>
              <span className="text-center pt-4">
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
            <div className="flex flex-col py-8 gap-8 items-center w-full bg-stone-100 ">
              <span className="text-center ">
                <h4 className="opacity-70 font-semibold">Class Name</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classtwo.name}
                </p>
              </span>
              <span className="text-center pt-4">
                <h4 className="opacity-70 font-semibold">Time</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classtwo.time}
                </p>
              </span>
              <span className="text-center pt-4">
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
            <div className="flex flex-col py-8 gap-8 items-center w-full bg-stone-100 ">
              <span className="text-center ">
                <h4 className="opacity-70 font-semibold">Class Name</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classthree.name}
                </p>
              </span>
              <span className="text-center pt-4">
                <h4 className="opacity-70 font-semibold">Time</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classthree.time}
                </p>
              </span>
              <span className="text-center pt-4">
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
                  : "flex flex-col py-8 gap-8 items-center w-full bg-stone-100 "
              }
            >
              <span className="text-center ">
                <h4 className="opacity-70 font-semibold">Class Name</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classfour.name}
                </p>
              </span>
              <span className="text-center pt-4">
                <h4 className="opacity-70 font-semibold">Time</h4>
                <p className="text-xl font-bold py-2 ">
                  {SCHEDULE_DATA[day].classfour.time}
                </p>
              </span>
              <span className="text-center pt-4">
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
