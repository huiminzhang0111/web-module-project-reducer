export const ADD = "ADD";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const addAction = (number) => {
    return({type:ADD, payload:number});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}
