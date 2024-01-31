// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = valueInDollar * 146.26;
    // Retornamos el valor en dólares
    return valueInYen;
}


const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = valueInYen * 0.87;
    // Retornamos el valor en dólares
    return valueInPound;
}


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };