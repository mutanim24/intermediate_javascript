document.getElementById("btn-withdraw").addEventListener("click", function(){
    const withdrawAmount = getInputFieldAmount("withdraw-field");
    const totalWithdrawAmount = getInnerTextItemById("total-withdraw");
    const updateTotalWithdraw = totalWithdrawAmount + withdrawAmount;
    setInnerText("total-withdraw", updateTotalWithdraw);

    const totalBalenceAmount = getInnerTextItemById("total-balence");
    const updateTotalBalenceAmount = totalBalenceAmount - withdrawAmount;
    setInnerText("total-balence", updateTotalBalenceAmount);


})