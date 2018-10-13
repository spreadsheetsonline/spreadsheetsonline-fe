import initialState from './initialState.json'
import { createStore } from 'redux';
const reducer = (state, action) => {
    if (state === undefined) {
        return initialState;
    }

    let newState = state;
    switch (action.type) {
        case 'FIRSTNAME':
            newState = Object.assign({}, state, { firstName: action.firstName });
            break;
        case 'LASTNAME':
            newState = Object.assign({}, state, { lastName: action.lastName });
            break
        case 'EMAIL':
            newState = Object.assign({}, state, {email: action.email});
            break;
        default:
            break;
    }
    return newState;
}


export default createStore(reducer, initialState)
