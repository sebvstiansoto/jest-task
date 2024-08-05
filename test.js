

test("Convert EUR to USD", function() {
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(15)).toBe(16.05);})

test("Convert USD to JPY", function() {
    const { fromDollarToYen } = require('./app.js')
    expect(fromDollarToYen(10)).toBe(1565);
})

test("Convert JPY to GBP", function() {
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(500)).toBe(435);
})