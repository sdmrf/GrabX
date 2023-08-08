import { useEffect, useState } from "react";
import "./Product.scss"

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useParams } from "react-router-dom";

const images = [
  "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2731.jpg",
  "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2736.jpg",
  "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2739.jpg",
  "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2735.jpg"
]

const Product = () => {

  const [currImg, setCurrImg] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const ProductId = parseInt(useParams().id); 

  const [product, setProduct] = useState({});

  console.log(ProductId)

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products/" + ProductId, { method: "GET" });
      const data = await res.json();
      setProduct(data);
      console.log(data);
    }
    fetchProduct();
  }, [])

  return (
    <div className="Product">
      <div className="Left">
        <div className="Images">
          {images.map((img, index) => (
            <img src={img} alt="" key={index} onClick={() => setCurrImg(index)} />
          ))}
        </div>
        <div className="MainImg">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="Right">
        <h1>{product.title}</h1>
        <span className="Price">${product.price}</span>
        <p>{product.description}</p>

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
        <span>Category: {product.category}</span>
        <span>Ratings: {product.rating && product.rating.rate}</span>
        </div>
        <hr />
      </div>
    </div>
  )
}

export default Product