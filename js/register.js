let isSelected = false;
function validateForm(){
    //clear error messages
    const inputs = document.querySelectorAll("input")
    const errors = document.querySelectorAll(".errors")
    inputs.forEach((input) => input.classList.remove("invalid"));
    errors.forEach((error) => (error.textContent = ""))

    let invalid = false;
    //firstname validation and lastname validation and password verification
    const firstname = document.querySelector("#firstname")
    const lastname = document.querySelector("#lastname")
    const firstname_err = document.querySelector(".firstname_err")
    const lastname_err = document.querySelector(".lastname_err")
    const password = document.querySelector("#password")
    const password_err = document.querySelector(".password_err")
    const confirm_password = document.querySelector("#confirm_password")
    const confirm_password_err = document.querySelector(".confirm_password_err")


    if(firstname.value == ""){
        firstname_err.textContent = "This field is required"
        firstname.classList.add("invalid")
        invalid = true
    } 
    if (lastname.value == ""){
        lastname_err.textContent = "This field is required";
        lastname.classList.add("invalid");
        invalid = true
    }
    //email validation
    const email_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const email = document.querySelector("#email")
    const email_err = document.querySelector(".email_err")

    if(email.value.trim() == ""){
        email_err.textContent = "This field is required"
        email.classList.add("invalid")
        invalid = true
    }else if(!email_regex.test(email.value.trim())){
        email_err.textContent = "Please enter a valid email address"
        email.classList.add("invalid")
        invalid = true
    }
//query validation
    const query_error = document.querySelector(".query_error")
    if (!isSelected){
        query_error.textContent = "Please select a mode of learning"
        invalid = true
    }

    if(password.value == ""){
        password_err.textContent = "This field is required"
        password.classList.add("invalid")
        invalid = true
    } 
    if (confirm_password.value == ""){
        confirm_password_err.textContent = "Password must be the same";
        confirm_password.classList.add("invalid");
        invalid = true
    }
//form validation
    if(!invalid){
        const success = document.querySelector(".success-container")
        success.style.transform = "translateY(0)"
        firstname.value = ""
        lastname.value = ""
        email.value = ""
        general_enquiry.classList.remove("selected")
        support_requested.classList.remove("selected")
        password.value = ""
        confirm_password.value = ""
    }
}
document.querySelector("#myForm").addEventListener("submit", (event) =>{
    event.preventDefault()
    validateForm()
})
//for calling up the the circle image in the query
const general_enquiry = document.querySelector("#general_enquiry")
general_enquiry.onclick = () =>{
    general_enquiry.classList.add("selected")
    support_requested.classList.remove("selected")
    isSelected = true
}

const support_requested = document.querySelector("#support_requested")
support_requested.onclick = () =>{
    support_requested.classList.add("selected")
    general_enquiry.classList.remove("selected")
    isSelected = true
}
