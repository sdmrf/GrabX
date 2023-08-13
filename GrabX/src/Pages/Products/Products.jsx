import { useParams } from "react-router-dom"
import List from "../../Components/List/List"
import "./Products.scss"
import { useState } from "react";
import useFetch from "../../Hooks/useFetch";

const Products = () => {

  const CatId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState("asc");

  const [selectedSubCategories, setSelectedSubCategories] = useState([]);

  const handleChange = (e) => {
    if (e.target.checked) {
      setSelectedSubCategories([...selectedSubCategories, e.target.value]);
    } else {
      setSelectedSubCategories(selectedSubCategories.filter((item) => item !== e.target.value));
    }
  }


  const { data, error, loading } = useFetch(`/sub-categories?populate=*&[filters][Category][$eq]=${CatId}`);

  return (
    <div className="Products">
      <div className="Left">
        <div className="FilterItem">
          <h1>Product Categories</h1>
          {loading ? <h1>Loading...</h1> :
            error ? <h1>Oops! Something went wrong.</h1> :
              data?.map((item) => (
                <div className="Input" key={item.id} onChange={handleChange}>
                  <input type="checkbox" id={item.id} value={item.id} />
                  <label htmlFor="price1">{item.attributes.Title}</label>
                </div>
              ))
          }
        </div>

        <div className="FilterItem">
          <h1>Filter By Price</h1>
          <div className="Input">
            <span>$0</span>
            <input type="range" min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)} />
            <span>${maxPrice}</span>
          </div>

        </div>
        <div className="FilterItem">
          <h1>Sort By</h1>
          <div className="Input">
            <input type="radio" id="asc" name="price" value="asc" onChange={(e) => setSort(e.target.value)} />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="Input">
            <input type="radio" id="desc" name="price" value="desc" onChange={(e) => setSort(e.target.value)} />
            <label htmlFor="desc">Price (Highest First) </label>
          </div>
        </div>
      </div>
      <div className="Right">
        <div className="Up">
          <video autoPlay muted loop className="VideoBackground">
            <source src="https://player.vimeo.com/external/377069770.hd.mp4?s=7caf45eaa27e27682174cab50d0073c76e38eb20&profile_id=175&oauth2_token_id=57447761" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="Down">
          <List catId={CatId} maxPrice={maxPrice} sort={sort} subCat = {selectedSubCategories}/>
        </div>
      </div>
    </div>
  )
}

export default Products