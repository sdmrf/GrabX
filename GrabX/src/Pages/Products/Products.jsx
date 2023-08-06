import "./Products.scss"

const Products = () => {
  return (
    <div className="Products">
      <div className="Left">
        <div className="FilterItem">
          <h1>Product Categories</h1>
          <div className="Input">
            <input type="checkbox" id="price1" name="price1" value="price1" />
            <label htmlFor="price1">Shirt</label>
          </div>
          <div className="Input">
            <input type="checkbox" id="price2" name="price2" value="price2" />
            <label htmlFor="price2">Coat</label>
          </div>
        </div>
        <div className="Input">
          <input type="checkbox" id="price3" name="price3" value="price3" />
          <label htmlFor="price3">Shoes</label>
        </div>
        <div className="FilterItem">
          <h1>Filter By Price</h1>
          <div className="Input">
            <span>$0</span>
            <input type = "range" min = {0} max = {1000} />
            <span>$1000</span>
          </div>

        </div>
        <div className="FilterItem">
          <h1>Sort By</h1>
          <div className="Input">
            <input type="radio" id="asc" name="price" value="asc" />
            <label htmlFor="asc">Price (Lowest First)</label>
          </div>
          <div className="Input">
            <input type="radio" id="desc" name="price" value="desc" />
            <label htmlFor="desc">Price (Highest First) </label>
          </div>
        </div>
      </div>
      <div className="Right">
        <div className="Up">
        <img src="" alt="" />
        </div>

      </div>
    </div>
  )
}

export default Products