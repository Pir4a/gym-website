import TitleRed from "../assets/who-we-are/title-bg.svg"
import shape from "../assets/trainers/shape.png"
import trainer1 from "../assets/trainers/trainer1.png"
import trainer2 from "../assets/trainers/trainer2.png"
import trainer3 from "../assets/trainers/trainer3.png"

function Trainers() {
  return (
    <>
      <div className="bg-[url('/src/assets/trainers/dot-bg.png')] bg-center bg- h-96 py-24 font-Montserrat">
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
        <div className="grid grid-cols-1 grid-rows-3 place-items-center w-11/12 gap-y-4 mx-auto">
          <div className="flex flex-col w-full items-center">
            <div className="max-h-[250px] w-full overflow-hidden justify-center items-center bg-[url('/src/assets/trainers/trainer-bg.png')] bg-[100px_50px]">
              <img src={trainer1} className=" w-56 mx-auto" />
            </div>
            razjrajzi
          </div>
        </div>
      </div>
    </>
  )
}

export default Trainers
