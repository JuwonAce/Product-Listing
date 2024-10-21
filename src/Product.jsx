import './Product.css'

const Product = ({productName, price, image, description, rating}) => {
    return (
        <div className="product-card">
            <img src= {image} alt=""/>
            <h2>{productName}</h2>
            <p>Price: ${price}</p>
            <p>{description}</p>
            <p>Rating: ⭐{rating} </p>
        </div>
    );
};

export default Product; 

