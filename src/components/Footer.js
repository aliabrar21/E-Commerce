import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Import the CSS file for Footer styling

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-logo">
                        <h2>My Shop</h2>
                    </div>
                    <div className="footer-social">
                        <a href="#" className="social-icon">Facebook</a>
                        <a href="#" className="social-icon">Instagram</a>
                        <a href="#" className="social-icon">Twitter</a>
                    </div>
                </div>
                <p className="footer-text">© 2025 My Shop. All Rights Reserved.</p>
            </footer>
        );
    }
}

export default Footer;
