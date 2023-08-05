import "./Categories.scss"
import { Link } from "react-router-dom";

const data = [
  "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&w=400",
  "https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=400",
];

const Categories = () => {
  return (
    <div className="Categories">
      <div className="Column">
        <div className="Row">
          <img src= {data[0]} alt="Category" />
          <button className="Button"><Link to ="./Products/1" className="Link">Sale</Link></button>
        </div>
        <div className="Row">
          <img src= {data[1]} alt="Category" />
          <button className="Button"><Link to ="./Products/2" className="Link">Women</Link></button>
        </div>
      </div>
      <div className="Column">
        <div className="Row">
          <img src= {data[2]} alt="Category" />
          <button className="Button"><Link to ="./Products/3" className="Link">New Season</Link></button>
        </div>
      </div>
      <div className="Column Col">
        <div className="Row">
          <div className="Column">
            <div className="Row">
              <img src= {data[3]} alt="Category" />
              <button className="Button"><Link to ="./Products/4" className="Link">Men</Link></button>
            </div>
          </div>
          <div className="Column">
            <div className="Row">
              <img src= {data[4]} alt="Category" />
              <button className="Button"><Link to ="./Products/5" className="Link">Accesories</Link></button>
            </div>
          </div>
        </div>
        <div className="Row">
          <img src= {data[5]} alt="Category" />
          <button className="Button"><Link to ="./Products/1" className="Link">Shoes</Link></button>
        </div>
      </div>

    </div>
  )
}

export default Categories