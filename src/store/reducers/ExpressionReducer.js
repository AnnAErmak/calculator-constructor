const initialState = {
    expression: "",
}

const RESULT_OPERATION = 'RESULT_OPERATION'
const ADD_CHARACTER_TO_STRING = 'ADD_CHARACTER_TO_STRING'
const ADD_EMPTY_STRING = 'ADD_EMPTY_STRING'
const DEL_ONE_CHARACTER = 'DEL_ONE_CHARACTER'

export const expressionReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESULT_OPERATION :
            return {
                ...state,
                expression: action.payload
            }
        case ADD_CHARACTER_TO_STRING:
            return {
                ...state,
                expression: state.expression + action.payload
            }
        case ADD_EMPTY_STRING:
            return {
                ...state,
                expression: ''
            }
        case DEL_ONE_CHARACTER:
            return {
                ...state,
                expression: state.expression.slice(0, -1)
            }
        default:
            return state;
    }
}

export const getResultofOperation = (payload) => ({
        type: RESULT_OPERATION,
        payload
});
export const addCharacterToString = (payload) => ({
    type: ADD_CHARACTER_TO_STRING,
    payload,
})
export const addEmptyString = () => ({
    type: ADD_EMPTY_STRING,
});
export const delOneCharacter = () => ({
    type: DEL_ONE_CHARACTER,
});