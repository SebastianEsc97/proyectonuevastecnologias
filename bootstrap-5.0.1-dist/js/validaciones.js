function validar(){

    var correo = document.getElementById("correo").value
    var password = document.getElementById("password").value

    if(correo.length < 5){
        alert("El correo debe tener más de 5 carácteres")
        return false
    } else if(password.length < 8) {
        alert("la contraseña deber tener más de 8 digitos")
        return false
    } else{
        alert("Cargando la página", function(){
            return true
        })
    }

    
}