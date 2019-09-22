import {combineReducers} from "redux";
import {CONNECT, DISCONNECT, ADDCHAT} from "./actions";

const connectionReducer = (state = false, action) => {
    switch(action.type) {
        case CONNECT: return true;
        case DISCONNECT: return false;
        default: return state;
    }
};

const chatDataReducer = (state = [], action) => {
    switch(action.type) {
        case ADDCHAT:
            console.log(action);
            return state.concat(action.payload);
        default: return state;
    }
};

const rootReducer = combineReducers({
    connected: connectionReducer,
    chatData: chatDataReducer
});

export default rootReducer;
