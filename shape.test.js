// import shapes 
const {Triangle, Square, Circle} = require("./shape")

// case test for purple triangle 
describe('purple Triangle test', () => {
    test("test for a purple triangle", () => {
        const shape = new Triangle(); 
        shape.setColor("purple")
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="purple" />'
        );
    });
});