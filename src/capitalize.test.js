import {capitalize} from './capitalize.js';

test('capitalizes t in test', ()=>{
    let result = capitalize('test');
    expect(result).toBeDefined();
    expect(result).toBe('Test');
});
test('does not change if first char is not a letter', ()=>{
    expect(capitalize('1est')).toBe('1est');
    expect(capitalize('%est')).toBe('%est');
    expect(capitalize('/est')).toBe('/est');
});
test('return empty string if not provided with any arg', ()=>{
    expect(capitalize()).toBe('');
});
test('return empty string if provided with empty string', ()=>{
    expect(capitalize('')).toBe('');
});