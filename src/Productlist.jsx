
import ImageOne from '../src/assets/hermes-birkin.jpg';
import ImageTwo from '../src/assets/dior-backpack.jpg';
import ImageThree from '../src/assets/emerson.jpg';
import ImageFour from '../src/assets/louis-vuitton.jpg';
import ImageFive from '../src/assets/lv-laptop.jpg';
import ImageSix from '../src/assets/supreme.jpg';
import Product from './Product'; 
import './Product.css'

const ProductList = () => {
    const products = [
        {
            productName: 'Hermes Birkin Cargo Bag', 
            price: 12000.99, 
            image: ImageOne, 
            description: 'A high quality Hermes Birkin Cargo Bag',
            rating: 4.5,
        },
        
        {
            productName: 'Dior Luxury Backpack', 
            price: 599.99, 
            image: ImageTwo, 
            description: 'A high quality Dior Backpack',
            rating: 4.7,
        },

        {
            productName: 'Emerson Men Bag', 
            price: 399.99, 
            image: ImageThree, 
            description: 'A high quality Emerson Bag',
            rating: 4.3,
        },

        {
            productName: 'Louis Vuitton Laptop Bag', 
            price: 619.99, 
            image: ImageFive, 
            description: 'A high quality Louis Vuitton Laptop Bag',
            rating: 4.8,
        },
        
        {
            productName: 'Louis Vuitton Backpack', 
            price: 999.99, 
            image: ImageFour, 
            description: 'A high quality Louis Vuitton Backpack',
            rating: 4.7,
        },

        {
            productName: 'Supreme Backpack', 
            price: 699.99, 
            image: ImageSix, 
            description: 'A high quality Supreme Backpack',
            rating: 4.4,
        },


    ]; 

    return (
        <div>
            {products.map ((product, index) => (
                <Product
                key = {index}
                productName = {product.productName}
                price = {product.price}
                image = {product.image}
                description = {product.description}
                rating = {product.rating}
                />
            ))}
        </div>
    );
}; 

export default ProductList; 
