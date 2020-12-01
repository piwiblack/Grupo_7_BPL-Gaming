function ConfirmDelate(){
    var respuesta = confirm("¿Esta seguro que desea eliminar eliminar el producto?")

    if(respuesta == true){
        return true
    }else{
        return false
    }
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