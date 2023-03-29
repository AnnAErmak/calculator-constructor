import {combineReducers, createStore} from "redux";
import {expressionReducer} from "./reducers/ExpressionReducer";
import {modeReducer} from './reducers/modeReducer'
import {canvasReducer} from "./reducers/canvasReducer";
import {dndPanelReducer} from "./reducers/dndPanelRedeucer";

const rootReducer = combineReducers({
    expressionReducer,
    modeReducer,
    canvasReducer,
    dndPanelReducer
})
export const store = createStore(rootReducer)