import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyComponent from './MyComponent';
import PaymentComponent from './PaymentComponent';
import ErrorBoundary from './ErrorBoundary';
import Home from './Home';
import Products from './products'; 
import Subscription from './subscription';
import PaymentSuccess from './paymentsuccess';
import SoftwareList from './softwarelist';
import Login from './login';
import Home2 from './Home2';





const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subscribe" element={<MyComponent />} />
        <Route path="/payment" element={<ErrorBoundary><PaymentComponent /></ErrorBoundary>} />
        <Route path="/products" element={<Products />} /> 
        <Route path="/subscription" element={<Subscription />} /> 
        <Route path="/paymentsuccess" element={<PaymentSuccess />} /> 
        <Route path="/softwarelist" element={<SoftwareList />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/Home2" element={<Home2 />} /> 






        
      </Routes>
    </Router>
  );
};


export default App;
