function validateEmail(){
    const email = document.getElementById("email")
    const error = document.getElementById("error")

    if(!email.checkValidity()){
        error.innerHTML = "Please provide a valid email"
    }
}

function redefineError(){
    const error = document.getElementById("error")
    
    if(error.innerHTML == "Please provide a valid email"){
        error.innerHTML = ""
    }
}