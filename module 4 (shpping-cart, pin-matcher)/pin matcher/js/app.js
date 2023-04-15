function generatePin(){
    const randomNumber = Math.round(Math.random() * 10000);
    return randomNumber;
}

function organizePin(){
    const pinString = generatePin() + '';
    if(pinString.length == 4){
        return pinString;
    }
    else{
        return organizePin();
    }
}

document.getElementById("generate-btn").addEventListener("click", function(){
    const randomPin = organizePin();
    
    organizePin()
    // set pin on field
    const pinField = document.getElementById("pin-field");
    pinField.value = randomPin;
})
document.getElementById("calculator-btn").addEventListener("click", function(event){
    const character = event.target.innerText;
    const displayCalculator = document.getElementById("display-calculator");
    const newTypedNumber = displayCalculator.value + character;
    if(isNaN(character) == false){
        displayCalculator.value = newTypedNumber;
    }
    else{
        if(character === "C"){
            displayCalculator.value = "";
        }
        else if(character === "<"){
            const charSplit = newTypedNumber.split("");
            const dltChar = charSplit.pop();
            displayCalculator.value = dltChar.join("");

        }
    }
})