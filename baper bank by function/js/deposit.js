// function getInputFieldAmount(inputFieldId) {
//     const inputField = document.getElementById(inputFieldId);
//     const inputFieldAmount = parseFloat(inputField.value);
//     inputField.value = "";
//     return inputFieldAmount;
// }

// function getInnerTextItemById(tagId) {
//     const tag = document.getElementById(tagId);
//     const tagAmount = parseFloat(tag.innerText);
//     return tagAmount;
// }

// function setInnerText(updateAmountElement, updateAmount) {
//     const setPlace = document.getElementById(updateAmountElement);
//     setPlace.innerText = updateAmount;
// }

document.getElementById("btn-deposit").addEventListener("click", function () {
    //get new deposit  amount
    const depositAmount = getInputFieldAmount("deposit-field");
    // get previous deposited amount
    const totalDepositAmount = getInnerTextItemById("total-deposit");
    //calculate deposit balance
    const updateDeposit = totalDepositAmount + depositAmount;
    //set deposit amount
    setInnerText("total-deposit", updateDeposit)
    // get total previous balance
    const totalBalenceAmount = getInnerTextItemById("total-balence");
    // calculate total balance
    const updateTotalBalenceAmount = totalBalenceAmount + depositAmount;
    // set total balence
    setInnerText("total-balence", updateTotalBalenceAmount);


    // document.getElementById("total-deposit").innerText = updateDeposit;

})