let qs = function (elemento) {
    return document.querySelector(elemento)
}

function increment() {
    document.getElementById('demoInput').stepUp();
}
function decrement() {
    document.getElementById('demoInput').stepDown();
}

function ConfirmCancelEdit(){
    var respuesta = confirm("¿Esta seguro que desea descartar los cambios?")

    if(respuesta == true){
        return true
    }else{
        return false
    }
}

function ConfirmEdit(){
    var respuesta = confirm("¿Esta seguro que desea guardar los cambios?")

    if(respuesta == true){
        return true
    }else{
        return false
    }
}




window.addEventListener('load', function () {

    let form = qs('form#edit')

    let inputName = form.elements[0]
    let inputPrice = form.elements[1]
    let inputCategory = form.elements[2]
    let inputDescription = form.elements[3]
    let inputPhoto = form.elements[4]
    let inputWarranty = form.elements[6]

    console.log(form.elements)

    let errores = {}
    let regExExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    let regExNumber = /^[+]?([0-9]+(?:[\.][0-9]*)?|\.[0-9]+)$/;



    inputName.addEventListener('change', function () {
        switch (true) {
            case this.value.length === 0:
                errores.nombre = "El nombre es obligatorio";
                nameError.innerHTML = errores.nombre;
                this.classList.add('is-invalid')
                break;
            case this.value.trim().length < 3:
                errores.nombre = "El nombre tienen que tener al menos 3 caracteres"
                nameError.innerHTML = errores.nombre;
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                nameError.innerHTML = ""
                break;
        }
    })

    inputPrice.addEventListener('change', function () {
        switch (true) {
            case this.value.length === 0:
                errores.precio = "El campo precio es obligatorio";
                priceError.innerHTML = errores.precio;
                this.classList.add('is-invalid')
                break;
            case !regExNumber.test(this.value):
                errores.precio = "El precio tiene que ser un numero"
                priceError.innerHTML = errores.precio;
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                priceError.innerHTML = ""
                break;
        }
    })

    inputCategory.addEventListener('change', function () {
        switch (true) {
            case this.value.length == undefined:
                errores.categoria = "El campo categoria es obligatorio";
                categoryError.innerHTML = errores.categoria;
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                break;
        }
    })


    inputDescription.addEventListener('change', function () {
        switch (true) {
            case this.value == "":
                errores.descripcion = "El campo descripcion es obligatorio"
                descriptionError.innerHTML = errores.descripcion;
                this.classList.add('is-invalid')
                break;
            case this.value.length < 20:
                errores.descripcion = "La descripcion debe tener mas de 20 caracteres"
                descriptionError.innerHTML = errores.descripcion;
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid')
                this.classList.add('is-valid')
                descriptionError.innerHTML = ""
                break;
        }
    })


    inputPhoto.addEventListener('change', function (e) {
        switch (true) {
            case !regExExtensions.exec(this.value):
                errores.foto = "Solo imagenes con extension jpg, jpeg, png, o gif"
                photoError.innerHTML = errores.foto;
                this.classList.add('is-invalid')
                this.value = '';
                vistaPrevia.src = "";
                break

            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                photoError.innerHTML = "";
                // Creamos el objeto de la clase FileReader
                let reader = new FileReader();
                // Leemos el archivo subido y se lo pasamos a nuestro fileReader
                reader.readAsDataURL(e.target.files[0]);
                // Le decimos que cuando este listo ejecute el código interno
                reader.onload = function () {
                    vistaPrevia.src = reader.result;
                };
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                photoError.innerHTML = "";

        }
    })



    inputWarranty.addEventListener('change', function () {
        switch (true) {
            case this.value == "":
                errores.garantia = "La garantia es obligatoria"
                warrantyError.innerHTML = errores.garantia;
                break;
            case !regExNumber.test(this.value):
                errores.garantia = "El garantia tiene que ser un numero positivo"
                warrantyError.innerHTML = errores.garantia;
                break;
        }
    })






    form.addEventListener('submit', function (event) {
        event.preventDefault()
        let error = false
        let elementoForm = this.elements;

        for (let i = 0; i < elementoForm.length - 10; i++) {
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

