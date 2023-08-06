import Categories from "../../Components/Categories/Categories";
import Contact from "../../Components/Contact/Contact";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts"
import Slider from "../../Components/Slider/Slider"
import "./Home.scss"

const data = [
  "Welcome to our Featured Products collection! We take pride in curating the most trendy and high-quality items to bring you the best shopping experience. Explore our handpicked selection of stylish and functional products that are perfect for every occasion. Discover a wide range of apparel, including chic coats for the colder months, comfortable long sleeve shirts for casual days, and trendy t-shirts for that effortless look.",
  "Explore our Trending Products selection! Embrace the latest fashion trends and discover the hottest items that everyone is talking about. We handpick these stylish and in-demand products to elevate your wardrobe and keep you ahead of the fashion curve. Stay cozy and chic with our trendy coats that are perfect for the colder months. For casual days, we have a range of comfortable long sleeve shirts that combine style and comfort effortlessly."
];


const Home = () => {
  return (
    <div className="Home">
      <Slider />
      <FeaturedProducts type="Featured" info={data[0]} />
      <Categories />
      <FeaturedProducts type="Trending" info={data[1]} />
      <Contact />
    </div>
  )
}

export default Home