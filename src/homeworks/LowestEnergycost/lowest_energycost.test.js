import {priceComparison} from "./lowest_enegycost.js";

describe('test timeframes', () => {

    test('Timeframe of 1 Hour', () => {
        expect(priceComparison(1)).toBe(23)
    })
    test('Timeframe of 2 Hour', () => {
        expect(priceComparison(2)).toBe(22)
    })
    test('Timeframe of 2 Hour', () => {
        expect(priceComparison(3)).toBe(0)
    })
    test('Timeframe of 24 Hour', () => {
        expect(priceComparison(24)).toBeError()
    })
    test('Timeframe of 0 Hour', () => {
        expect(priceComparison(0)).toBeError()
    })