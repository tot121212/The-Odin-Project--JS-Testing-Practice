const abLength = 26;
const fUpperCode = 65;
const lUpperCode = fUpperCode + abLength - 1;
const fLowerCode = 97;
const lLowerCode = fLowerCode + abLength - 1;

const caesarCodeShift = (code, shiftFactor, base)=>{
    let norm = code - base;
    let shift = norm + shiftFactor;
    let mod = (shift % abLength + abLength) % abLength;
    let unNorm = mod + base;
    let newCode = unNorm;
    return newCode;
};

export const caesarCipher = (input, shiftFactor)=>{
    let result = input.split('');
    result.forEach((char, idx)=>{
        if (/^[a-zA-Z]$/.test(input.charAt(idx))){
            let charCode = input.charCodeAt(idx);
            if (charCode >= fUpperCode && charCode <= lUpperCode){
                charCode = caesarCodeShift(charCode, shiftFactor, fUpperCode);
            } else if (charCode >= fLowerCode && charCode <= lLowerCode){
                charCode = caesarCodeShift(charCode, shiftFactor, fLowerCode);
            }
            result[idx] = String.fromCharCode(charCode);
        }
    });
    return result.join('');
};