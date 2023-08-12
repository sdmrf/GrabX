import "./Cart.scss"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from "react-redux";
import { removeItem, resetCart } from "../../Redux/cartReducer";



const Cart = ({ isOpen }) => {
    const Products = useSelector(state => state.cart.products)
    const dispatch = useDispatch();

    const subTotal = () => {
        return Products.reduce((total, item) => total + item.Price * item.quantity, 0).toFixed(2);
    }


    return (
        <div className="Cart">
            <div className="Head">
                <h1>Products in your cart</h1>
                <CloseIcon className="Close" onClick={() => isOpen(!open)} />
            </div>
            <div className="Items">
                {Products.map((item) => (
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
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <span onClick={
                    () => dispatch(resetCart())
                } >Reset Cart Items</span>
            </div>
        </div>
    )
}

export default Cart