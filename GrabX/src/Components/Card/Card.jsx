import { Link } from "react-router-dom"
import "./Card.scss"


const Card = ({ item }) => {
    return (
        <Link to={`/product/${item.id}`} className="Link">
            <div className="Card">
                <div className="Image">
                    {item.isNew && <span className="New">New Season</span>}
                    <img src={item.img} alt="" className="MainImage" />
                    {item.img2 && <img src={item.img2} alt="" className="AltImage" />}
                </div>
                <h2>{item.title}</h2>
                <div className="Price">
                    <h3>${item.oldPrice}</h3>
                    <h3>${item.Price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card