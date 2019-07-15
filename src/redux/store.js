import {applyMiddleware, combineReducers, createStore} from "redux";
import dateReduser from "./dateReduser";
import timeReduser from "./timeReduser";
import thunk from "redux-thunk";

let reducers = combineReducers({
    date: dateReduser,
    time: timeReduser
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;