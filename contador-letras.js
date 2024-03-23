function contarLetras(cadena) {
    let contador = {};
    cadena = cadena.toLowerCase(); 

    for (let letra of cadena) {
        if (/[a-z]/.test(letra)) {
            // Si la letra ya existe en el contador, incrementar su contador, de lo contrario, inicializarlo en 1
            contador[letra] = (contador[letra] || 0) + 1;
        }
    }
    return contador;
}
let cadena = "Cuanto más fuertes sean tus pruebas, más grandes serán tus victorias";
console.log(contarLetras(cadena));




