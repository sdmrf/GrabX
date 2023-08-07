import { useState } from "react";
import "./Product.scss"

import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const images = [
  "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2731.jpg",
  "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2736.jpg",
  "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2739.jpg",
  "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2735.jpg"
]

const Product = () => {

  const [currImg, setCurrImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="Product">
      <div className="Left">
        <div className="Images">
          {images.map((img, index) => (
            <img src={img} alt="" key={index} onClick={() => setCurrImg(index)} />
          ))}
        </div>
        <div className="MainImg">
          <img src={images[currImg]} alt="" />
        </div>
      </div>
      <div className="Right">
        <h1>Title</h1>
        <span className="Price">$17</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni molestiae exercitationem repellendus beatae dolorum sapiente? Temporibus doloremque ipsa ea, sapiente vitae, cum perferendis neque, dolor facere ad fuga quaerat eius.</p>

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