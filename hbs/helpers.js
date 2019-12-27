const hbs = require('hbs');

//helpers
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
})
hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toLocaleUpperCase() + palabra.slice(1).toLocaleLowerCase();
    });
    return palabras.join(' ');

});