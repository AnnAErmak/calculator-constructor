const initialState = {
    isRuntime: false,
}

const TOGGLE_MODE = 'TOGGLE_MODE'


export const modeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_MODE:
            return {
                ...state,
                isRuntime: !state.isRuntime
            }
        default:
            return state;
    }
}

export const toggleMode = () =>({
    type: TOGGLE_MODE
})

