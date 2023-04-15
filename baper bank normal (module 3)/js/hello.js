document.getElementById("btn-login").addEventListener("click", function(){
    const emailField = document.getElementById("email-field");
    const email = emailField.value;

    const passField = document.getElementById("pass-field");
    const pass = passField.value;
    
    if(email === "tanim@gmail.com" && pass === "tanim@"){
        window.location.href = "http://127.0.0.1:5500/letsMoney.html";
    }
    else{
        alert("Invalid password or email adress");
    }
})