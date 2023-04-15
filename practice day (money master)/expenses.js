document.getElementById("btn-expenses").addEventListener("click", function(){
    // multiple expenses
    const food = document.getElementById("food");
    const foodAmount = parseFloat(food.value)
    const rent = document.getElementById("rent");
    const rentAmount = parseFloat(rent.value);
    const clothes = document.getElementById("cloth");
    const clothesAmount = parseFloat(clothes.value);

    // total expenses
    const totalExpensesElement = document.getElementById("total-expenses");
    const totalExpenses = foodAmount + rentAmount + clothesAmount;
    totalExpensesElement.innerText = totalExpenses;

    // calculate balance
    const income = document.getElementById("income");
    const incomeAmount = parseFloat(income.value);

    const newBalance = incomeAmount - totalExpenses;
    const balance = document.getElementById("balance");
    balance.innerText = newBalance;
    
    
})


document.getElementById("btn-save").addEventListener("click", function(){
    const income = document.getElementById("income");
    const incomeAmount = parseFloat(income.value);

    const savePracent = document.getElementById("save-parcent");
    const savePracentNumber = parseFloat(savePracent.value);

    const saveAmount = (incomeAmount / 100) * savePracentNumber;

    const saveAmountElement = document.getElementById("save-amount");
    saveAmountElement.innerText = saveAmount;

    const remainingBalance = document.getElementById("remaining-balance");
    const remainingBalanceAmount = newBalance - saveAmount;
    remainingBalance.innerText = remainingBalanceAmount;

})