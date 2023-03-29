const initialState = {
    elements: [],
    display: [],
}

const ADD_ELEMENT = 'ADD_ELEMENT'
const ADD_DISPLAY = 'ADD_DISPLAY'


export const canvasReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ELEMENT:
            return {
                ...state,
                elements: [...state.elements, action.payload],
            }
        case ADD_DISPLAY:
            return{
                ...state,
                display: [action.payload],
            }


        default:
            return state;
    }
}

export const addElement = (payload) =>({
    type: ADD_ELEMENT,
    payload
})
export const addDisplay = (payload) =>({
    type: ADD_DISPLAY,
    payload

})