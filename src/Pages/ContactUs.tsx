import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"
import Heroes from "../Components/Heroes"

function ContactUs() {
  return (
    <>
      <Heroes hero={"Contact Us"} />
      <div className="lg:flex lg:items-center lg:justify-center lg:py-12">
        <div className="flex flex-col py-16 gap-4 font-Montserrat  lg:w-1/3">
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl font-semibold px-4">
              We are here to help you shape your dream body.
            </h3>
            <p className="opacity-70 px-4">
              At ZyzzGym, we are dedicated to helping you achieve the body of
              your dreams. Our expert trainers and nutritionists will work with
              you to create a personalized fitness and nutrition plan that helps
              you reach your specific goals.
            </p>
          </div>
          <div className="flex flex-col px-4 lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:w-full lg:place-items-center">
            <div className="flex flex-col pt-8  lg:justify-center lg:items-start lg:w-full">
              <h4 className="font-semibold text-xl pb-1">New York City, USA</h4>{" "}
              <span className="h-1 bg-brightred w-12 z-10 "></span>
              <p className="pt-4 pb-8 opacity-80">
                85 briston Mint Street,
                <br />
                Lodon, E1 9LG, USA
              </p>
            </div>
            <div className="flex flex-col lg:justify-center lg:items-start lg:w-full">
              <h4 className="font-semibold text-xl pb-1">Opening Hours</h4>
              <span className="h-1 bg-brightred w-12 z-10 "></span>
              <p className="pt-4 pb-8 opacity-90  font-bold">24/24 - 7/7</p>
            </div>
            <div className="flex flex-col lg:justify-center lg:items-start lg:w-full">
              <h4 className="font-semibold text-xl pb-1">Information</h4>
              <span className="h-1 bg-brightred w-12 z-10 "></span>
              <p className="pt-4 pb-8 opacity-80">
                +800-123-456
                <br />
                ZyzzGym@zyzz.com
              </p>
            </div>
            <div className="flex flex-col lg:justify-center lg:items-start lg:w-full">
              <h4 className="font-semibold text-xl pb-1">Follow us on</h4>
              <span className="h-1 bg-brightred w-12 z-10 "></span>

              <p className="pt-4 pb-8 opacity-80 flex gap-4">
                <FaFacebook className="size-6" />{" "}
                <FaTwitter className="size-6" />{" "}
                <FaInstagram className="size-6" />{" "}
                <FaTiktok className="size-6" />
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto lg:mx-0 lg:w-1/3">
          <form className="w-11/12 bg-neutral-100 flex flex-col items-center py-8 gap-4">
            <h3 className="text-3xl font-bold">Leave Us Your Infos</h3>
            <span className="h-1 bg-brightred w-12 z-10 -mt-2 "></span>
            <input
              type="text"
              placeholder="Full Name"
              className="w-3/4 p-3 mt-2"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-3/4 p-3 mt-2"
            />
            <select className="w-3/4 p-3 mt-2">
              <option>Sport Interest</option>
              <option>Bodybuilding</option>
              <option>Boxing</option>
              <option>Running</option>
              <option>Fitness</option>
              <option>Yoga</option>
              <option>Street Workout</option>
              <option>Karate</option>
              <option>Meditation</option>
            </select>
            <textarea
              placeholder="Comment"
              className="w-3/4 py-[12px] px-[20px] min-h-[140px] border border-solid border-[#e4e4e4] outline-none mb-8"
            ></textarea>
            <button
              type="submit"
              className="text-white bg-brightred w-1/2 py-[15px] px-[30px] font-bold "
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ContactUs
