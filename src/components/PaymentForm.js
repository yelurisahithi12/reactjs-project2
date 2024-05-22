import React, { useState } from 'react';
import './PaymentForm.css'; // Import your CSS file for styling

const PaymentForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvc: '',
    cardholderName: '',
    country: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Payment successful!');
      setFormData({
        email: '',
        paymentMethod: 'card',
        cardNumber: '',
        expiryMonth: '',
        expiryYear: '',
        cvc: '',
        cardholderName: '',
        country: '',
        phoneNumber: '',
      });
      onClose();
    }
  };

  const validateForm = () => {
    const { email, cardNumber, expiryMonth, expiryYear, cvc, cardholderName, country, phoneNumber } = formData;

    if (!email || !cardNumber || !expiryMonth || !expiryYear || !cvc || !cardholderName || !country || !phoneNumber) {
      alert('Please fill in all fields.');
      return false;
    }

    if (cardNumber.length !== 16) {
      alert('Please enter a valid 16-digit card number.');
      return false;
    }

    return true;
  };

  return (
    <div className="payment-form">
      <form onSubmit={handleSubmit}>
        <h3>Payment Information</h3>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label>Payment Method:</label>
          <select name="paymentMethod" value={formData.paymentMethod} onChange={handleInputChange}>
            <option value="card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        {formData.paymentMethod === 'card' && (
          <>
            <div className="form-group">
              <label>Card Number:</label>
              <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleInputChange} maxLength="16" required />
            </div>
            <div className="form-group">
              <label>Expiry Month:</label>
              <input type="text" name="expiryMonth" value={formData.expiryMonth} onChange={handleInputChange} maxLength="2" required />
            </div>
            <div className="form-group">
              <label>Expiry Year:</label>
              <input type="text" name="expiryYear" value={formData.expiryYear} onChange={handleInputChange} maxLength="4" required />
            </div>
            <div className="form-group">
              <label>CVC:</label>
              <input type="text" name="cvc" value={formData.cvc} onChange={handleInputChange} maxLength="3" required />
            </div>
            <div className="form-group">
              <label>Cardholder Name:</label>
              <input type="text" name="cardholderName" value={formData.cardholderName} onChange={handleInputChange} required />
            </div>
            <div className="form-group">
              <label>Country:</label>
              <select name="country" value={formData.country} onChange={handleInputChange} required>
                <option value="">Select Country</option>
                <option value="USA">United States</option>
                <option value="CAN">Canada</option>
                
              </select>
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} required />
            </div>
          </>
        )}
        <button type="submit" className="pay-button">Pay</button>
      </form>
    </div>
  );
}

export default PaymentForm;
