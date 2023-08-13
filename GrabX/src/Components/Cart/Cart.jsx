import "./Cart.scss"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../Redux/cartReducer";
import makeReq from "../../Hooks/makeReq"

import {loadStripe} from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.



const Cart = ({ isOpen }) => {
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch();

    const subTotal = () => {
        return products.reduce((total, item) => total + item.Price * item.quantity, 0).toFixed(2);
    }


    const stripePromise = loadStripe("pk_test_51NedNKJC2CY0FdxuOgKCd2PrY5LnxnLtqNz506r3LDRR1YyT47RrOp6D04pQOqmAysBDJlK1rtPCOJb7GaRz73pf007HwwNdRQ");

    const handlePayment = async () => {
        try {
          const stripe = await stripePromise;
          const res = await makeReq.post("/orders", {
            products,
          });
          await stripe.redirectToCheckout({
            sessionId: res.data.stripeSession.id,
          });
    
        } catch (err) {
          console.log(err);
        }
      };

    return (
        <div className="Cart">
            <div className="Head">
                <h1>Products in your cart</h1>
                <CloseIcon className="Close" onClick={() => isOpen(!open)} />
            </div>
            <div className="Items">
                {products.map((item) => (
                    <div className="Item" key={item.id}>
                        <div className="Item-Image">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="Item-Info">
                            <div className="Item-Name">{item.title}</div>
                            <div className="Item-Description">{item.descp?.substring(0, 50) || 'No description available'}</div>
                            <div className="Item-Price">{item.quantity} x ${item.Price}</div>
                        </div>
                        <DeleteForeverIcon className="Delete"
                            onClick={() => dispatch(removeItem({ id: item.id }))}
                        />
                    </div>
                ))}
            </div>
            <div className="Total">
                <div className="Total-Text">SUB TOTAL</div>
                <div className="Total-Price">${subTotal()}</div>
            </div>
            <div className="Bottom">
                <div className="Checkout">
                    <button onClick={handlePayment}>PROCEED TO CHECKOUT</button>
                </div>
                <span onClick={
                    () => dispatch(resetCart())
                } >Reset Cart Items</span>
            </div>
        </div>
    )
}

export default Cart