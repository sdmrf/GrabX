import "./Cart.scss"
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CloseIcon from '@mui/icons-material/Close';
const items = [
    {
        "id": "1",
        "img": "https://images.pexels.com/photos/17358089/pexels-photo-17358089/free-photo-of-brunette-woman-posing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title": "Product 1",
        "descp": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quia obcaecati eius sint repellat veritatis, quis nihil voluptatum, soluta inventore et, vero excepturi aut voluptas porro! Non libero assumenda accusamus!",
        "isNew": true,
        "oldPrice": 25.99,
        "Price": 19.99
    },
    {
        "id": "2",
        "img": "https://images.pexels.com/photos/16687285/pexels-photo-16687285/free-photo-of-portrait-of-woman-with-hair-over-face.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        "descp": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quia obcaecati eius sint repellat veritatis, quis nihil voluptatum, soluta inventore et, vero excepturi aut voluptas porro! Non libero assumenda accusamus!",
        "title": "Product 2",
        "isNew": false,
        "oldPrice": 39.99,
        "Price": 29.99
    },
    {
        "id": "3",
        "img": "https://images.pexels.com/photos/15922610/pexels-photo-15922610/free-photo-of-woman-posing-in-red-clothes.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        "descp": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quia obcaecati eius sint repellat veritatis, quis nihil voluptatum, soluta inventore et, vero excepturi aut voluptas porro! Non libero assumenda accusamus!",
        "title": "Product 3",
        "isNew": true,
        "oldPrice": 12.49,
        "Price": 9.99
    },
]


const Cart = ({isOpen}) => {
    return (
        <div className="Cart">
            <div className="Head">
                <h1>Products in your cart</h1>
                <CloseIcon className="Close" onClick={()=>isOpen(!open)} />
            </div>
            <div className="Items">
                {items.map((item) => (
                    <div className="Item" key={item.id}>
                        <div className="Item-Image">
                            <img src={item.img} alt={item.title} />
                        </div>
                        <div className="Item-Info">
                            <div className="Item-Name">{item.title}</div>
                            <div className="Item-Description">{item.descp?.substring(0,50)}</div>
                            <div className="Item-Price">1 x ${item.Price}</div>
                        </div>
                        <DeleteForeverIcon className="Delete" />
                    </div>
                ))}
            </div>
            <div className="Total">
                <div className="Total-Text">SUB TOTAL</div>
                <div className="Total-Price">$700</div>
            </div>
            <div className="Bottom">
                <div className="Checkout">
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <span>Reset Cart Items</span>
            </div>
        </div>
    )
}

export default Cart