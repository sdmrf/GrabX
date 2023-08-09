import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";



const GRABX_API_TOKEN = "a912ce73aa56ba47d9fd16146346c46fed79ea9fec7785ed4286a8b65e9651ef764303afdf053904bd4e4f1459293d1219bcf024e3dcd82ae084fb4ca6d26ca7ffc5ae16030794ddf367b20b83dc606e9c2ba13964044bd6ba2bf740f463742a2effb101763fe6ce9ef68ed21729435d7f328ddd9633642395f8b88cb637c121"
const GRABX_API_URL = "http://localhost:1337/api"


const FeaturedProducts = ({ type, info }) => {

    const [Products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(GRABX_API_URL + `/products?populate=*&[filters][Type][$eq]=${type}`,{
                    headers: { Authorization: `Bearer ${GRABX_API_TOKEN}` }
                })
                setProducts(response.data.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [])

    console.log(Products)

    return (
        <div className="FeaturedProducts">
            <div className="Top">
                <h1>{type} Products</h1>
                <p>
                    {info}
                </p>
            </div>
            <div className="Bottom">
            {Products?.map((item) => (<Card key={item.id} item={item} />))}
            </div>
        </div>
    )
}

export default FeaturedProducts