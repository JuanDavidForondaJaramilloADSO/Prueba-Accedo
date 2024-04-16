// Definición del diccionario de código morse
const morseCode = {
    'A': '.-',   'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.',
    'H': '....', 'I': '..',   'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.',
    'O': '---',  'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-',
    'V': '...-', 'W': '.--',  'X': '-..-', 'Y': '-.--', 'Z': '--..'
}

// Función para convertir código morse a texto
function morseToText(morse) {
    let text = '';

    const sequences = morse.split('   ');
    sequences.forEach(sequence => {

        const words = sequence.split(' ');
        words.forEach(word => {
  
            for (const letter in morseCode) {
                if (morseCode[letter] === word) {
                    text += letter;
                }
            }
        });
  
        text += ' ';
    });
    return text;
}

// Función para convertir texto a código morse
function textToMorse(text) {
    let morse = '';

    const words = text.split(' ');
    words.forEach(word => {

        const letters = word.split('');
        letters.forEach(letter => {

            if (morseCode[letter.toUpperCase()]) {
                morse += morseCode[letter.toUpperCase()] + ' ';
            }
        });

        morse += '   ';
    });
    return morse;
}

// Función para mostrar un mensaje en un cuadro de alerta y solicitar entrada del usuario
function showMessage(message) {
    alert(message);
}

// Solicitar al usuario que ingrese un mensaje en código morse
const morseMessage = prompt("Ingresa un mensaje en código morse:");

// Convertir el mensaje en código morse a texto y mostrarlo
const textMessage = morseToText(morseMessage);
showMessage("Mensaje en texto: " + textMessage);

// Solicitar al usuario que ingrese un mensaje en texto
const textInput = prompt("Ingresa un mensaje en texto:");

// Convertir el mensaje en texto a código morse y mostrarlo
const morseOutput = textToMorse(textInput);
showMessage("Mensaje en código morse: " + morseOutput);
