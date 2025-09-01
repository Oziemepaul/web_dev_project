function validateForm(){
    //clear error messages
    const inputs = document.querySelectorAll("input")
    const errors = document.querySelectorAll(".errors")
    inputs.forEach((input) => input.classList.remove("invalid"));
    errors.forEach((error) => (error.textContent = ""))
    const textArea = document.querySelector("textarea")
    textArea.classList.remove("invalid")

    let invalid = false;
    //firstname validation and lastname validation
    const firstname = document.querySelector("#firstname")
    const lastname = document.querySelector("#lastname")
    const firstname_err = document.querySelector(".firstname_err")
    const lastname_err = document.querySelector(".lastname_err")

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
//textarea validation
    const textarea = document.querySelector("#textarea")
    const textarea_error = document.querySelector(".textarea_error")

    if(textarea.value == ""){
        textarea_error.textContent = "This field is required"
        textarea.classList.add("invalid")
        invalid = true
    }
//form validation
    if(!invalid){
        const success = document.querySelector(".success-container")
        success.style.transform = "translateY(0)"
        firstname.value = ""
        lastname.value = ""
        email.value = ""
        textarea.value = ""
    }
}
document.querySelector("#myForm").addEventListener("submit", (event) =>{
    event.preventDefault()
    validateForm()
})
