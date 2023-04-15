// withdraw button
// step --- 1
document.getElementById("btn-deposit").addEventListener("click", function(){
    // step ---3
    const depositField = document.getElementById("deposit-field");
    const depositAmount = parseFloat(depositField.value);
    // step ---3
    depositField.value = "";
    // step ---4
    const totalDeposit = document.getElementById("total-deposit");
    const totalDepositAmount = parseFloat(totalDeposit.innerText);
    //step ---5
    const updateDepositAmount = totalDepositAmount + depositAmount;
    totalDeposit.innerText = updateDepositAmount;
    //step ---6
    const totalBalence = document.getElementById("total-balence");
    const totalBalenceAmount = parseFloat(totalBalence.innerText);
    // step ---7
    const updateTotalBalenceAmount = totalBalenceAmount + depositAmount;
    totalBalence.innerText = updateTotalBalenceAmount;
    
})