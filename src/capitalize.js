export const capitalize = (str)=>{
    if (typeof str !== 'string' || str.length < 1) return '';
    return str.charAt(0).toUpperCase().concat(str.substring(1));
}