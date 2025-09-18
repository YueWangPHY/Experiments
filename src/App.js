import React, { useState, useEffect } from 'react';
import BudgetInput from './components/BudgetInput';
import BudgetSummary from './components/BudgetSummary';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';

function App() {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [isBudgetSet, setIsBudgetSet] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedBudget = localStorage.getItem('budget');
    const savedExpenses = localStorage.getItem('expenses');
    
    if (savedBudget) {
      setBudget(parseFloat(savedBudget));
      setIsBudgetSet(true);
    }
    
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }
  }, []);

  // Save budget to localStorage
  const handleBudgetSubmit = (newBudget) => {
    setBudget(newBudget);
    setIsBudgetSet(true);
    localStorage.setItem('budget', newBudget.toString());
  };

  // Add new expense
  const handleAddExpense = (expense) => {
    const newExpense = {
      id: Date.now(),
      ...expense,
      date: new Date().toLocaleDateString()
    };
    const updatedExpenses = [...expenses, newExpense];
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  // Delete expense
  const handleDeleteExpense = (id) => {
    const updatedExpenses = expenses.filter(expense => expense.id !== id);
    setExpenses(updatedExpenses);
    localStorage.setItem('expenses', JSON.stringify(updatedExpenses));
  };

  // Calculate total expenses
  const totalExpenses = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
  const remainingBudget = budget - totalExpenses;

  return (
    <div className="app">
      <header className="app-header">
        <h1>💰 Financial Tracker</h1>
        <p>Track your budget and expenses easily</p>
      </header>

      <main className="app-main">
        {!isBudgetSet ? (
          <BudgetInput onSubmit={handleBudgetSubmit} />
        ) : (
          <div className="tracker-container">
            <BudgetSummary 
              budget={budget} 
              totalExpenses={totalExpenses} 
              remainingBudget={remainingBudget} 
            />
            
            <div className="expense-section">
              <ExpenseForm onAddExpense={handleAddExpense} />
              <ExpenseList 
                expenses={expenses} 
                onDeleteExpense={handleDeleteExpense} 
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
