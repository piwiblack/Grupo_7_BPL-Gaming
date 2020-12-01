let qs = function(element){
    return document.querySelector(element)
}

window.addEventListener('load', function(){

    let form = qs('form#login')

    let inputEmail = form.elements[0]
    let inputPassword = form.elements[1]


    let errores = {}
    let regExEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let regExPass = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    

    inputEmail.addEventListener('change', function(){
        switch(true){
            case this.value == "":
                errores.email = "El campo usuario es obligatorio"
                errors.innerHTML = '<li>' + errores.email + '</li>';
                this.classList.add('is-invalid')
                break;
            case !regExEmail.test(this.value):
                errores.email = "Debes escribir un mail valido"
                errors.innerHTML = '<li>' + errores.email + '</li>';
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errors.innerHTML = ""
                break;
        }
    })

    inputPassword.addEventListener('change', function(){
        switch(true){
            case this.value == "":
                errores.password = "La contraseña es obligatoria"
                errors.innerHTML = '<li>' + errores.password + '</li>';
                this.classList.add('is-invalid')
                break;
            case !regExPass.test(this.value):
                errores.password = "La contraseña es invalida"
                errors.innerHTML = '<li>' + errores.password + '</li>';
                break;
            default:
                this.classList.remove('is-invalid')
                errors.innerHTML = ""
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
                errors.innerHTML = '<li>' + "Los campos señalados son obligatorios" + '</li>'
                error = true
            }
        }

        if(!error){
            form.submit()
        }
    })
})



