// function for getting quantity
function getQuantity(isIncrease, forFieldValue){
    const phoneQuantity = document.getElementById(forFieldValue);
    const phoneQuantityNumber = parseInt(phoneQuantity.value);
    let newPhoneQuantityNumber;
    if(isIncrease == true){
        newPhoneQuantityNumber = phoneQuantityNumber + 1;
    }
    else{
        newPhoneQuantityNumber = phoneQuantityNumber - 1;
    }

    phoneQuantity.value = newPhoneQuantityNumber;
    return newPhoneQuantityNumber;

}
// function for mgetting price
function getPrice(phoneQuantity, forPriceElement, price){
    const iphonePriceElement = document.getElementById(forPriceElement);
    const iphonePrice = phoneQuantity * price;
    iphonePriceElement.innerText = iphonePrice;
}
// function for get total price of phone & case
function getPhoneCasePrice(phoneTotal){
    const totalPhonePriceElement = document.getElementById(phoneTotal);
    const totalPhonePriceElementAmount = parseInt(totalPhonePriceElement.innerText);
    return totalPhonePriceElementAmount;
}
// function for set subtotal & tax
function setSubtotalAndTax(phoneTotalPrice, caseTotalPrice){
    const currentSubTotal = phoneTotalPrice + caseTotalPrice;
    const subTotal = document.getElementById("sub-total");
    subTotal.innerText = currentSubTotal;

    const taxString = (currentSubTotal * 0.1).toFixed(2);
    const tax = parseFloat(taxString);
    const taxTotal = document.getElementById("tax-total");
    taxTotal.innerText = tax;

    const overallTotal = document.getElementById("total");
    overallTotal.innerText = currentSubTotal + tax;
}

// phone calculate
document.getElementById("iphone-minus").addEventListener("click", function(){
    const phoneQuantity = getQuantity(false, "phone-quantity");

    getPrice(phoneQuantity, "iphone-price", 999);
    // calculate total and tax
    const phoneTotalPrice = getPhoneCasePrice("iphone-price");
    const caseTotalPrice = getPhoneCasePrice("case-price");

    setSubtotalAndTax(phoneTotalPrice, caseTotalPrice);
})

document.getElementById("iphone-plus").addEventListener("click", function(){
    const phoneQuantity = getQuantity(true, "phone-quantity");
    // price calculate
    getPrice(phoneQuantity, "iphone-price", 999);
    // total price calculate
    const phoneTotalPrice = getPhoneCasePrice("iphone-price");
    const caseTotalPrice = getPhoneCasePrice("case-price");

    setSubtotalAndTax(phoneTotalPrice, caseTotalPrice);
})

// case calculate
document.getElementById("case-minus").addEventListener("click", function(){
    const caseQuantity = getQuantity(false, "case-quantity");
    getPrice(caseQuantity, "case-price", 59);
    // calculate total and tax
    const phoneTotalPrice = getPhoneCasePrice("iphone-price");
    const caseTotalPrice = getPhoneCasePrice("case-price");

    setSubtotalAndTax(phoneTotalPrice, caseTotalPrice);
    
})

document.getElementById("case-plus").addEventListener("click", function(){
    const caseQuantity = getQuantity(true, "case-quantity");
    getPrice(caseQuantity, "case-price", 59)
    // calculate total and tax
    const phoneTotalPrice = getPhoneCasePrice("iphone-price");
    const caseTotalPrice = getPhoneCasePrice("case-price");

    setSubtotalAndTax(phoneTotalPrice, caseTotalPrice);
    
})