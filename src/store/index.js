import {combineReducers, createStore} from "redux";
import {expressionReducer} from "./reducers/ExpressionReducer";


const rootReducer = combineReducers({
    expressionReducer,
})
export const store = createStore(rootReducer)