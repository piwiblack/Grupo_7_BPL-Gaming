let qs = function(elemento){
    return document.querySelector(elemento)
}

window.addEventListener('load', function(){

    let form = qs('form#register')

    let inputName = form.elements[0]
    let inputLastName = form.elements[1]
    let inputPhone = form.elements[2]
    let inputEmail = form.elements[3]
    let inputPasswprod = form.elements[4]
    let inputPasswprod2 = form.elements[5]
    //let inputTermns = form.elements[6]
    
    let errores = {}
    let regPhone = /^[0-9]{10}$/;
    let regExEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    


    inputName.addEventListener('change', function(){
        switch(true){
            case this.value.length === 0:
                errores.nombre = "El campo nombre es obligatorio";
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

    inputLastName.addEventListener('change', function(){
        switch(true){
            case this.value.length === 0:
                errores.apellido = "El campo apellido es obligatorio";
                lastNameError.innerHTML = '<li>' + errores.apellido + '</li>';
                this.classList.add('is-invalid')
                break;
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
    
    inputPhone.addEventListener('change', function(){
        switch(true){
            case this.value.length = "":
                errores.phone = "El campo telefono es obligatorio";
                phoneError.innerHTML = '<li>' + errores.phone + '</li>';
                this.classList.add('is-invalid')
                break;
            case !regPhone.test(this.value):
                errores.phone = "Tenes que escribir un telefono valido";
                phoneError.innerHTML = '<li>' + errores.phone + '</li>';
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                phoneError.innerHTML = ""
                break;
        }
    })


    inputEmail.addEventListener('change', function(){
        switch(true){
            case this.value == "":
                errores.email = "El campo email es obligatorio"
                emailError.innerHTML = '<li>' + errores.email + '</li>';
                this.classList.add('is-invalid')
                break;
            case !regExEmail.test(this.value):
                errores.email = "Debes escribir un mail valido"
                emailError.innerHTML = '<li>' + errores.email + '</li>';
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                emailError.innerHTML = ""
                break;
        }
    })

    inputPasswprod.addEventListener('change', function(){
        switch(true){
            case this.value == "":
                errores.password = "La contraseña es obligatoria"
                passwordError.innerHTML = '<li>' + errores.password + '</li>';
                this.classList.add('is-invalid')
                break;
            case !regExPass.test(this.value):
                errores.password = "La contraseña debe tener mas de 8 caracteres, un numero, una minuscula y una mayuscula"
                passwordError.innerHTML = '<li>' + errores.password + '</li>';
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                passwordError.innerHTML = ""
                break;
        }
    })

    inputPasswprod2.addEventListener('change', function(){
        switch(true){
            case this.value == "":
                errores.password2 = "La verificacion de contraseña es obligatoria"
                confirmPassError.innerHTML = '<li>' + errores.password2 + '</li>';
                this.classList.add('is-invalid')
                break;
            case this.value !== inputPasswprod.value:
                errores.password2 = "Las contraseñas no coindicen"
                confirmPassError.innerHTML = '<li>' + errores.password2 + '</li>';
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                confirmPassError.innerHTML = ""
                break;
        }
    })

    form.addEventListener('submit', function(event){
        event.preventDefault()
        let error = false
        let elementoForm = this.elements;

        for (let i = 0; i < elementoForm.length -1; i++) {
            if(elementoForm[i].value == ""){
                elementoForm[i].classList.add('is-invalid');
                emptyError.innerHTML = '<li>' + "Los campos señalados son obligatorios" + '</li>'
                error = true
            }
        }

        if(!error){
            form.submit()
        }
    })

   /* inputTermns.addEventListener('change', function(){
        switch(true){
            case this.value == undefined:
                errors.termns = "Debe estar de acuerdo con los terminos y condiciones";
                errors.innerHTML = '<li>' + errors.termns + '</li>'
                this.classList.add('is-invalid')
            default:
                this.classList.remove('is-invalid')
                errors.innerHTML = ""
                break;
        }
    })*/


})
// let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
/*        inputPhoto.addEventListener('change', function(e){
            switch(true){
                case !regExExtensions.test(this.value):
                    errores.photo = "Solo imagenes con extension jpg, jpeg, png o gif"
                    erorrs.innerHTML = errores.photo
                    this,classList.add('is-invalid')
                    this.value = "";
                    vistaPrevia.src = ""
                    break;
                default:
                    this.classList.remove('is-invalid')
                    this.classList.add('is-valid')
                    errors.innerHTML = ""
                    let reader = new FileReader();
                    reader.readAsDataURL(e.target.file[0]);

                    reader.onload = function(){
                        vistaPrevia.src = reader.result
                    }
                    break;
            }
        })
*/

/*
let qs = function(elemento){
    return document.querySelector(elemento)
}

window.addEventListener('load', function(){

    let form = qs('form#register')

    let inputName = form.elements[0]
    let inputLastName = form.elements[1]
    let inputPhone = form.elements[2]
    let inputEmail = form.elements[3]
    let inputPasswprod = form.elements[4]
    let inputPasswprod2 = form.elements[5]
    //let inputTermns = form.elements[6]
    
    let errores = {}
    let regPhone = /^[0-9]{10}$/;
    let regExEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    

    form.addEventListener('submit', function(event){
        event.preventDefault()
        let error = false
        let elementoForm = this.elements;

        switch(true){
            case inputName.value.length === 0:
                errores.nombre = "El campo nombre es obligatorio";
                nameError.innerHTML = errores.nombre;
                inputName.classList.add('is-invalid')
                break
            case inputName.value.trim().length < 3:
                errores.nombre = "El nombre tienen que tener al menos 3 caracteres"
                nameError.innerHTML = errores.nombre ;
                inputName.classList.add('is-invalid')
                break
            default:
                inputName.classList.remove('is-invalid')
                inputName.classList.add('is-valid')
                nameError.innerHTML = ""
                break
        }

        switch(true){
            case inputLastName.value.length === 0:
                errores.apellido = "El campo apellido es obligatorio";
                lastNameError.innerHTML = '<li>' + errores.apellido + '</li>';
                inputLastName.classList.add('is-invalid')
                break;
            case inputLastName.value.trim().length <= 3:
                errores.apellido = "El apellido tienen que tener al menos 3 caracteres"
                lastNameError.innerHTML = '<li>' + errores.apellido + '</li>';
                inputLastName.classList.add('is-invalid')
                break;
            default:
                inputLastName.classList.remove('is-invalid')
                inputLastName.classList.add('is-valid')
                lastNameError.innerHTML = ""
                break;
        }

        switch(true){
            case inputPhone.value.length = "":
                errores.phone = "El campo telefono es obligatorio";
                phoneError.innerHTML = '<li>' + errores.phone + '</li>';
                inputPhone.classList.add('is-invalid')
                break;
            case !regPhone.test(inputPhone.value):
                errores.phone = "Tenes que escribir un telefono valido";
                phoneError.innerHTML = '<li>' + errores.phone + '</li>';
                inputPhone.classList.add('is-invalid')
                break;
            default:
                inputPhone.classList.remove('is-invalid')
                inputPhone.classList.add('is-valid')
                phoneError.innerHTML = ""
                break;
        }

        switch(true){
            case inputEmail.value == "":
                errores.email = "El campo email es obligatorio"
                emailError.innerHTML = '<li>' + errores.email + '</li>';
                inputEmail.classList.add('is-invalid')
                break;
            case !regExEmail.test(inputEmail.value):
                errores.email = "Debes escribir un mail valido"
                emailError.innerHTML = '<li>' + errores.email + '</li>';
                inputEmail.classList.add('is-invalid')
                break;
            default:
                inputEmail.classList.remove('is-invalid')
                inputEmail.classList.add('is-valid')
                emailError.innerHTML = ""
                break;
        }

        switch(true){
            case inputPasswprod.value == "":
                errores.password = "La contraseña es obligatoria"
                passwordError.innerHTML = '<li>' + errores.password + '</li>';
                inputPasswprod.classList.add('is-invalid')
                break;
            case !regExPass.test(inputPasswprod.value):
                errores.password = "La contraseña debe tener mas de 8 caracteres, un numero, una minuscula y una mayuscula"
                passwordError.innerHTML = '<li>' + errores.password + '</li>';
                inputPasswprod.classList.add('is-invalid')
                break;
            default:
                inputPasswprod.classList.remove('is-invalid')
                inputPasswprod.classList.add('is-valid')
                passwordError.innerHTML = ""
                break;
        }

        switch(true){
            case inputPasswprod2.value == "":
                errores.password2 = "La verificacion de contraseña es obligatoria"
                confirmPassError.innerHTML = '<li>' + errores.password2 + '</li>';
                inputPasswprod2.classList.add('is-invalid')
                break;
            case inputPasswprod2.value !== inputPasswprod.value:
                errores.password2 = "Las contraseñas no coindicen"
                confirmPassError.innerHTML = '<li>' + errores.password2 + '</li>';
                inputPasswprod2.classList.add('is-invalid')
                break;
            default:
                inputPasswprod2.classList.remove('is-invalid')
                inputPasswprod2.classList.add('is-valid')
                confirmPassError.innerHTML = ""
                break;
        }

        for (let i = 0; i < elementoForm.length -1; i++) {
            if(elementoForm[i].value == ""){
                elementoForm[i].classList.add('is-invalid');
                errors.innerHTML = '<li>' + "Los campos señalados son obligatorios" + '</li>'
                error = true
            }
        }

        if(!error){
            form.submit()
        }
    })


   /* inputTermns.addEventListener('change', function(){
        switch(true){
            case this.value == undefined:
                errors.termns = "Debe estar de acuerdo con los terminos y condiciones";
                errors.innerHTML = '<li>' + errors.termns + '</li>'
                this.classList.add('is-invalid')
            default:
                this.classList.remove('is-invalid')
                errors.innerHTML = ""
                break;
        }
    })*/

   
//})
// let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
/*        inputPhoto.addEventListener('change', function(e){
            switch(true){
                case !regExExtensions.test(this.value):
                    errores.photo = "Solo imagenes con extension jpg, jpeg, png o gif"
                    erorrs.innerHTML = errores.photo
                    this,classList.add('is-invalid')
                    this.value = "";
                    vistaPrevia.src = ""
                    break;
                default:
                    this.classList.remove('is-invalid')
                    this.classList.add('is-valid')
                    errors.innerHTML = ""
                    let reader = new FileReader();
                    reader.readAsDataURL(e.target.file[0]);

                    reader.onload = function(){
                        vistaPrevia.src = reader.result
                    }
                    break;
            }
        })
*/