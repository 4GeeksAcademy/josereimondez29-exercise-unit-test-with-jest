// Importar la función sum del archivo app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("One Dollar should be 146.26 Yens", () => {
    const{fromDollarToYen} = require('./app.js');
    const yen = fromDollarToYen(3);
    const expected = 3 * 146.26;
    expect(fromDollarToYen(3)).toBe(438.78);
})
test("One Yen should be 0.87 Pounds", () => {
    const{fromYenToPound} = require('./app.js');
    const pound = fromYenToPound(3);
    const expected = 3 * 0.87;
    expect(fromYenToPound(3)).toBe(2.61);
})