import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import HomePage from './components/HomePage';
import ProductListingPage from './components/ProductListingPage';
import FullCartPage from './components/FullCartPage';
import Header from './components/Header';
import MiniCart from './components/MiniCart';

class App extends Component {
    render() {
        return (
            <CartProvider>
                <Router>
                    <div>
                        <Header />
                        <MiniCart />
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/products" element={<ProductListingPage />} />
                            <Route path="/cart" element={<FullCartPage />} />
                        </Routes>
                    </div>
                </Router>
            </CartProvider>
        );
    }
}

export default App;
