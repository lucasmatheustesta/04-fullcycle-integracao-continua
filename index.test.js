const add = require('./index.js')

test('Soma dois numeros', () =>{
    const result = add(1, 2)
    expect(result).toEqual(3);
})