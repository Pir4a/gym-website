import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"

function Footer() {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-3 place-items-center p-8 font-Montserrat">
        <div>
          <p className="font-medium text-lg text-center">
            Take your health and body to the next level with our comprehensive
            program designed to help you reach your fitness goals.
          </p>
          <span className="flex gap-4 py-4 justify-center">
            <FaFacebook className="size-8" />
            <FaTwitter className="size-8" />
            <FaInstagram className="size-8" />
            <FaTiktok className="size-8" />
          </span>
        </div>
        <div className="flex flex-col gap-1 items-center text-left ">
          <h3 className="font-bold text-xl py-4">Our Classes</h3>
          <span className="border-t-4 border-brightred w-1/3 pb-2 -mt-4"></span>
          <p className="opacity-70 font-medium">Cardio Classes</p>
          <p className="opacity-70 font-medium">Powerlifiting classes</p>
          <p className="opacity-70 font-medium">Bodybuilding classes</p>
          <p className="opacity-70 font-medium">Crossfit classes</p>
          <p className="opacity-70 font-medium">Olympic Lifting classes</p>
        </div>
        <div className="flex flex-col text-left items-center ">
          <h3 className="font-bold text-xl py-4">Working hours</h3>
          <span className="border-t-4 border-brightred w-1/3 pb-2 -mt-2"></span>
          <p className="opacity-70 font-medium">Mon-Sun : 24/7</p>
        </div>
      </div>
    </>
  )
}

export default Footer
