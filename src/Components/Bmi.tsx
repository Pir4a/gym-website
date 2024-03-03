import { useState } from "react"

function Bmi() {
  const [weight, setWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBmi] = useState("")
  const [message, setMessage] = useState("")

  let calcBmi = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (weight == "0" || height == "0") {
      alert("Please enter a valid weight and height")
    } else {
      let bmi = Number(weight) / ((Number(height) * Number(height)) / 10000)
      setBmi(bmi.toFixed(1))

      if (bmi < 20) {
        setMessage("Underweight")
      } else if (bmi >= 20 && bmi < 27) {
        setMessage("Normal")
      } else {
        setMessage("Overweight")
      }
    }
  }
  return (
    <>
      <div className="bg-[url('/src/assets/BMI/background.jpg')] py-8  flex flex-col items-center px-4 font-Montserrat">
        <h3 className="text-4xl text-white font-semibold text-left pr-24">
          Let's Calculate Your <span className="text-brightred">BMI</span>
        </h3>
        <p className="font-medium pt-4 text-white">
          Easily determine your BMI ( body mass index ) with our accurate
          calculation tool.
        </p>
        <div className="flex flex-col">
          <form className="flex w-full gap-6 h-[50px] mt-10 ">
            <input
              onChange={(e) => setWeight(e.target.value)}
              className="w-[50%] bg-white text-[14px] border-2 border-[#ffffff7d] pl-6 min450:bg-white min450:text-black"
              type="number"
              placeholder="Weight / kg"
            ></input>
            <input
              onChange={(e) => setHeight(e.target.value)}
              className="w-[50%] bg-white text-[14px] border-2 border-[#ffffff7d] pl-6 min450:bg-white min450:text-black"
              type="number"
              placeholder="Height / cm"
            ></input>
          </form>
          {/* output */}
          <p className="mt-10 gap-3 text-white text-[16px] font-medium flex items-center w-full ">
            <span className="w-1/2">
              Your BMI is: &nbsp;
              <span className="text-[#ff0336]">{bmi}</span>
            </span>
            <span className="w-1/2">
              Your weight is: &nbsp;
              <span className="text-[#ff0336]">{message}</span>
            </span>
          </p>
          <button
            onClick={calcBmi}
            style={{ transition: "all 0.3s" }}
            type="submit"
            className="text-white uppercase font-bold mt-10 bg-[#323232] w-[12rem] h-[4rem] hover:bg-[#FF0336]"
          >
            Calculate
          </button>
        </div>
      </div>
    </>
  )
}

export default Bmi
