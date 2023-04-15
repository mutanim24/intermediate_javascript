document.getElementById("bold").addEventListener("click", function(){
    const inputText = document.getElementById("inputText");
    inputText.style.fontWeight = "800";

})
document.getElementById("italic").addEventListener("click", function(){
    const inputText = document.getElementById("inputText");
    inputText.style.fontStyle = "italic";

})
document.getElementById("underline").addEventListener("click", function(){
    const inputText = document.getElementById("inputText");
    inputText.style.textDecoration = "underline";

})


// left right control
document.getElementById("left").addEventListener("click", function(){
    const inputText = document.getElementById("inputText");
    inputText.style.textAlign = "left";

})
document.getElementById("center").addEventListener("click", function(){
    const inputText = document.getElementById("inputText");
    inputText.style.textAlign = "center";

})
document.getElementById("right").addEventListener("click", function(){
    const inputText = document.getElementById("inputText");
    inputText.style.textAlign = "right";

})
// font size
document.getElementById("font-size").addEventListener("input", function(){
    const inputFontSize = document.getElementById("font-size");
    const fontSizeValue = inputFontSize.value;

    const inputText = document.getElementById("inputText");
    inputText.style.fontSize = fontSizeValue + "px";
})
// lower and smaller case
document.getElementById("upper-case").addEventListener("click", function(){
    const inputText = document.getElementById("inputText");
    inputText.style.textTransform = "uppercase";
})
// color select
document.getElementById("input-color").addEventListener("input", function(){
    const inputColor = document.getElementById("input-color");
    const inputText = document.getElementById("inputText");

    const selectColor = inputColor.value;
    inputText.style.color = selectColor;
})
