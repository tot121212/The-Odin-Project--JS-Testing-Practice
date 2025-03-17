import {reverseString} from "./reverseString.js";

test('reverses string correctly',()=>{
    expect(reverseString("test")).toBe("tset");
    expect(reverseString("jest")).toBe("tsej");
    expect(reverseString('*&^%$#@!ABD9r~3qf&vmdbvj')).toBe('jvbdmv&fq3~r9DBA!@#$%^&*');
});
test('handles empty string', ()=>{
    expect(reverseString('')).toBe('');
});
test('handle no arg', ()=>{
    expect(()=>reverseString()).toThrow('No argument provided.');
});
// not handling invalid chars like '"`()[]{}