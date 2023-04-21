import React, { useState } from 'react';

const Currency = () => {
  const [selectedCurrency, setSelectedCurrency] = useState('$');

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  }

  return (
    <div className="currency-container">
      <label htmlFor="currency-select">Currency:</label>
      <select id="currency-select" value={selectedCurrency} onChange={handleCurrencyChange}>
        <option value="$">$ - Dollar</option>
        <option value="£">£ - Pound</option>
        <option value="€">€ - Euro</option>
        <option value="₹">₹ - Rupee</option>
      </select>
    </div>
  );
}

export default Currency;
