// src/contexts/CartContext.js
import React, { createContext, Component } from 'react';

export const CartContext = createContext();

export class CartProvider extends Component {
    state = {
        cartItems: [],
    };

    addToCart = (item) => {
        this.setState((prevState) => {
            const existingItem = prevState.cartItems.find(i => i.id === item.id);
            if (existingItem) {
                return {
                    cartItems: prevState.cartItems.map(i =>
                        i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                    ),
                };
            } else {
                return {
                    cartItems: [...prevState.cartItems, { ...item, quantity: 1 }],
                };
            }
        });
    };

    removeFromCart = (id) => {
        this.setState((prevState) => ({
            cartItems: prevState.cartItems.filter(item => item.id !== id),
        }));
    };

    setCartItems = (items) => {
        this.setState({ cartItems: items });
    };

    render() {
        const { children } = this.props;
        const { cartItems } = this.state;

        return (
            <CartContext.Provider
                value={{
                    cartItems,
                    addToCart: this.addToCart,
                    removeFromCart: this.removeFromCart,
                    setCartItems: this.setCartItems,
                }}
            >
                {children}
            </CartContext.Provider>
        );
    }
}
