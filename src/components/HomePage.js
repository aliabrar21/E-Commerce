import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS for this component
import './Footer';
import Footer from "./Footer";

class HomePage extends Component {
    render() {
        return (
            <>
                <div className="home">
                    <div className="content">
                        <h1>Welcome to My Shop!</h1>
                        <p>
                            Discover the best products at unbeatable prices.
                            From fashion and electronics to home essentials, we bring you the latest trends and top-quality items, all in one place.
                            Shop now and enjoy fast delivery, secure payments, and exclusive offers!
                        </p>
                        <Link to="/products">
                            <button className="shop-button">Show Products</button>
                        </Link>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }
}

export default HomePage;
