import About from "../Components/About"
import Bmi from "../Components/Bmi"
import ChoseUs from "../Components/ChoseUs"
import Featuredclasses from "../Components/Featuredclasses"

import Hero from "../Components/Hero"
import Pricing from "../Components/Pricing"
import Testimonials from "../Components/Testimonials"
import Trainers from "../Components/Trainers"

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Featuredclasses />
      <ChoseUs />
      <Trainers />
      <Testimonials />
      <Bmi />
      <Pricing />
    </>
  )
}

export default Home
