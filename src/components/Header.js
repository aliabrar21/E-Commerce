import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniCart from './MiniCart';
import './Header.css';

class Header extends Component {
    state = { showCart: false, navOpen: false };

    toggleCart = () => {
        this.setState(prev => ({
            showCart: !prev.showCart,
            navOpen: false // close nav if cart opens
        }));
    };

    toggleNav = () => {
        this.setState(prev => ({
            navOpen: !prev.navOpen,
            showCart: false // close cart if nav opens
        }));
    };

    render() {
        return (
            <header className="header">
                <div className="header-container">
                    <Link to="/" className="logo">E-Commerce</Link>
                    <button className="nav-toggle" onClick={this.toggleNav}>
                        ☰
                    </button>
                    <nav className={this.state.navOpen ? 'open' : ''}>
                        <Link to="/" onClick={() => this.setState({ navOpen: false })}>Home</Link>
                        <Link to="/products" onClick={() => this.setState({ navOpen: false })}>Products</Link>
                        <button onClick={this.toggleCart}>Cart</button>
                    </nav>
                </div>
                {this.state.showCart && <MiniCart />}
            </header>
        );
    }
}

export default Header;
