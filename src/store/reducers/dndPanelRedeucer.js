const initialState = {
    dndPanelList:[
        {
            id: 1,
            isStatic: false,
        },
        {
            id: 2,
            isStatic: false,
        },
        {
            id: 3,
            isStatic: false,
        },
        {
            id: 4,
            isStatic: false,
        },
        {
            id: 5,
            isStatic: false,
        },
    ]
}

const CHANGE_ACTIVE = 'CHANGE_ACTIVE'


export const dndPanelReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_ACTIVE:
            state.dndPanelList.forEach(panel => {if(panel.id === action.payload) panel.isStatic = !panel.isStatic})
            return {
                ...state,
                dndPanelList: state.dndPanelList
            }
        default:
            return state;
    }
}

export const changeActive = (payload) =>({
    type: CHANGE_ACTIVE,
    payload
})