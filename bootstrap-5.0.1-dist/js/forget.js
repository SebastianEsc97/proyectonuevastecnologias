function validar(){

    var correo = document.getElementById("correo").value
    var telefono = document.getElementById("telefono").value

    if(correo.length < 5){
        alert("El correo debe tener más de 5 carácteres")
        return false
    } else if(telefono.length < 10) {
        alert("El telefono deber tener 10 digitos")
        return false
    } else{
        alert("Se envió a tu correo una confirmación. verifica y cambia tu contraseña", function(){
            return true
        })
    }

    
}