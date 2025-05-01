import React, { Component } from 'react';
import { CartContext } from '../contexts/CartContext';
import './ProductCard.css'
import Footer from "./Footer";

class ProductCard extends Component {
    static contextType = CartContext;

    handleAddToCart = () => {
        this.context.addToCart(this.props.product);
    };

    render() {
        const { title, price, image } = this.props.product;
        return (
            <>
                <div className="product-card">
                    <img src={image} alt={title} />
                    <h4>{title}</h4>
                    <p>${price}</p>
                    <button onClick={this.handleAddToCart}>Add to Cart</button>
                </div>
            </>
        );
    }
}

export default ProductCard;
