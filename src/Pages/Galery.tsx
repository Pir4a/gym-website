import Heroes from "../Components/Heroes"
import pic1 from "../assets/GalleryPage/2.jpg"
import pic2 from "../assets/GalleryPage/3.jpg"
import pic3 from "../assets/GalleryPage/4.jpg"
import pic4 from "../assets/GalleryPage/5.jpg"
import pic5 from "../assets/GalleryPage/6.jpg"
import pic6 from "../assets/GalleryPage/7.jpg"
import pic7 from "../assets/GalleryPage/8.jpg"
import pic8 from "../assets/GalleryPage/9.jpg"
import pic9 from "../assets/GalleryPage/10.jpg"

function Galery() {
  return (
    <div>
      <Heroes hero={"Gallery"} />
      <div className="grid grid-cols-1 grid-rows-1 w-11/12 mx-auto gap-4 py-12 lg:w-2/3 lg:grid-cols-3 md:w-1/2">
        <img src={pic8} />
        <img src={pic2} />
        <img src={pic4} />
        <img src={pic3} />
        <img src={pic6} />
        <img src={pic5} />
        <img src={pic7} />
        <img src={pic1} />
        <img src={pic9} className="lg:h-full" />
      </div>
    </div>
  )
}

export default Galery
