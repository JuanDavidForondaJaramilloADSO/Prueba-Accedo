let matriz = new Array(10).fill(0).map(() => new Array(5).fill(0));

function deshabilitarCelda(fila, columna) {
    if (matriz[fila][columna] !== 'X') {
        matriz[fila][columna] = 'X';
    } else {
        console.log(`La celda en la fila ${fila} y la columna ${columna} ya está deshabilitada.`);
    }
}

function seleccionarCeldaAleatoria() {
    let fila, columna;
    do {
        fila = Math.floor(Math.random() * 10);
        columna = Math.floor(Math.random() * 5);
    } while (matriz[fila][columna] === 'X');
    deshabilitarCelda(fila, columna);
}

function deshabilitarCincoCeldas() {
    for (let i = 0; i < 5; i++) {
        seleccionarCeldaAleatoria();
    }
}

deshabilitarCincoCeldas(); 

// Función para mostrar la matriz como una tabla
function mostrarMatrizComoTabla(matriz) {
    console.table(matriz);
}

mostrarMatrizComoTabla(matriz);