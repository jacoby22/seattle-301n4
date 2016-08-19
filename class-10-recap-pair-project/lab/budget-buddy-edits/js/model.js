var monthlyBudgetAmount = 0;
var fullBudget = [];
var monthlyIncome;
var context;
var howMuch;
var addMoney;
var savingsArray = [];
var savingsRemaining;
var currentSavings = 0;
var incomeRemaining;
var savingsData;
var monthlyIncome = JSON.parse(localStorage.getItem('Monthly Income'));
var fullBudget = JSON.parse(localStorage.getItem('Budget Data'));
var incomeRemainingHeading;
var percentageSavingsFieldset;
var percentageSavingsLabel;
var percentageSavingsInput;
var percentageSavingsButton;
var userPercentageValue;
var savingsAmount;

// Creates new budget object
var budgetExpense = function(name, expense) {
  this.name = name;
  this.expense = expense;
};

// Creates savings object
var savingsObject = {
  goalName: '',
  goalAmount: 0,
  currentAmount: 0
};

// Budget expense objects
var rentExpense = new budgetExpense('rent', 0);
var foodExpense = new budgetExpense('food', 0);
var insuranceExpense = new budgetExpense('insurance', 0);
var utilitiesExpense = new budgetExpense('utilities', 0);
var loansExpense = new budgetExpense('loans', 0);
var transportationExpense = new budgetExpense('transportation', 0);

var budgetToSavingsLocation;
var budgetToSavingsButton;

// uses inputted monthly income value to calculate remaining income after budgeting
function monthlyIncomeRemaining() {
  fullBudget = [];
  fullBudget.push(rentExpense, foodExpense, insuranceExpense, utilitiesExpense, loansExpense, transportationExpense);
  incomeRemaining = fullBudget.reduce(function(acc, b){
    return acc - b.expense;
  }, monthlyIncome);
  return incomeRemaining;
};
