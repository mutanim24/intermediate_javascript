// step ---1
document.getElementById("btn-withdraw").addEventListener("click", function(){
    // stpe ---2
    const withdrawFiled = document.getElementById("withdraw-field");
    const withdrawAmount = parseFloat(withdrawFiled.value);
    // stpe ---3
    withdrawFiled.value = "";
    // step ---4
    const totalWithdraw = document.getElementById("total-withdraw");
    const totalWithdrawAmount = parseFloat(totalWithdraw.innerText);
    // step ---5
    const updateWithdrawAmount = totalWithdrawAmount + withdrawAmount;
    totalWithdraw.innerText = updateWithdrawAmount;
    // step ---6
    const totalBalence = document.getElementById("total-balence");
    const totalBalenceAmount = parseFloat(totalBalence.innerText);
    // step ---7
    const updateTotalBalenceAmount = totalBalenceAmount - withdrawAmount;
    totalBalence.innerText = updateTotalBalenceAmount;
})