import { Link } from "react-router-dom"
import "./Card.scss"


const Img_URL = "http://localhost:1337"

const Card = ({ item }) => {
    return (
        <Link to={`/product/${item?.id}`} className="Link">
            <div className="Card">
                <div className="Image">
                    {item?.attributes?.isNew && <span className="New">New Season</span>}
                    <img src={Img_URL + item?.attributes?.Images?.data[0]?.attributes?.url} alt="" className="MainImage" />
                    {(Img_URL + item?.attributes?.Images?.data[1]?.attributes?.url) && <img src={Img_URL + item?.attributes?.Images?.data[1]?.attributes?.url} alt="" className="AltImage" />}
                </div>
                <h2>{item?.attributes?.Title}</h2>
                <div className="Price">
                    <h3>${item?.attributes?.OldPrice || item?.attributes?.Price + 19}</h3>
                    <h3>${item?.attributes?.Price}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card