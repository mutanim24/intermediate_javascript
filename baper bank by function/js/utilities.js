function getInputFieldAmount(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldAmount = parseFloat(inputField.value);
    inputField.value = "";
    return inputFieldAmount;
}

function getInnerTextItemById(tagId) {
    const tag = document.getElementById(tagId);
    const tagAmount = parseFloat(tag.innerText);
    return tagAmount;
}

function setInnerText(updateAmountElement, updateAmount) {
    const setPlace = document.getElementById(updateAmountElement);
    setPlace.innerText = updateAmount;
}