
var money = prompt("Ваш бюджет на месяц?", '');
var time = prompt("Введите дату в формате YYYY-MM-DD", '');

var appData = {
  budget: money,
  timeData: time,
  expenses: {

      itemOfExpenditure1: prompt("Введите обязательную статью расходов в этом месяце", ''),
        howCost1: prompt("Во сколько обойдется?", ''),

      itemOfExpenditure2: prompt("Введите обязательную статью расходов в этом месяце", ''),
        howCost2: prompt("Во сколько обойдется?", ''),

        itemOfExpenditure1 : howCost1,
        itemOfExpenditure2 : howCost2

  },

  optionalExpenses: {},
  income: [],
  savings: false

};

alert(appData.budget/30);
