import { useState } from "react";
import "./Product.scss"

const images = [
  "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2731.jpg",
  "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2736.jpg",
  "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2739.jpg",
  "https://img.freepik.com/free-photo/fashion-portrait-young-elegant-woman_1328-2735.jpg"
]

const Product = () => {

  const [currImg, setCurrImg] = useState(0);

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
      Right
      </div>
    </div>
  )
}

export default Product