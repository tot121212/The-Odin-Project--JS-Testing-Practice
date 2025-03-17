import {caesarCipher} from "./caesarCipher.js";

describe("Caesar Cipher", ()=>{
    test('lowercase.',()=>{
        expect(caesarCipher("abc", 3)).toBe("def");
        expect(caesarCipher("xyz", 3)).toBe("abc");
    });
    test('uppercase.',()=>{
        expect(caesarCipher("ABC", 3)).toBe("DEF");
        expect(caesarCipher("XYZ", 3)).toBe("ABC");
    });
    test('uppercase and lowercase.',()=>{
        expect(caesarCipher("AbC", 3)).toBe("DeF");
        expect(caesarCipher("XYz", 3)).toBe("ABc");
    });
    test('uppercase, lowercase. ignore punctuation, special chars, nums.',()=>{
        expect(caesarCipher("AbC!", 3)).toBe("DeF!");
        expect(caesarCipher("XYz!?.,!@#$%^&*1234567890", 27)).toBe("YZa!?.,!@#$%^&*1234567890");
        
    });
    test('handle negative shifting', ()=>{
        expect(caesarCipher("AbC!", -3)).toBe("XyZ!");
        expect(caesarCipher("XYz!?.,!@#$%^&*1234567890", -17)).toBe("GHi!?.,!@#$%^&*1234567890");
    });
});