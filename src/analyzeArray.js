export const analyzeArray = (arr)=>{
    const obj = {};
    if (arr.length < 1) return null;
    obj.length = arr.length;
    if (typeof arr[0] !== "number") return null;
    obj.min = obj.max = obj.average = arr[0];
    if (arr.length > 1){
        const slc = arr.slice(1);
        for (const num of slc){
            if (typeof num !== "number") return null;
            if (num < obj.min){
                obj.min = num;
            }
            if (num > obj.max){
                obj.max = num;
            }
            obj.average += num;
        }
        obj.average /= arr.length;
    }
    return obj;
};