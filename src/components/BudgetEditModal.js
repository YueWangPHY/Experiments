import React, { useState, useEffect } from 'react';

const BudgetEditModal = ({ isOpen, onClose, currentBudget, onSave }) => {
  const [newBudget, setNewBudget] = useState('');

  useEffect(() => {
    if (isOpen) {
      setNewBudget(currentBudget.toString());
    }
  }, [isOpen, currentBudget]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const budgetAmount = parseFloat(newBudget);
    
    if (budgetAmount > 0) {
      onSave(budgetAmount);
      onClose();
    } else {
      alert('Please enter a valid budget amount greater than 0');
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Budget</h2>
          <button className="close-button" onClick={onClose}>
            ×
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label htmlFor="newBudget">New Monthly Budget</label>
            <div className="input-wrapper">
              <span className="currency-symbol">$</span>
              <input
                type="number"
                id="newBudget"
                value={newBudget}
                onChange={(e) => setNewBudget(e.target.value)}
                placeholder="0.00"
                min="0"
                step="0.01"
                required
                autoFocus
              />
            </div>
          </div>
          
          <div className="modal-actions">
            <button type="button" className="cancel-button" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="save-button">
              Save Budget
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BudgetEditModal;
