const form=document.getElementById("container_form")
const user=document.getElementById("user")
const password=document.getElementById("password")
let gerror = document.querySelector("#gmailError")

const gmail=document.getElementById("email")
const gIcon = document.querySelector("#gmailIcon")

// const trueEmail=function(gmail){
//     const re= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
//     return re.test(String(gmail).toLowerCase())
// }

function checkInputs(mail) {

    const re= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const checkGmail = re.test(String(mail).toLowerCase())
console.log(checkGmail)
    if(!checkGmail) {
        gerror.innerHTML="Emailinizi duzgun daxil edin";
        gerror.style.color="red"
        gIcon.style.color='red'
    }
    else{
        gerror.innerHTML="";
        gIcon.style.color='green'
    }

    
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const gmailValue = gmail.value.trim()
    console.log(gmailValue)

    checkInputs(gmailValue)


})


