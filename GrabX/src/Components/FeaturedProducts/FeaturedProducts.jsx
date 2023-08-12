import {useState } from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";
import useFetch from "../../Hooks/useFetch";



const FeaturedProducts = ({ type, info }) => {

    const [Products, setProducts] = useState([]);

    const {data, error, loading} = useFetch(`/products?populate=*&[filters][Type][$eq]=${type}`);


    return (
        <div className="FeaturedProducts">
            <div className="Top">
                <h1>{type} Products</h1>
                <p>
                    {info}
                </p>
            </div>
            <div className="Bottom">
            {loading? <h1>Loading...</h1> : error? <h1>Oops! Something went wrong.</h1> : data?.map((item) => (<Card key={item.id} item={item} />))}
            </div>
        </div>
    )
}

export default FeaturedProducts