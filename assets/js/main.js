const parallax = document.getElementById("parallax-img");
window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 0.1 + "px"

})

function validateForm() {
    let validations = "";
    let formName = document.getElementById("name");
    if (formName.value == "") {
        validations += "Debe ingresar un nombre \n"
    }

    let formEmail = document.getElementById("email");
    if (formEmail.value == "") {
        validations += "Debe ingresar un email \n"
    }

    let formPhone = document.getElementById("phone");
    if (formPhone.value == "") {
        validations += "Debe ingresar un teléfono \n"
    }

    let formRequirement = document.getElementById("requirement");
    if (formRequirement.value == "") {
        validations += "Debe ingresar un requerimiento \n"
    }

    if (validations != "") {
        alert(validations)
        formName.focus();
        return false;
    } else {
        alert("Pronto te Responderemos!")
        cleanForm()
        return true
    }
}

function cleanForm() {
    let formName = document.getElementById("name")
    formName.value = ""

    let formEmail = document.getElementById("email")
    formEmail.value = ""

    let formPhone = document.getElementById("phone")
    formPhone.value = ""

    let formRequirement = document.getElementById("requirement");
    formRequirement.value = ""
}