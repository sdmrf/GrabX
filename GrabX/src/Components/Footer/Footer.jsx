import Payment from '../../Assets/stripe.png'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Top">
        <div className="Item">
        <h1>Categories</h1>
          <span>Women</span>
          <span>Man</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>
        </div>

        <div className="Item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>

        <div className="Item">
          <h1>About</h1>
          <span>
            At GrabX, we are dedicated to providing you with a seamless and delightful shopping experience. Our platform is designed to cater to all your needs, offering a wide array of products that are handpicked to match your unique tastes and preferences. Whether you&quot;re looking for trendy fashion, cutting-edge gadgets, home essentials, or personalized gifts, we&quot;ve got you covered!
          </span>
        </div>
        <div className="Item">
          <h1>Contact Me</h1>
          <span>
          At GrabX, we value our customers and strive to provide exceptional service. If you have any questions, concerns, feedback, or simply want to say hello, we&quot;d love to hear from you! Our dedicated support team is ready to assist you in any way possible.
          </span>
        </div>
      </div>
      <div className="Bottom">
        <div className="Left">
          <span className="Logo">GrabX</span>
          <span className="Copyright">© Copyright 2023. All Rights Reserved</span>
        </div>
        <div className="Right">
          <img src={Payment} alt="Payment" />
        </div>
      </div>
    </div>
  )
}

export default Footer