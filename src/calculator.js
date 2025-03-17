export class calculator{
    static add(...args){
        if (args.length !== 2) throw new Error("Two arguments have not been provided");
        if (typeof args[0] !== "number") throw new Error(`One or more arguments is not a number`);
        let result = args[0];
        for (const arg of args.slice(1)){
            if (typeof arg !== "number") throw new Error(`One or more arguments is not a number`);
            result += arg;
        }
        return result;
    }
    static subtract(...args){
        if (args.length !== 2) throw new Error("Two arguments have not been provided");
        if (typeof args[0] !== "number") throw new Error(`One or more arguments is not a number`);
        let result = args[0];
        for (const arg of args.slice(1)){
            if (typeof arg !== "number") throw new Error(`One or more arguments is not a number`);
            result -= arg;
        }
        return result;
    }
    static divide(...args){
        if (args.length !== 2) throw new Error("Two arguments have not been provided");
        if (typeof args[0] !== "number") throw new Error(`One or more arguments is not a number`);
        let result = args[0];
        for (const arg of args.slice(1)){
            if (typeof arg !== "number") throw new Error(`One or more arguments is not a number`);
            result /= arg;
        }
        return result;
    }
    static multiply(...args){
        if (args.length !== 2) throw new Error("Two arguments have not been provided");
        if (typeof args[0] !== "number") throw new Error(`One or more arguments is not a number`);
        let result = args[0];
        for (const arg of args.slice(1)){
            if (typeof arg !== "number") throw new Error(`One or more arguments is not a number`);
            result *= arg;
        }
        return result;
    }
}