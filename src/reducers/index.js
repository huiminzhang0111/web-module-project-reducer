import { ADD, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, ADD_TO_MEMORY, APPLY_TO_MEMORY, CLEAR_MEMORY } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD):
            return({
                ...state,
                total: state.total + action.payload
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
        
        case(CLEAR_DISPLAY):
            return ({
                ...state,
                total: initialState.total
            });

        case(ADD_TO_MEMORY):
            return ({
                ...state,
                memory: state.total
            })
        
        case(APPLY_TO_MEMORY):
            return ({
                ...state,
                total: state.memory
            })

        case(CLEAR_MEMORY):
            return ({
                ...state,
                memory: initialState.memory
            })
            
        default:
            return state;
    }
}

export default reducer;