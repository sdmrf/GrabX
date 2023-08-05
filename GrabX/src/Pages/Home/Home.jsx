import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts"
import Slider from "../../Components/Slider/Slider"
import "./Home.scss"


const Home = () => {
  return (
    <div className="Home">
      <Slider />
      <FeaturedProducts type="Featured" />
      <FeaturedProducts type="Trending" />
    </div>
  )
}

export default Home