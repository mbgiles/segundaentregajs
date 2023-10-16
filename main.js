const palabraSecreta = "coder"; // Palabra a adivinar
let letrasAdivinadas = []; 
let intentos = 0; 
function adivinarLetra(letra) {
    intentos++;
    if (palabraSecreta.includes(letra)) {
        letrasAdivinadas.push(letra);
        return true;
    } else {
        return false;
    }
}

function mostrarResultado(resultado) {
    document.getElementById('resultado').textContent = resultado;
}

function palabraAdivinada() {
    return palabraSecreta.split('').every(letra => letrasAdivinadas.includes(letra));
}

const adivinarBtn = document.getElementById('adivinar-btn');
adivinarBtn.addEventListener('click', function () {
    const letraAdivinar = document.getElementById('letra-adivinar').value.toLowerCase();

    if (letraAdivinar.length === 1 && letraAdivinar.match(/[a-z]/)) {
        const resultado = adivinarLetra(letraAdivinar);

        if (resultado) {
            if (palabraAdivinada()) {
                mostrarResultado(`¡Felicidades! Adivinaste la palabra "${palabraSecreta}" en ${intentos} intentos.`);
                adivinarBtn.disabled = true;
            } else {
                mostrarResultado(`Letra correcta. Intentos: ${intentos}`);
            }
        } else {
            mostrarResultado("Letra incorrecta. Intenta de nuevo.");
        }
    } else {
        mostrarResultado("Por favor, ingresa una letra válida.");
    }
});

