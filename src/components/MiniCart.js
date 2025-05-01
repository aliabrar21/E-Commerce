import React, { Component } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import './MiniCart.css'

class MiniCart extends Component {
    static contextType = CartContext;

    render() {
        const { cartItems } = this.context;
        const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

        return (
            <div className="mini-cart">
                <h4>Mini Cart</h4>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        {cartItems.map(item => (
                            <div key={item.id} className="mini-cart-item">
                                <span>{item.title} x {item.quantity}</span>
                            </div>
                        ))}
                        <p>Subtotal: ${subtotal.toFixed(2)}</p>
                        <Link to="/cart">
                            <button>View Cart</button>
                        </Link>
                    </div>
                )}
            </div>
        );
    }
}

export default MiniCart;
