import {store} from './index';

export const CONNECT = 'CONNECT';
export const DISCONNECT = 'DISCONNECT';
export const ADDCHAT = 'ADDCHAT';

export const connect = () => {
    store.dispatch({type:CONNECT});
};

export const disconnect = () => {
    store.dispatch({type:DISCONNECT});
};

export const addChat = (payload) => {
    // console.log({type:ADDCHAT, payload});
    store.dispatch({type:ADDCHAT, payload});
};
