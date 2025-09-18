# Financial Tracker

Wrote by curosr 100%

A modern React-based financial budget tracker that helps you manage your monthly budget and track expenses.

## Features

- 💰 **Budget Management**: Set your monthly budget
- 📊 **Real-time Tracking**: Track expenses and see remaining balance
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 💾 **Local Storage**: Data persists between sessions
- 🎨 **Modern UI**: Beautiful, intuitive interface
- 📈 **Visual Progress**: Progress bar showing budget usage
- 🏷️ **Categories**: Organize expenses by category
- ❌ **Easy Management**: Delete expenses with one click

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

1. **Set Budget**: Enter your monthly budget amount
2. **Add Expenses**: Add expenses with description, amount, and category
3. **Track Progress**: Monitor your spending with the visual progress bar
4. **View Summary**: See total spent and remaining budget
5. **Manage Expenses**: Delete expenses you no longer need

## Categories

- 🍔 Food & Dining
- 🚗 Transportation
- 🛍️ Shopping
- 🎬 Entertainment
- 💳 Bills & Utilities
- 🏥 Healthcare
- 📚 Education
- 📦 Other

## Technology Stack

- React 18
- Webpack 5
- Babel
- CSS3 with modern features
- Local Storage API

## Project Structure

```
src/
├── components/
│   ├── BudgetInput.js      # Budget setting component
│   ├── BudgetSummary.js    # Budget overview component
│   ├── ExpenseForm.js      # Add expense form
│   └── ExpenseList.js      # Expense list display
├── App.js                  # Main application component
├── App.css                 # Global styles
└── index.js                # Application entry point
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License
