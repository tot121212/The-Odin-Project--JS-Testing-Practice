import {analyzeArray} from "./analyzeArray.js";

describe('Analyze Array', ()=>{
    test('whole number average with positive numbers', ()=>{
        expect(analyzeArray([1,8,3,4,2,6])).toEqual(
            {
                average: 4,
                min: 1,
                max: 8,
                length: 6
            }
        );
    });
    test('decimal number average with negatifve numbers', ()=>{
        expect(analyzeArray([-2,2,4,6,-6])).toEqual(
            {
                average: 0.8,
                min: -6,
                max: 6,
                length: 5
            }
        );
    });
    test('average of repeating decimal 1/3', ()=>{
        const average = analyzeArray([1/3, 1/3, 1/3]).average;
        expect(average).toBeCloseTo(0.3333333333, 10);
    });
    test('one or more elements is NaN', ()=>{
        expect(analyzeArray([-1,0,"!",2,3,4])).toEqual(null);
    });
    test('array length is 0', ()=>{
        expect(analyzeArray([])).toEqual(null);
    });
    test('array length is 1', ()=>{
        expect(analyzeArray([27])).toEqual(
            {
                average: 27,
                min: 27,
                max: 27,
                length: 1
            }
        );
    });
});