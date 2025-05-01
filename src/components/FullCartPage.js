import React, { Component } from 'react';
import { CartContext } from '../contexts/CartContext';
import './FullCartPage.css'; // Import the CSS for this component

class FullCartPage extends Component {
    static contextType = CartContext;

    state = {
        orderPlaced: false, // State to track order placement
    };

    updateQuantity = (id, delta) => {
        const updatedCart = this.context.cartItems.map(item => {
            if (item.id === id) {
                return { ...item, quantity: Math.max(1, item.quantity + delta) };
            }
            return item;
        });
        this.context.setCartItems(updatedCart);
    };

    handleCheckout = () => {
        this.setState({ orderPlaced: true }); // Update the state when checkout is clicked
    };

    render() {
        const { cartItems, removeFromCart } = this.context;
        const { orderPlaced } = this.state;
        const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const shipping = 5.99;
        const total = subtotal + shipping;

        if (orderPlaced) {
            return (
                <div className="order-success">
                    <h2>Your order is successfully placed!</h2>
                    <p>Thank you for shopping with us. Your order is being processed.</p>
                </div>
            );
        }

        return (
            <div className="full-cart">
                <h2>Your Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <span className="cart-item-title">{item.title}</span>
                                    <div className="cart-item-quantity">
                                        <button onClick={() => this.updateQuantity(item.id, -1)}>-</button>
                                        {item.quantity}
                                        <button onClick={() => this.updateQuantity(item.id, 1)}>+</button>
                                    </div>
                                    <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button>
                                </div>
                                <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="cart-summary">
                            <p>Subtotal: ${subtotal.toFixed(2)}</p>
                            <p>Shipping: ${shipping.toFixed(2)}</p>
                            <p>Total: ${total.toFixed(2)}</p>
                            <button onClick={this.handleCheckout} className="checkout-button">Proceed to Checkout</button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

export default FullCartPage;
