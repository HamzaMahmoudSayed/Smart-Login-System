let userNameInput = document.getElementById("userName")
let userEmailInput = document.getElementById("userEmail")
let userPasswordInput = document.getElementById("userPassword")
let btnSignUp = document.getElementById("btnSignUp")
let btnLogIn = document.getElementById("btnLogIn")
let usersContainer = [];

if (JSON.parse(localStorage.getItem("users"))) {
    usersContainer = JSON.parse(localStorage.getItem("users"))
}

let index;
for (let i = 0; i < usersContainer.length; i++) {
    index = i
}

btnSignUp?.addEventListener("click", function () {
    let user = {
        name: userNameInput.value,
        email: userEmailInput.value,
        password: userPasswordInput.value,

    }

    usersContainer.push(user)
    if (userNameInput.value == "" || userEmailInput.value == "" || userPasswordInput.value == "") {
        document.getElementById("validOrUnvalid").innerHTML = "Some inputs is required"
    } else if (userEmailInput.value == usersContainer[index]?.email) {
        document.getElementById("validOrUnvalid").innerHTML = "This Email Already exist"
    } else {
        localStorage.setItem("users", JSON.stringify(usersContainer))
        document.getElementById("link").setAttribute("href", "index.html")
    }

})

btnLogIn?.addEventListener("click", function () {
    if (usersContainer[index].email == userEmailInput.value && usersContainer[index].password == userPasswordInput.value) {
        document.getElementById("link").setAttribute("href", "home.html")
    } else if (userEmailInput.value == "" || userPasswordInput.value == "") {
        document.getElementById("validOrUnvalid").innerHTML = "All inputs is required"
    } else if (usersContainer[index].email !== userEmailInput.value || usersContainer[index].password !== userPasswordInput.value) {
        document.getElementById("validOrUnvalid").innerHTML = "incorrect email or password"
    } else {
        document.getElementById("validOrUnvalid").innerHTML = "incorrect email or password"
    }


})

function validateInputs(element) {
    let regex = {
        userName: /^[a-zA-Z0-9_-]{3,15}$/,
        userPassword: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        userEmail: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/
    }
    if (regex[element.id].test(element.value) == true) {
        element.classList.add("is-valid")
        element.classList.remove("is-invalid")
        element.nextElementSibling.classList.replace("d-block", "d-none")
        return true;
    } else {
        element.classList.add("is-invalid")
        element.classList.remove("is-valid")
        element.nextElementSibling.classList.replace("d-none", "d-block")
        return false;
    }
}
