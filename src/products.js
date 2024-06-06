import React from 'react';
import { Link } from 'react-router-dom';
import './products.css'; // 引入产品列表页面的样式文件

const Products = () => {
    // 模拟产品数据
    const products = [
        { id: 1, name: 'CATIA V5R17', price: '€19.99/month'},
        { id: 2, name: 'CATIA V5R16', price: '€19.99/month'},
        { id: 3, name: 'SOLIDWORKS 3D CAD', price: '€19.99/month'},
    ];

    return (
        <div className="container">
            <header className="header">
                <Link to="/" className="logo">UI.FORGE</Link>

                <nav className="nav">
                    <Link to="/products">Products</Link> {/* Update the link to point to the Products page */}
                    <a href="#service">Service</a>
                    <a href="#resources">Resources</a>
                    <a href="#support">Support</a>
                    <a href="#partners">Partners</a>
                </nav>
                <div className="contact">
                    <a href="#contact">Contact us</a>
                    <a href="#login">👤</a>
                </div>
            </header>

            <main className="main-content">
                <section className="product-list">
                    <h2>Products</h2>
                    <div className="products">
                        {products.map(product => (
                            <div className="product" key={product.id}>
                                <h3>{product.name}</h3>
                                <p><strong>Price:</strong> {product.price}</p>
                                <Link to="/subscribe" className="subscribe-link">Subscribe</Link>
                            </div>
                        ))}
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="footer-logo">ULFORGE</div>

                <div className="footer-links">
                    <p>COMPANY</p>
                    <a href="#about">about us</a>
                    <a href="#contact">Contact us</a>
                </div>
                <div className="footer-social">
                    <p>FOLLOW ULFORGE</p>
                    <a href="#twitter">X</a>
                    <a href="#linkedin">LinkedIn</a>
                    <a href="#facebook">Facebook</a>
                    <a href="#instagram">Instagram</a>
                    <a href="#youtube">YouTube</a>
                </div>
            </footer>
        </div>
    );
};

export default Products;
