let showPass = document.getElementsByClassName("show-pass")[0]
let pass = document.getElementById("myPass")

function toggleFun() {
    if(pass.type === 'password'){
        pass.type = 'text'
    }
    else{
        pass.type = 'password'
    }
}

showPass.addEventListener('click',toggleFun)