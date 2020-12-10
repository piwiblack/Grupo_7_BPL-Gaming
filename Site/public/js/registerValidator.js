

let qs = function (elemento) {
    return document.querySelector(elemento)
}

window.addEventListener('load', function () {

    let form = qs('form#register')

    let inputName = form.elements[0]
    let inputLastName = form.elements[1]
    let inputPhone = form.elements[2]
    let inputEmail = form.elements[3]
    let inputPasswprod = form.elements[4]
    let inputPasswprod2 = form.elements[5]
    let inputTermns = form.elements[6]


    let errores = {}
    let regExName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    let regExNumber = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;
    let regExEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;




    inputName.addEventListener('change', function () {
        switch (true) {
            case this.value.length === 0:
                errores.nombre = "El nombre es obligatorio";
                nameError.innerHTML = '<li>' + errores.nombre + '</li>';
                this.classList.add('is-invalid')
                break
            case !regExName.test(this.value):
                errores.nombre = "El nombre es invalido"
                nameError.innerHTML = '<li>' + errores.nombre + '</li>';
                this.classList.add('is-invalid')
                break
            case this.value.trim().length < 3:
                errores.nombre = "El nombre tienen que tener al menos 3 caracteres"
                nameError.innerHTML = '<li>' + errores.nombre + '</li>';
                this.classList.add('is-invalid')
                break
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                nameError.innerHTML = ""
                break
        }
    })

    inputLastName.addEventListener('change', function () {
        switch (true) {
            case this.value.length === 0:
                errores.apellido = "El apellido es obligatorio";
                lastNameError.innerHTML = '<li>' + errores.apellido + '</li>';
                this.classList.add('is-invalid')
                break;
            case !regExName.test(this.value):
                errores.apellido = "El apellido es invalido"
                lastNameError.innerHTML = '<li>' + errores.apellido + '</li>';
                this.classList.add('is-invalid')
                break
            case this.value.trim().length < 3:
                errores.apellido = "El apellido tienen que tener al menos 3 caracteres"
                lastNameError.innerHTML = '<li>' + errores.apellido + '</li>';
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                lastNameError.innerHTML = ""
                break;
        }
    })

    inputPhone.addEventListener('change', function () {
        switch (true) {
            case this.value.length = "":
                errores.phone = "El telefono es obligatorio";
                phoneError.innerHTML = errores.phone;
                this.classList.add('is-invalid')
                break;
            case !regExNumber.test(this.value):
                errores.phone = "Telefono invalido";
                phoneError.innerHTML = errores.phone;
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                phoneError.innerHTML = ""
                break;
        }
    })


    inputEmail.addEventListener('change', function () {
        switch (true) {
            case this.value == "":
                errores.email = "El email es obligatorio"
                emailError.innerHTML = errores.email;
                this.classList.add('is-invalid')
                break;
            case !regExEmail.test(this.value):
                errores.email = "El email es invalido"
                emailError.innerHTML = errores.email;
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                emailError.innerHTML = ""
                break;
        }
    })

    inputPasswprod.addEventListener('keyup', function () {
        switch (true) {
            case this.value == "":
                errores.password = "La contraseña es obligatoria"
                passwordError.innerHTML = errores.password;
                this.classList.add('is-invalid')
                break;
            case !regExPass.test(this.value):
                errores.password = "La contraseña debe tener mas de 8 caracteres, un numero, una minuscula y una mayuscula"
                passwordError.innerHTML = errores.password;
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                passwordError.innerHTML = ""
                break;
        }
    })

    inputPasswprod2.addEventListener('keyup', function () {
        switch (true) {
            case this.value == "":
                errores.password2 = "La verificacion de contraseña es obligatoria"
                confirmPassError.innerHTML = errores.password2;
                this.classList.add('is-invalid')
                break;
            case !regExPass.test(this.value):
                this.classList.add('is-invalid')
                break;
            case this.value !== inputPasswprod.value:
                errores.password2 = "Las contraseñas no coindicen"
                confirmPassError.innerHTML = errores.password2;
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                confirmPassError.innerHTML = ""
                break;
        }
    })

    inputTermns.addEventListener('change', function () {
        if (inputTermns.checked == false) {
            inputTermns.classList.add('is-invalid')
            errores.innerHTML = "Debes aceptar las bases y condiciones"
        } else {
            inputTermns.classList.remove('is-invalid')

        }
    })

    form.addEventListener('submit', function (event) {
        event.preventDefault()
        let error = false
        let elementoForm = this.elements;

        if (inputTermns.checked == false) {
            inputTermns.classList.add('is-invalid')
            errores.innerHTML = "Debes aceptar las bases y condiciones"
        }


        for (let i = 0; i < elementoForm.length - 1; i++) {
            if (elementoForm[i].value == "") {
                elementoForm[i].classList.add('is-invalid');
                emptyError.innerHTML = '<li>' + "Los campos señalados son obligatorios" + '</li>'
                error = true

            }

        }

        if (!error) {
            form.submit()

        }
    })
})
