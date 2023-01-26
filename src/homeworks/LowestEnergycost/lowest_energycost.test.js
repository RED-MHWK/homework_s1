
import {priceCalc} from "./lowest_enegycost.js";

test('Timeframe of 1 Hour', (hoursNeeded) => {
    expect(priceComparison(1)).toBe(23)
})

test('Timeframe of 2 Hour', (hoursNeeded) => {
    expect(priceComparison(2)).toBe(22)
})

test('Timeframe of 3 Hour', (hoursNeeded) => {
    expect(priceComparison(3)).toBe(0)
})

test('Timeframe of 24 Hour', (hoursNeeded) => {
    expect(priceComparison(24)).toThrow(Error)
})

test('Timeframe of 0 Hour', (hoursNeeded) => {
    expect(priceComparison(0)).toThrow(Error)
})
