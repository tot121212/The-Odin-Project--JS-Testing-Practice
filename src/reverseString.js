export const reverseString = (str)=>{
    if (typeof str !== "string") throw new Error('No argument provided.');
    if (str === '') return str;
    return str.split('').reverse().join('');
}