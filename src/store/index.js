import {combineReducers, createStore} from "redux";
import {expressionReducer} from "./reducers/ExpressionReducer";
import {modeReducer} from './reducers/modeReducer'
import {dndPanelReducer} from "./reducers/dndPanelRedeucer";

const rootReducer = combineReducers({
    expressionReducer,
    modeReducer,
    dndPanelReducer,
})
export const store = createStore(rootReducer)