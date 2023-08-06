import "./List.scss"
import Card from "../Card/Card"


const data = [
    {
        "id": "1",
        "img": "https://images.pexels.com/photos/17358089/pexels-photo-17358089/free-photo-of-brunette-woman-posing.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title": "Product 1",
        "isNew": true,
        "oldPrice": 25.99,
        "Price": 19.99
    },
    {
        "id": "2",
        "img": "https://images.pexels.com/photos/16687285/pexels-photo-16687285/free-photo-of-portrait-of-woman-with-hair-over-face.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
        "title": "Product 2",
        "isNew": false,
        "oldPrice": 39.99,
        "Price": 29.99
    },
    {
        "id": "3",
        "img": "https://images.pexels.com/photos/15922610/pexels-photo-15922610/free-photo-of-woman-posing-in-red-clothes.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
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
    {
        "id": "5",
        "img": "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=400",
        "title": "Product 5",
        "isNew": false,
        "oldPrice": 34.99,
        "Price": 24.99
    },
    {
        "id": "6",
        "img": "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=400",
        "title": "Product 6",
        "isNew": true,
        "oldPrice": 9.99,
        "Price": 6.99
    },
    {
        "id": "7",
        "img": "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400",
        "title": "Product 7",
        "isNew": true,
        "oldPrice": 29.99,
        "Price": 19.99
    },
    {
        "id": "9",
        "img": "https://images.pexels.com/photos/4551027/pexels-photo-4551027.jpeg?auto=compress&cs=tinysrgb&w=400",
        "title": "Product 9",
        "isNew": true,
        "oldPrice": 15.99,
        "Price": 11.99
    }

]

const List = () => {
  return (
    <div className="List">
    {data.map((item) => (
        <Card item={item} key = {item.id} />
    )
    )}
    </div>
  )
}

export default List