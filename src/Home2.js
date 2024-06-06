import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home2 = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        console.log('Searching for:', searchTerm);
    };

    return (
        <div className="container">
            <header className="header">
                <div className="logo">UI.FORGE</div>
                <nav className="nav">
                    <Link to="/products">Products</Link> {/* 更新链接 */}
                    <a href="#service">Service</a>
                    <a href="#resources">Resources</a>
                    <a href="#support">Support</a>
                    <a href="#partners">Partners</a>
                </nav>
                <div className="contact">
                    <form onSubmit={handleSearchSubmit} className="search-form">
                        <input 
                            type="text" 
                            value={searchTerm} 
                            onChange={handleSearchChange} 
                            placeholder="Search..." 
                            className="search-input"
                        />
                        <button type="submit" className="search-button">🔍</button>
                    </form>
                    <Link to="/login" style={{ textDecoration: 'none' }}>Ni Ziyang</Link>
                    <a href="#login">👤</a>
                </div>
            </header>

            <main className="main-content">
                <section className="hero">
                    <h1 style={{ fontSize: '48px' }}>HOW TO USE OTH?</h1>
                    <Link to="/tutorial" style={{ textDecoration: 'none' }}>
                    <p style={{ fontSize: '30px', textDecoration: 'none', transition: 'color 0.3s' }}>
                     Click here
                     </p>
                    </Link>


                    <div className="hero-icon">😊</div>
                </section>

                <section className="options">
                <div className="option">
                <Link to="/subscription" style={{ textDecoration: 'none', color: 'black' }}>
                <p>Looking for better plan?<br/><strong>Upgrade your program here!</strong></p>
                 <div className="option-icon">🙂</div>
                </Link>
                </div>

                <div className="option">
                <Link to="/softwarelist" style={{ textDecoration: 'none', color: 'black' }}>
                            <p>List of software here!</p>
                            <div className="option-icon">🧐</div>
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="footer">
                <div className="footer-logo">UI.FORGE</div>
                <div className="footer-links">
                    <p>COMPANY</p>
                    <a href="#about">about us</a>
                    <a href="#contact">Contact us</a>
                </div>
                <div className="footer-social">
                    <p>FOLLOW UI.FORGE</p>
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

export default Home2;
