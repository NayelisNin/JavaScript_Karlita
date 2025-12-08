document.getElementById("calcular").onclick = function () {

    let nombre = document.getElementById("nombre").value;
    let fecha = document.getElementById("nacimiento").value;

    
    if (!fecha) {
        resultado.textContent = "Por favor ingresa una fecha válida.";
        return;
    }

    let añoNacimiento = new Date(fecha).getFullYear();
    let añoActual = new Date().getFullYear();
    let edad = añoActual - añoNacimiento;

    
    let nombreFinal = (nombre.trim().length === 0 || nombre.trim() === ".") 
        ? "Fulano" 
        : nombre.trim();

    
    resultado.textContent = "Hola, " + nombreFinal + ". Tienes " + edad + " años.";
};
