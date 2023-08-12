import { useEffect, useState } from "react";
import "./Product.scss"

import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";


import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';


const Product = () => {

  const id = useParams().id;
  const Img_URL = import.meta.env.VITE_APP_API_IMG_URL;
  const { data, error, loading } = useFetch(`/products/${id}?populate=*`)
  console.log(Img_URL + data?.attributes?.Images?.data[0]?.attributes?.url)
  const [currImg, setCurrImg] = useState("");

  useEffect(() => {
    if (!loading && data?.attributes?.Images?.data[0]?.attributes?.url) {
      setCurrImg(Img_URL + data.attributes.Images.data[0].attributes.url);
    }
  }, [loading, data, Img_URL]);


  const [quantity, setQuantity] = useState(1);


  console.log(data?.attributes?.Images)


  return (
    <div className="Product">
      <div className="Left">
        <div className="Images">
          {data?.attributes?.Images?.data?.map((img, index) => (
            <img src={Img_URL + img?.attributes?.url} alt="" key={index} onClick={() => setCurrImg(Img_URL + img?.attributes?.url)} />
          ))}
        </div>
        <div className="MainImg">
          {currImg && <img src={currImg} alt="" />}
        </div>

      </div>
      <div className="Right">
        <h1>{data?.attributes?.Title}</h1>
        <span className="Price">${data?.attributes?.Price}</span>
        <p>{data?.attributes?.Description}</p>

        <div className="Quantity">
          <button onClick={() => setQuantity(prev => prev === 1 ? 1 : prev - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(prev => prev + 1)} >+</button>
        </div>

        <div className="Add">
          <button className="Add2Cart">
            <AddShoppingCartIcon /> ADD TO CART
          </button>
        </div>
        <div className="Links">
          <div className="Item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="Item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="Info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Barcode: 8048428984</span>
          <span>Tags: T-Shirt, Women, Clothing</span>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Product