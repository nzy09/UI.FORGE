import React from 'react';
import { Link } from 'react-router-dom';

function PaymentSuccess() {
  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default PaymentSuccess;
