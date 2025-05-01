import React, { Component } from 'react';
import ProductCard from './ProductCard';

class ProductListingPage extends Component {
    state = {
        products: [],
        loading: true,
        error: null,
    };

    componentDidMount() {
        fetch('https://fakestoreapi.com/products')
            .then(response => {
                if (!response.ok) throw new Error('Failed to fetch products');
                return response.json();
            })
            .then(data => this.setState({ products: data, loading: false }))
            .catch(error => this.setState({ error: error.message, loading: false }));
    }

    render() {
        const { products, loading, error } = this.state;

        if (loading) return <p>Loading products...</p>;
        if (error) return <p>Error: {error}</p>;

        return (
            <div className="products">
                <h2>Our Products</h2>
                <div className="product-grid">
                    {products.map(product => (
                        <ProductCard
                            key={product.id}
                            product={{
                                id: product.id,
                                title: product.title,
                                price: product.price,
                                image: product.image,
                            }}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default ProductListingPage;
