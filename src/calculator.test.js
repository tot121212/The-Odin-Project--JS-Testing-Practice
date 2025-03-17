import {calculator} from "./calculator.js";

describe("Addition", ()=>{
    test('adds correctly', ()=>{
        expect(calculator.add(1,1)).toBe(2);
        expect(calculator.add(1,2)).toBe(3);
        expect(calculator.add(2,1)).toBe(3);
        expect(calculator.add(2,0.5)).toBe(2.5);
        expect(calculator.add(2,-0.5)).toBe(1.5);
    });
    test('is arg a number', ()=>{
        expect(()=>calculator.add('',1)).toThrow("One or more arguments is not a number");
        expect(()=>calculator.add({},1)).toThrow("One or more arguments is not a number");
        expect(()=>calculator.add([],1)).toThrow("One or more arguments is not a number");
    });
    test('is adequate args provided', ()=>{
        expect(()=>calculator.add(1)).toThrow("Two arguments have not been provided");
        expect(()=>calculator.add()).toThrow("Two arguments have not been provided");
        expect(()=>calculator.add("")).toThrow("Two arguments have not been provided");
    });
});

describe("Subtraction", ()=>{
    test('subtract correctly', ()=>{
        expect(calculator.subtract(1,1)).toBe(0);
        expect(calculator.subtract(1,2)).toBe(-1);
        expect(calculator.subtract(2,1)).toBe(1);
        expect(calculator.subtract(2,0.5)).toBe(1.5);
        expect(calculator.subtract(2,-0.5)).toBe(2.5);
    });
    test('is arg a number', ()=>{
        expect(()=>calculator.subtract('',1)).toThrow("One or more arguments is not a number");
        expect(()=>calculator.subtract({},1)).toThrow("One or more arguments is not a number");
        expect(()=>calculator.subtract([],1)).toThrow("One or more arguments is not a number");
    });
    test('is adequate args provided', ()=>{
        expect(()=>calculator.subtract(1)).toThrow("Two arguments have not been provided");
        expect(()=>calculator.subtract()).toThrow("Two arguments have not been provided");
        expect(()=>calculator.subtract("")).toThrow("Two arguments have not been provided");
    });
});
describe("Division", ()=>{
    test('divide correctly', ()=>{
        expect(calculator.divide(1,1)).toBe(1);
        expect(calculator.divide(1,2)).toBe(0.5);
        expect(calculator.divide(2,1)).toBe(2);
        expect(calculator.divide(2,0.5)).toBe(4);
        expect(calculator.divide(2,-0.5)).toBe(-4);
    });
    test('is arg a number', ()=>{
        expect(()=>calculator.divide('',1)).toThrow("One or more arguments is not a number");
        expect(()=>calculator.divide({},1)).toThrow("One or more arguments is not a number");
        expect(()=>calculator.divide([],1)).toThrow("One or more arguments is not a number");
    });
    test('is adequate args provided', ()=>{
        expect(()=>calculator.divide(1)).toThrow("Two arguments have not been provided");
        expect(()=>calculator.divide()).toThrow("Two arguments have not been provided");
        expect(()=>calculator.divide("")).toThrow("Two arguments have not been provided");
    });
});
describe("Multiplication", ()=>{
    test('multiply correctly', ()=>{
        expect(calculator.multiply(1,1)).toBe(1);
        expect(calculator.multiply(1,2)).toBe(2);
        expect(calculator.multiply(2,1)).toBe(2);
        expect(calculator.multiply(2,0.5)).toBe(1);
        expect(calculator.multiply(2,-0.5)).toBe(-1);
    });
    test('is arg a number', ()=>{
        expect(()=>calculator.multiply('',1)).toThrow("One or more arguments is not a number");
        expect(()=>calculator.multiply({},1)).toThrow("One or more arguments is not a number");
        expect(()=>calculator.multiply([],1)).toThrow("One or more arguments is not a number");
    });
    test('is adequate args provided', ()=>{
        expect(()=>calculator.multiply(1)).toThrow("Two arguments have not been provided");
        expect(()=>calculator.multiply()).toThrow("Two arguments have not been provided");
        expect(()=>calculator.multiply("")).toThrow("Two arguments have not been provided");
    });
});