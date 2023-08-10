import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import axios from "axios";


const URL = import.meta.env.VITE_APP_API_URL;
const TOKEN = import.meta.env.VITE_APP_API_TOKEN;

const FeaturedProducts = ({ type, info }) => {

    const [Products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(URL + `/products?populate=*&[filters][Type][$eq]=${type}`,{
                    headers: { Authorization: `Bearer ${TOKEN}` }
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