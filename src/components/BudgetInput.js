import React, { useState } from 'react';

const BudgetInput = ({ onSubmit }) => {
  const [budget, setBudget] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const budgetAmount = parseFloat(budget);
    
    if (budgetAmount > 0) {
      onSubmit(budgetAmount);
    } else {
      alert('Please enter a valid budget amount greater than 0');
    }
  };

  return (
    <div className="budget-input-container">
      <div className="budget-input-card">
        <h2>Set Your Budget</h2>
        <p>Enter your monthly budget to start tracking your expenses</p>
        
        <form onSubmit={handleSubmit} className="budget-form">
          <div className="input-group">
            <label htmlFor="budget">Monthly Budget</label>
            <div className="input-wrapper">
              <span className="currency-symbol">$</span>
              <input
                type="number"
                id="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
                required
              />
            </div>
          </div>
          
          <button type="submit" className="submit-button">
            Set Budget
          </button>
        </form>
      </div>
    </div>
  );
};

export default BudgetInput;
