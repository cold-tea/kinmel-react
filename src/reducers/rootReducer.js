import userReducer from "./userReducer";
import {combineReducers} from "redux";
import categoryReducer from "./categoryReducer";
import baseFilterReducer from "./baseFilterReducer";
import categoryFilterReducer from "./categoryFilterReducer";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
    user: userReducer,
    category: categoryReducer,
    baseFilter: baseFilterReducer,
    categoryFilter: categoryFilterReducer,
    post: postReducer
});

export default rootReducer;

