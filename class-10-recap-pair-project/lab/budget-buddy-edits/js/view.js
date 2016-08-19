var data = [
  {
    value: rentExpense.expense,
    color: '#7C05F2',
    highlight: '#46F2E5',
    label: 'Rent'
  },
  {
    value: foodExpense.expense,
    color: '#50F205',
    highlight: '#46F2E5',
    label: 'Food'
  },
  {
    value: insuranceExpense.expense,
    color: '#F2E105',
    highlight: '#46F2E5',
    label: 'Insurance'
  },
  {
    value: utilitiesExpense.expense,
    color: '#F28805',
    highlight: '#46F2E5',
    label: 'Utilities'
  },
  {
    value: loansExpense.expense,
    color: '#F20505',
    highlight: '#46F2E5',
    label: 'Loans'
  },
  {
    value: transportationExpense.expense,
    color: '#5C92F2',
    highlight: '#46F2E5',
    label: 'Transportation'
  },
  {
    value: incomeRemaining,
    color: '#F221AD',
    highlight: '#46F2E5',
    label: 'Remaining Income'
  }
];

// Progress bar updating function
function updateProgress(perc) {
  progress.style.width = perc + '%';
  $('#progress').css('style: ' + perc + '%');
};

// event listener
if (document.getElementById('budget-form')) {
  $('#budget-form').on('submit', collectBudgetData);
}
if (document.getElementById('savings-income-event-section')) {
  $('#savings-income-event').on('click', displayRemainingIncome);
  $('#clear').on('click', clearLocalStorage);
  $('#savingsForm').on('submit', collectSavingsData);
}

// Event handler -- assigns value to each object according to user input
function collectBudgetData(event){
  event.preventDefault();

  // If there is a pie chart already on the page, clear it. If not, add it.
  if ($('#canvas-section').hasClass('shown')) {
    $('#canvas-section canvas').remove();
    $('#canvas-section').append('<canvas></canvas>');
  } else {
    $('#canvas-section').append('<canvas></canvas>');
    $('#canvas-section').addClass('shown');
  }
  $('#canvas-section canvas').attr('class="canvas-pie-chart" width="600px" height="600px"');
  context = $('canvas')[0].getContext('2d');

  // Takes input and updates expense property of objects.
  monthlyIncome = parseInt(event.target.enterIncome.value);
  rentExpense.expense = parseInt(event.target.rentMortgage.value);
  foodExpense.expense = parseInt(event.target.foodGroceries.value);
  insuranceExpense.expense = parseInt(event.target.insurance.value);
  utilitiesExpense.expense = parseInt(event.target.utilities.value);
  loansExpense.expense = parseInt(event.target.loansCcDebt.value);
  transportationExpense.expense = parseInt(event.target.transportation.value);

  var incomeRemaining = monthlyIncomeRemaining();
  localStorage.setItem('Monthly Income Remaining', JSON.stringify(incomeRemaining));

  // Storing objects and monthly income in local storage
  localStorage.setItem('Budget Data', JSON.stringify(fullBudget));
  localStorage.setItem('Monthly Income', JSON.stringify(monthlyIncome));

  var myPieChart = new Chart(context).Pie(data);
  document.getElementById('chart-legend-location').innerHTML = myPieChart.generateLegend();
}

// Event handler, on button click displays remaining income and asks if they'd like to save a percentage. Appends form and fieldset.
function displayRemainingIncome(event) {
  event.preventDefault();
  if (document.getElementsByTagName('h2')[0]) {
    savingsHeadingSection.innerHTML = '';
  }
  incomeRemaining = JSON.parse(localStorage.getItem('Monthly Income Remaining'));
  $('#savingsHeadingSection').append('<h2>You have $' + incomeRemaining + ' remaining in your budget. What percentage would you like to set aside for your savings goal?</h2>');
  $('#savings-income-event-section').append('<form><label name="userPercentage" class="percentage-savings">Enter a percentage to save:</label></form>');
  $('label[name="userPercentage"]').append('<input type="text" name="userPercentage" class="percentage-savings-form"></input>');// percentageSavingsForm = document.createElement('form');
  $('#savings-income-event-section form').append('<button type="submit" class="savings-button-color">Save Amount</button>');
  $('#savings-income-event-section form').on('submit', collectPercentageData);
}
