import {primeNumbers} from './primenumber_generator.js';

describe('test primenumber generator', () => {

    test('primenumber under 20 and 3 primenumbers over 100k are correct', () => {
        expect(primeNumbers.next()).toEqual({"done": false, "value": 2}),
        expect(primeNumbers.next()).toEqual({"done": false, "value": 3}),
        expect(primeNumbers.next()).toEqual({"done": false, "value": 5}),
        expect(primeNumbers.next()).toEqual({"done": false, "value": 7}),
        expect(primeNumbers.next()).toEqual({"done": false, "value": 11}),
        expect(primeNumbers.next()).toEqual({"done": false, "value": 13}),
        expect(primeNumbers.next()).toEqual({"done": false, "value": 17}),
        expect(primeNumbers.next()).toEqual({"done": false, "value": 19}),
        expect(primeNumbers.next()).toEqual({"done": false, "value": 100003}),
        expect(primeNumbers.next()).toEqual({"done": false, "value": 100019}),
        expect(primeNumbers.next()).toEqual({"done": false, "value": 100043}),
        expect(primeNumbers.next()).toEqual({"done": true, "value": undefined})
    })
})