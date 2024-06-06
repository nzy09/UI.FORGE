import React, { useState } from 'react';
import './PaymentComponent.css';
import { Link } from 'react-router-dom';


const PaymentComponent = () => {
    const [email, setEmail] = useState('1850904176@qq.com');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [cardholderName, setCardholderName] = useState('');
    const [billingCountry, setBillingCountry] = useState('France');
    const [billingAddress, setBillingAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log({
            email,
            cardNumber,
            expiryDate,
            cvc,
            cardholderName,
            billingCountry,
            billingAddress
        });
    };

    return (
        <div className="container">
            <div className="left-container">
                <div className="subscription-details">
                    <h1>UI.FORGE</h1>
                    <h2>Subscribe to CATIA V5R17</h2>
                    <p><strong>€19.99</strong> per month</p>
                    <p>CATIA V5R17 standard Subscription</p> 
                    <p>Billed monthly</p>
                    {/* 添加一些看不见的空格 */}
                {"                                                                                                                                                                              "} 
                {/* 或者可以直接输入空格字符 */}
                &nbsp;
                {" "} 
                </div>
            </div>

            <div className="right-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="card-number">Card information</label>
                        <input
                            type="text"
                            id="card-number"
                            placeholder="1234 1234 1234 1234"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                            pattern="\d{4}\d{4}\d{4}\d{4}"
                            title="Card number should be in the format 1234 1234 1234 1234"
                            required
                        />
                        <input
                            type="text"
                            id="expiry-date"
                            placeholder="MM/YY"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                            pattern="\d{2}/ \d{2}"
                            title="Expiry date should be in the format MM / YY"
                            required
                        />
                        <input
                            type="text"
                            id="cvc"
                            placeholder="CVC"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                            pattern="\d{3}"
                            title="CVC should be a 3-digit number"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cardholder-name">Cardholder name</label>
                        <input
                            type="text"
                            id="cardholder-name"
                            placeholder="Full name on card"
                            value={cardholderName}
                            onChange={(e) => setCardholderName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="billing-country">Billing address</label>
                        <select
                            id="billing-country"
                            value={billingCountry}
                            onChange={(e) => setBillingCountry(e.target.value)}
                            required
                        >
                            <option value="France">France</option>
                            {/* Add more countries as needed */}
                        </select>
                        <input
                            type="text"
                            id="billing-address"
                            placeholder="Address"
                            value={billingAddress}
                            onChange={(e) => setBillingAddress(e.target.value)}
                            required
                        />
                    </div>
                    <Link to="/paymentsuccess">

                    <button type="submit" className="subscribe-button">Subscribe</button>
                    </Link>

                </form>
            </div>
        </div>
    );
};

export default PaymentComponent;
