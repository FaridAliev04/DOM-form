const form=document.getElementById("container_form")
const user=document.getElementById("name")
const password=document.getElementById("password")
const userError = document.querySelector("#userError")
const gmail=document.getElementById("email")
const userIcon=document.getElementById("userIcon")
const passwordError=document.getElementById("passwordError")
const gmailIcon=document.getElementById("gmailIcon")
const passwordSee=document.getElementById("password_icon-block")

const trueEmail=function(gmail){
    const re= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return re.test(String(gmail).toLowerCase())
}

const inputLabelPassword=function() {
    const passwordValue=password.value.trim()
    if(passwordValue===""){
        passwordError.textContent="Zehmet olmasa doldurun"
    } else if(passwordValue.length<9 && passwordValue.length>3){
        passwordError.textContent=""
        localStorage.setItem("Password",passwordValue)
    }
}


password.addEventListener("keydown" ,  inputLabelPassword)

const inputLabelUser=function(){
    const userValue=user.value.trim()
    // user
    if(userValue===""){
        userError.textContent="Zehmet olmasa formu doldrun"
        userIcon.style.color="red"
    }else{
        userError.textContent=""
        userIcon.style.color="black"
        localStorage.setItem("user",userValue)
    }

}
user.addEventListener("keyup", inputLabelUser)

const inputLabelEmail=function(){
    const gmailValue=gmail.value.trim()
    if(gmailValue===""){
        gmailError.textContent="Zehmet olmasa formu doldrun"
        gmailIcon.style.color="red"

    }else if(!trueEmail(gmailValue)){
        gmailError.textContent="Zehmet olmasa formu doldrun"
        gmailIcon.style.color="red"
    }else{
        gmailError.textContent=""
        gmailIcon.style.color="black"
        localStorage.setItem("Email",gmailValue)
    }
}

gmail.addEventListener("keydown", inputLabelEmail)

form.addEventListener("submit", function(e){
    e.preventDefault();
    inputLabelUser();
    inputLabelPassword();
    inputLabelEmail();
})
    
passwordSee.addEventListener("click",function(){
if(password.type==="password"){
    password.type="text"
}else{
    password.type="password"
}

})