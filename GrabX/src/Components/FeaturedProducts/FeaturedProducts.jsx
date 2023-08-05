import Card from "../Card/Card"
import "./FeaturedProducts.scss"


const data = [
    {
        "id": "1",
        "img": "https://images.pexels.com/photos/17358089/pexels-photo-17358089/free-photo-of-brunette-woman-posing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "img2": "https://example.com/images/product1_alt.jpg",
        "title": "Product 1",
        "isNew": true,
        "oldPrice": 25.99,
        "Price": 19.99
    },
    {
        "id": "2",
        "img": "https://images.pexels.com/photos/16687285/pexels-photo-16687285/free-photo-of-portrait-of-woman-with-hair-over-face.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        "img2": "https://example.com/images/product2_alt.jpg",
        "title": "Product 2",
        "isNew": false,
        "oldPrice": 39.99,
        "Price": 29.99
    },
    {
        "id": "3",
        "img": "https://images.pexels.com/photos/15922610/pexels-photo-15922610/free-photo-of-woman-posing-in-red-clothes.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        "img2": "https://example.com/images/product3_alt.jpg",
        "title": "Product 3",
        "isNew": true,
        "oldPrice": 12.49,
        "Price": 9.99
    },
    {
        "id": "4",
        "img": "https://images.pexels.com/photos/17651315/pexels-photo-17651315/free-photo-of-portrait-of-a-man-standing-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        "img2": "https://example.com/images/product4_alt.jpg",
        "title": "Product 4",
        "isNew": false,
        "oldPrice": 59.99,
        "Price": 49.99
    },

]


const FeaturedProducts = ({ type, info }) => {
    return (
        <div className="FeaturedProducts">
            <div className="Top">
                <h1>{type} Products</h1>
                <p>
                    {info}
                </p>
            </div>
            <div className="Bottom">
            {data.map((item) => (<Card key={item.id} item={item} />))}
            </div>
        </div>
    )
}

export default FeaturedProducts