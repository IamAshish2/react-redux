import { act } from "react";
import {createStore} from "redux";

const INITIAL_VALUE = {
    counter : 0,
    privacy:false
}

const counterReducer = (currStore = INITIAL_VALUE ,action) => {
    let newStore = currStore;
    switch(action.type) {
        case "INCREMENT":
            newStore = {...newStore,counter: newStore.counter + 1 };
            break;
        case "DECREMENT":
            newStore = {...newStore,counter: newStore.counter - 1 };
            break;
        case "SUBTRACT":
            newStore = {...newStore,counter:newStore.counter - action.payload.value}
            break;
        case "ADD":
            newStore = {...newStore,counter:newStore.counter + action.payload.value}
            break;
        case "PRIVACY_TOGGLE":
            newStore = {...newStore,privacy:!newStore.privacy}
            break;
    }
    
    return newStore;
}

const counterStore = createStore(counterReducer);

export default counterStore;