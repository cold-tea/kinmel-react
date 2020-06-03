import userReducer from "./userReducer";
import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";
import baseFilterReducer from "./baseFilterReducer";

const rootReducer = combineReducers({
    user: userReducer,
    category: categoryReducer,
    baseFilter: baseFilterReducer
});

export default rootReducer;

