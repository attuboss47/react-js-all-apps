import {createStore, combineReducers} from "redux"
import { CustomerReducer } from "./CustomerReducer"
import { ProductReducer } from "./ProductReducer"
import {accinfoReducer} from "./accinfoReducer"

export const configStore= ()=>{
    const store = createStore(combineReducers({CustomerReducer, ProductReducer, accinfoReducer}),
    window.__REDUX_DEVTOOLS_EXTENSION__&& 
    window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}