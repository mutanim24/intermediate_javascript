document.getElementById("btn-apply").addEventListener("click", function(){
    const price = document.getElementById("price");
    const priceAmount = parseFloat(price.innerText);

    const discountPrice = (priceAmount / 100) * 70;
    const discountPriceSet = document.getElementById("discountPrice");
    discountPriceSet.innerText = discountPrice;
})