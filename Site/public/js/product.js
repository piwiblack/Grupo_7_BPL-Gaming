let qs = function (elemento) {
    return document.querySelector(elemento)
}

window.addEventListener('load', function () {

    let form = qs('form#register')

    let inputName = form.elements[0]
    let inputPrice = form.elements[1]
    let inputCategory = form.elements[2]
    let inputDescription = form.elements[3]
    let inputPhoto = form.elements[4]
    let inputWarranty = form.elements[5]

    let errores = {}
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
console.log(form.elements)


    inputName.addEventListener('blur', function () {
        switch (true) {
            case this.value.length === 0:
                errores.nombre = "El campo nombre es obligatorio";
                errors.innerHTML = '<li>' + errores.nombre + '</li>';
                this.classList.add('is-invalid')
                break
            case this.value.trim().length <= 3:
                errores.nombre = "El nombre tienen que tener al menos 3 caracteres"
                errors.innerHTML = '<li>' + errores.nombre + '</li>';
                this.classList.add('is-invalid')
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errors.innerHTML = ""
        }
    })

    inputPrice.addEventListener('blur', function () {
        switch (true) {
            case this.value.length === 0:
                errores.precio = "El campo precio es obligatorio";
                errors.innerHTML = '<li>' + errores.precio + '</li>';
                this.classList.add('is-invalid')
                break;
            case this.value.isInteger:
                errores.precio = "El precio tiene que ser un numero"
                errors.innerHTML = '<li>' + errores.precio + '</li>';
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errors.innerHTML = ""
                break;
        }
    })

    inputCategory.addEventListener('blur', function () {
        switch (true) {
            case this.value.length == undefined:
                errores.categoria = "El campo categoria es obligatorio";
                errors.innerHTML = '<li>' + errores.categoria + '</li>';
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                break;
        }
    })


    inputDescription.addEventListener('blur', function () {
        switch (true) {
            case this.value == "":
                errores.descripcion = "El campo descripcion es obligatorio"
                errors.innerHTML = '<li>' + errores.descripcion + '</li>';
                this.classList.add('is-invalid')
                break;
            case this.value <= 20:
                errores.descripcion = "La descripcion debe tener mas de 20 caracteres"
                errors.innerHTML = '<li>' + errores.descripcion + '</li>';
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errors.innerHTML = ""
                break;
        }
    })


    inputPhoto.addEventListener('change', function (e) {
        switch (true) {
            case !regExExtensions.test(this.value):
                errores.photo = "Solo imagenes con extension jpg, jpeg, png o gif"
                erorrs.innerHTML = errores.photo
                this, classList.add('is-invalid')
                this.value = "";
                vistaPrevia.src = ""
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errors.innerHTML = ""
                let reader = new FileReader();
                reader.readAsDataURL(e.target.file[0]);

                reader.onload = function () {
                    vistaPrevia.src = reader.result
                }
                break;
        }
    })

    inputWarranty.addEventListener('blur', function () {
        switch (true) {
            case this.value.isInteger:
                errores.garantia = "El garantia tiene que ser un numero"
                errors.innerHTML = '<li>' + errores.garantia + '</li>';
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                errors.innerHTML = ""
                break;
        }
    })

    form.addEventListener('submit', function (event) {
        event.preventDefault()
        let error = false
        let elementoForm = this.elements;

        for (let i = 0; i < elementoForm.length - 5; i++) {
            if (elementoForm[i].value == "") {
                elementoForm[i].classList.add('is-invalid');
                errors.innerHTML = '<li>' + "Los campos señalados son obligatorios" + '</li>'
                error = true
            }
        }

        if (!error) {
            form.submit()
        }
    })
})

