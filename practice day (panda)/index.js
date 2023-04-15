// h2 color change by js
const headings = document.getElementsByTagName("h2");
for(const heding of headings){
    heding.style.color = "lightblue";
}

//background change by js
const backPack =  document.getElementById("backpack");
backPack.style.backgroundColor = "tomato";
backPack.style.borderRadius = "8px";

//border radius by js
const cards = document.getElementsByClassName("card");
for(const card of cards){
    card.style.borderRadius = "30px";
}

function btnClick(){
    console.log("button clicked");
}

// button for remove card
const buttnos = document.getElementsByClassName("btn-rmv");
for(const button of buttnos){
    button.addEventListener("click", function(event){
        event.target.parentNode.parentNode.style.display = "none";
    })
}

//submit email event
document.getElementById("exampleInputEmail1").addEventListener("keyup", function(event){
    const inputText = event.target.value;
    const submitBtn = document.getElementById("submit-btn");
    if(inputText == "email"){
        submitBtn.removeAttribute("disabled");
    }
    else{
        submitBtn.setAttribute("disabled", true)
    }
})

// img change

document.getElementById("img-change").addEventListener("mouseenter", function(event){
    event.target.src = "images/shoes/shoe-2.png"
})

document.getElementById("img-change").addEventListener("mouseleave", function(event){
    event.target.src = "images/shoes/shoe-1.png"
})

// bg change 
document.getElementById("lets-sec").addEventListener("dblclick", function(event){
    event.target.style.backgroundColor = "orange";
})