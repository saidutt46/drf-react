import { GET_USERS, DELETE_USER, ADD_USER, CLEAR_USERS } from '../actions/types.js';

const initialState = {
    users: [],
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
            };
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter(x => x.id !== action.payload)
            };
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case CLEAR_USERS:
            return {
                ...state,
                leads: [],
            };
        default:
            return state
    }
}