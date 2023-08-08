import { Link } from "react-router-dom"
import "./Card.scss"
import { useEffect, useState } from "react"


const Card = ({ item }) => {

    return (
        <Link to={`/product/${item.id}`} className="Link">
            <div className="Card">
                <div className="Image">
                    {item.isNew && <span className="New">New Season</span>}
                    <img src={item.image} alt="" className="MainImage" />
                    {item.img2 && <img src={item.img2} alt="" className="AltImage" />}
                </div>
                <div className="Title"><h2>{item.title}</h2></div>
                <div className="Price">
                    <h3>${(item.price + 37).toFixed(2)}</h3>
                    <h3>${(item.price).toFixed(2)}</h3>
                </div>
            </div>
        </Link>
    )
}

export default Card