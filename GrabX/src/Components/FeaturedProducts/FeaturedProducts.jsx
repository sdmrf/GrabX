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
    {
        "id": "5",
        "img": "https://images.pexels.com/photos/1689731/pexels-photo-1689731.jpeg?auto=compress&cs=tinysrgb&w=400",
        "img2": "https://example.com/images/product5_alt.jpg",
        "title": "Product 5",
        "isNew": true,
        "oldPrice": 18.99,
        "Price": 14.99
    },
    {
        "id": "6",
        "img": "https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=400",
        "img2": "https://example.com/images/product6_alt.jpg",
        "title": "Product 6",
        "isNew": false,
        "oldPrice": 34.99,
        "Price": 24.99
    },
    {
        "id": "7",
        "img": "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=400",
        "img2": "https://example.com/images/product7_alt.jpg",
        "title": "Product 7",
        "isNew": true,
        "oldPrice": 9.99,
        "Price": 6.99
    },
    {
        "id": "8",
        "img": "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400",
        "img2": "https://example.com/images/product8_alt.jpg",
        "title": "Product 8",
        "isNew": true,
        "oldPrice": 29.99,
        "Price": 19.99
    },
    {
        "id": "9",
        "img": "https://images.pexels.com/photos/1926843/pexels-photo-1926843.jpeg?auto=compress&cs=tinysrgb&w=400",
        "img2": "https://example.com/images/product9_alt.jpg",
        "title": "Product 9",
        "isNew": false,
        "oldPrice": 44.99,
        "Price": 34.99
    },
    {
        "id": "10",
        "img": "https://images.pexels.com/photos/4551027/pexels-photo-4551027.jpeg?auto=compress&cs=tinysrgb&w=400",
        "img2": "https://example.com/images/product10_alt.jpg",
        "title": "Product 10",
        "isNew": true,
        "oldPrice": 15.99,
        "Price": 11.99
    }

]


const FeaturedProducts = ({ type }) => {
    return (
        <div className="FeaturedProducts">
            <div className="Top">
                <h1>{type} Products</h1>
                <p>
                    Welcome to our Featured Products collection! We take pride in curating the most trendy and high-quality items to bring you the best shopping experience. Explore our handpicked selection of stylish and functional products that are perfect for every occasion. Discover a wide range of apparel, including chic coats for the colder months, comfortable long sleeve shirts for casual days, and trendy t-shirts for that effortless look.
                </p>
            </div>
            <div className="Bottom">

            </div>
        </div>
    )
}

export default FeaturedProducts