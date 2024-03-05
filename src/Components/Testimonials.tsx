import { useState } from "react"
import title from "../assets/hero/titlebg.svg"
import quotes from "../assets/testimonials/quotes.png"
import bike from "../assets/testimonials/testimonial-shape.svg"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import logo1 from "../assets/testimonials/logo1.png"
import logo2 from "../assets/testimonials/logo2.png"
import logo3 from "../assets/testimonials/logo3.png"
import logo4 from "../assets/testimonials/logo4.png"
import logo5 from "../assets/testimonials/logo5.png"
import woman from "../assets/testimonials/woman.jpg"
import sam from "../assets/testimonials/sam.jpg"
import bb from "../assets/testimonials/bbjpg.jpg"

function Testimonials() {
  const [testimonial, setTestimonial] = useState(0)

  function previousTestimonial() {
    if (testimonial == 0) return
    setTestimonial(testimonial - 1)
  }

  function nextTestimonial() {
    if (testimonial == 2) return
    setTestimonial(testimonial + 1)
  }

  return (
    <>
      <div className="w-full flex flex-col items-center relative font-Montserrat gap-16 ">
        <img src={title} />
        <p className="text-white font-semibold text-xl absolute top-1 left-[47%]">
          Testimonials
        </p>
        <div
          className="bg-black flex flex-col overflow-hidden lg:overflow-visible gap-4 lg:gap-8 lg:items-center text-white px-8 pt-8 py-4 w-2/3
         relative outline outline-offset-[1.75rem] outline-8 outline-neutral-200 shadow-lg lg:flex-row"
        >
          <div
            className={`hidden lg:flex overflow-hidden lg:w-[30%] rounded z-10   transition-all duration-300`}
          >
            <img
              src={sam}
              className={`lg:w-full z-10 flex-grow-0 flex-shrink-0 object-cover  transition-all duration-300 ${
                testimonial == 1 ? "translate-x-[calc(100%)]" : ""
              } `}
            />{" "}
            <img
              src={bb}
              className={`lg:w-full z-10 flex-grow-0 flex-shrink-0 object-cover  transition-all duration-300 ${
                testimonial == 1 ? "-translate-x-[calc(100%)]" : ""
              } `}
            />
            <img
              src={woman}
              className={`lg:w-full z-10 flex-grow-0 flex-shrink-0 object-cover  transition-all duration-300 ${
                testimonial == 2 ? "-translate-x-[calc(200%)]" : ""
              } `}
            />
          </div>
          <div className="flex flex-col gap-4 lg:w-2/3 lg:overflow-hidden">
            <img src={quotes} className="w-16 h-14" />
            <div
              className={`opacity-70 flex gap-12 w-full  transition-all duration-300 ${
                testimonial == 2
                  ? "-translate-x-[calc(200%+6rem)]"
                  : testimonial == 1
                  ? "-translate-x-[calc(100%+3rem)]"
                  : ""
              }`}
            >
              <p className="min-w-full">
                “I've been a member of ZyzzGym for the past 6 months and it has
                been an amazing experience. The trainers are knowledgeable and
                supportive, the equipment is top-notch, and the community of
                members is friendly and encouraging.”
              </p>
              <p className="min-w-full">
                “I've been sweating it out at ZyzzGym for the last year, and
                it's been nothing short of fantastic. The trainers not only know
                their stuff but also genuinely care about my progress. The
                equipment is always in pristine condition.”
              </p>
              <p className="min-w-full">
                “ZyzzGym has become my go-to spot for fitness, and it's been a
                game-changer. The trainers are incredibly supportive and
                knowledgeable, the equipment is top-notch, and the community
                vibe is like no other gym I've experienced.”
              </p>
            </div>
            <div className="flex items-center justify-between pt-2 z-10">
              <span className="overflow-hidden w-40 ">
                <span
                  className={`flex transition-all duration-300 ${
                    testimonial == 2
                      ? "-translate-x-[200%]"
                      : testimonial == 1
                      ? "-translate-x-[100%]"
                      : ""
                  }`}
                >
                  <h3 className="text-xl font-semibold min-w-full ">
                    Sam Sulek
                  </h3>
                  <h3 className="text-xl font-semibold min-w-full">
                    Bad Bunny
                  </h3>
                  <h3 className="text-xl font-semibold min-w-full">RosaMia</h3>
                </span>
                <span
                  className={`flex transition-all duration-300 ${
                    testimonial == 2
                      ? "-translate-x-[200%]"
                      : testimonial == 1
                      ? "-translate-x-[100%]"
                      : ""
                  }`}
                >
                  <p className="opacity-70 min-w-full">Fitness Influencer</p>
                  <p className="opacity-70 min-w-full">Reggaeton Goat</p>
                  <p className="opacity-70 min-w-full">Very Pretty Woman</p>
                </span>
              </span>
              <span className="flex gap-4 pt-2">
                <BsArrowLeft
                  className="size-5 cursor-pointer hover:text-brightred"
                  onClick={previousTestimonial}
                />
                <BsArrowRight
                  className="size-5 cursor-pointer hover:text-brightred"
                  onClick={nextTestimonial}
                />
              </span>
            </div>
            <img
              src={bike}
              className="opacity-80 w-24 h-28 z-50 absolute bottom-0 left-0"
            />
          </div>
        </div>
        <div className="flex flex-col items-center w-full justify-center gap-8 py-12 lg:flex-row lg:py-24">
          <img src={logo1} className="w-44" />
          <img src={logo2} className="w-44" />
          <img src={logo3} className="w-44" />
          <img src={logo4} className="w-44" />
          <img src={logo5} className="w-44" />
        </div>
      </div>
    </>
  )
}

export default Testimonials
