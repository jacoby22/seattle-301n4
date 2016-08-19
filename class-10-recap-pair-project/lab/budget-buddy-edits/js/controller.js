function clearLocalStorage() {
  event.preventDefault();
  localStorage.clear();
  $('#savingsForm')[0].reset();
  $('#savingsData')[0].remove();
  updateProgress(0);
  $('#addMoney').val('');
}

// Collects user info from savings form (event handler)
function collectSavingsData(event){
  event.preventDefault();

  savingsFor = event.target.savingsFor.value;
  howMuch = parseInt(event.target.howMuch.value);
  addMoney = parseInt(event.target.addMoney.value);
  // Grabs current savings from local storage and adds inputted value to it.
  currentSavings = JSON.parse(localStorage.getItem('Current Savings'));
  currentSavings += addMoney;
  // Updates current savings in local storage
  localStorage.setItem('Current Savings', JSON.stringify(currentSavings));

  // Storing objects and monthly income in local storage
  localStorage.setItem('Total Savings Goal', JSON.stringify(howMuch));
  localStorage.setItem('Savings Remaining', JSON.stringify(savingsRemaining));
  localStorage.setItem('Current Savings', JSON.stringify(currentSavings));
  var savingsRemaining = (howMuch - currentSavings);

  //button to display savings data
  $('#savingsData').append('<article class="saved-text"></article>');
  if (currentSavings <= howMuch) {
    $('.saved-text').text('You have saved $' + currentSavings + ' towards the $' + howMuch + ' needed for ' + savingsFor + '!');
  } else {
    $('.saved-text').text('Congratulations! You have met your goal of $' + howMuch + '!');
  }

// Progress bar
  if (currentSavings <= howMuch) {
    updateProgress((currentSavings / howMuch) * 100);
  }else {
    updateProgress(100);
  };
}

function collectPercentageData(event) {
  event.preventDefault();
  userPercentageValue = parseInt(event.target.userPercentage.value);
  userPercentageValue /= 100;
  savingsAmount = Math.round(userPercentageValue * incomeRemaining);
  $('#addMoney').val(savingsAmount);
}
