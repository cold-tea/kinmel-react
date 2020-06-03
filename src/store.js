import {applyMiddleware, createStore} from 'redux';
import rootReducer from "./reducers/rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";

const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (e) {
        console.log(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        console.log(e);
        return undefined;
    }
};

const persistedStore = loadFromLocalStorage();
const store = createStore(rootReducer, persistedStore, composeWithDevTools(applyMiddleware(logger, thunk)));
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;