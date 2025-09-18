import React from 'react';

const BudgetSummary = ({ budget, totalExpenses, remainingBudget }) => {
  const percentageUsed = budget > 0 ? (totalExpenses / budget) * 100 : 0;
  const isOverBudget = remainingBudget < 0;

  return (
    <div className="budget-summary">
      <div className="summary-cards">
        <div className="summary-card budget-card">
          <h3>Total Budget</h3>
          <p className="amount budget-amount">${budget.toFixed(2)}</p>
        </div>
        
        <div className="summary-card expenses-card">
          <h3>Total Spent</h3>
          <p className="amount expenses-amount">${totalExpenses.toFixed(2)}</p>
        </div>
        
        <div className={`summary-card remaining-card ${isOverBudget ? 'over-budget' : ''}`}>
          <h3>Remaining</h3>
          <p className={`amount remaining-amount ${isOverBudget ? 'over-budget' : ''}`}>
            ${remainingBudget.toFixed(2)}
          </p>
        </div>
      </div>
      
      <div className="progress-section">
        <div className="progress-header">
          <span>Budget Usage</span>
          <span>{percentageUsed.toFixed(1)}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className={`progress-fill ${isOverBudget ? 'over-budget' : ''}`}
            style={{ width: `${Math.min(percentageUsed, 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BudgetSummary;
