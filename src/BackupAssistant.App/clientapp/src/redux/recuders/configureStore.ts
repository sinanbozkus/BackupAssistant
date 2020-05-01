import {createStore,applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import providerReducer from './providerReducer';

export default function configureStore(){
    
    const rootReducer = combineReducers({
        providerReducer
    })

    return createStore(rootReducer, applyMiddleware(thunk))
}