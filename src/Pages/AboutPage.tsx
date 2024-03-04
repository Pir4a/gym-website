import { Link } from "react-router-dom"
import Heroes from "../Components/Heroes"
import titlebg from "../assets/hero/titlebg.svg"
import { FaArrowRight } from "react-icons/fa"
import moutain from "../assets/AboutPage/mountain.png"
import goal from "../assets/AboutPage/target.png"
import image1 from "../assets/AboutPage/3.jpg"
import image2 from "../assets/AboutPage/4.jpg"

function AboutPage() {
  return (
    <>
      <div className="bg-[url('/src/assets/pricing/background.jpg')] py-12">
        <Heroes hero={"About Us"} />
        <div className="flex flex-col gap-4 items-center w-full text-center py-12 font-Montserrat ">
          <span className="relative">
            <img src={titlebg} className="w-56" />
            <p className="font-semibold text-xl text-white absolute top-1 left-[20%]">
              WHO WE ARE
            </p>
          </span>
          <h3 className="font-semibold text-4xl px-8">
            We will Give You Stregnth and Health
          </h3>
          <p className="opacity-70 font-medium px-10">
            At ZyzzGym, we are dedicated to helping you achieve the body of your
            dreams. Our expert trainers and nutritionists will work with you to
            create a personalized fitness and nutrition plan that helps you
            reach your specific goals.
          </p>
          <div>
            <Link to="/classes">
              <button className="w-48 h-14 bg-brightred flex justify-center items-center gap-2 font-semibold text-white mt-8 relative">
                CONTACT US
                <FaArrowRight className="text-white size-4" />
                <span className="absolute border-2 opacity-50 border-brightred w-full h-full translate-x-3 -translate-y-3 transition-all duration-300 hover:translate-x-0 hover:translate-y-0"></span>
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-1 w-11/12 mx-auto place-items-center font-Montserrat py-8">
          <div className="flex flex-col items-center gap-4 w-full py-8 bg-white">
            <img src={goal} className="size-24" />
            <h3 className="font-bold text-4xl">Our Goal</h3>
            <p className="text-center opacity-70 px-4">
              ZyzzGym's mission is to empower individuals on their fitness
              journey through community, support, and cutting-edge facilities.
              We strive to inspire ambitious goals, push limits, and celebrate
              achievements. Our focus is on accessibility, enjoyment, and
              fostering a culture of personal growth and transformation for all
              members.
            </p>
          </div>
          <div className="w-full">
            <img src={image1} className="w-full h-full" />
          </div>
          <div className="flex flex-col items-center gap-4 w-full py-8 bg-white">
            <img src={moutain} className="size-24" />
            <h3 className="font-bold text-4xl">Our Story</h3>
            <p className="text-center opacity-70 px-4">
              ZyzzGym was founded in 2010 by fitness enthusiasts inspired by the
              legacy of bodybuilder Aziz Sergeyevich Shavershian, known as Zyzz.
              Starting as a modest establishment, it rapidly expanded due to its
              inclusive atmosphere and cutting-edge facilities. Today, it stands
              as a symbol of empowerment and transformation in the fitness
              community.
            </p>
          </div>
          <div className="w-full">
            <img src={image2} className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutPage
