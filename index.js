let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

for(let x=0;x<weeklyExpenseQuestions.length;i++){
    let answer=parseFloat(window.prompt(weeklyExpenseQuestions[0]))
weeklyExpenses=weeklyExpenses+answer
}
for(let x=0;x<monthlyExpenseQuestions.length;i++){
    let answer=parseFloat(window.prompt(monthlyExpenseQuestions[0]))
monthlyExpenses=monthlyExpenses+answer
}