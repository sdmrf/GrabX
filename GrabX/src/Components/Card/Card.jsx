import { Link } from "react-router-dom"



const Card = ({ item }) => {
    return (
        <Link to={`/product/${item.id}`}>
            <div className="Card">
                <div className="Image">
                    <img src= {item.img} alt ="" className="MainImage" />
                    <img src= {item.img2} alt ="" className="AltImage" />
                </div>
            </div>
        </Link>
    )
}

export default Card