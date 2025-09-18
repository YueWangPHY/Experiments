import React from 'react';

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  const getCategoryIcon = (category) => {
    const icons = {
      food: '🍔',
      transportation: '🚗',
      shopping: '🛍️',
      entertainment: '🎬',
      bills: '💳',
      healthcare: '🏥',
      education: '📚',
      other: '📦'
    };
    return icons[category] || '📦';
  };

  const getCategoryLabel = (category) => {
    const labels = {
      food: 'Food & Dining',
      transportation: 'Transportation',
      shopping: 'Shopping',
      entertainment: 'Entertainment',
      bills: 'Bills & Utilities',
      healthcare: 'Healthcare',
      education: 'Education',
      other: 'Other'
    };
    return labels[category] || 'Other';
  };

  if (expenses.length === 0) {
    return (
      <div className="expense-list-container">
        <h3>Expenses</h3>
        <div className="empty-state">
          <p>No expenses added yet</p>
          <p className="empty-subtitle">Add your first expense to start tracking</p>
        </div>
      </div>
    );
  }

  return (
    <div className="expense-list-container">
      <h3>Expenses ({expenses.length})</h3>
      <div className="expense-list">
        {expenses.map(expense => (
          <div key={expense.id} className="expense-item">
            <div className="expense-info">
              <div className="expense-main">
                <span className="category-icon">
                  {getCategoryIcon(expense.category)}
                </span>
                <div className="expense-details">
                  <p className="expense-description">{expense.description}</p>
                  <p className="expense-category">{getCategoryLabel(expense.category)}</p>
                </div>
              </div>
              <div className="expense-amount">
                <span className="amount">${parseFloat(expense.amount).toFixed(2)}</span>
                <span className="date">{expense.date}</span>
              </div>
            </div>
            <button 
              className="delete-button"
              onClick={() => onDeleteExpense(expense.id)}
              title="Delete expense"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
