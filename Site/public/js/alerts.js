window.addEventListener('load', function () {
    
    let confirmDelete = document.querySelectorAll('.borrar');
    for (let i = 0; i < confirmDelete.length; i++) {
        confirmDelete[i].addEventListener('click', (e) => {
            e.preventDefault()
            Swal.fire({
                title: '¿Quiere eliminar este producto?',
                text: "¡No podrás revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, elimínalo'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        '¡Eliminado!',
                        'Éxito'
                    )
                    .then(function(){
                        confirmDelete[i].submit()
                    })
                    
                }
            })
                
        })
    }



 
})

// function ConfirmDelate(){
//     var respuesta = confirm("¿Esta seguro que desea eliminar eliminar el producto?")

//     if(respuesta == true){
//         return true
//     }else{
//         return false
//     }
// }

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