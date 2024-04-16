const mapaMorseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..'
  };
  
  function textoAMorse(text) {
    return text.toUpperCase().split('').map(char => {
      return mapaMorseCode[char] || char; 
    }).join(' ');
  }
  
  function morseATexto(morse) {
    return morse.split(' ').map(code => {
      return Object.keys(mapaMorseCode).find(key => mapaMorseCode[key] === code) || code; // Si no se encuentra el código, se deja sin modificar
    }).join('');
  }
  
  function traducirTextoAMorse() {
    const texto = prompt('Ingrese el texto a convertir a Morse:');
    if (texto) {
      const morse = textoAMorse(texto);
      alert('El texto en Morse es: ' + morse);
    }
  }
  
  function traducirMorseATexto() {
    const morse = prompt('Ingrese el código Morse a convertir a texto:');
    if (morse) {
      const texto = morseATexto(morse);
      alert('El código Morse en texto es: ' + texto);
    }
  }
  
  function seleccionarOpcion() {
    const opcion = prompt('Seleccione una opción:\n1. Texto a Morse\n2. Morse a Texto');
    if (opcion === '1') {
      traducirTextoAMorse();
    } else if (opcion === '2') {
      traducirMorseATexto();
    } else {
      alert('Opción no válida');
    }
  }
  
  seleccionarOpcion();
  