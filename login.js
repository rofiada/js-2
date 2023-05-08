let username = document.querySelector("#username")
let password = document.querySelector("#password")

let loginBtn = document.querySelector("#sign_in")

let getUser = localStorage.getItem("usernme")
let getPassword =localStorage.getItem("password")
console.log(getUser,getPassword)

loginBtn.addEventListener("click" , function(e){
    e.preventDefault()
    if (username.value === "" || password.value ==="") {
        alert("data fill")
    } else {
        if  ( (getUser && getUser.trim() === username.value.trim() && getPassword && getPassword.trim() ===  password.value.trim()))

      {

            setTimeout( () => {
                window.location = "index.html"
            } , 1000 )

        }else{
            alert("username or password is worng");
        }
    }
})