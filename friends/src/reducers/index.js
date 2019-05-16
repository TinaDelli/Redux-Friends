import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS } from '../actions';

const initialState = {
    error:'',
    fetchingData: false,
    friends: [],
    isLoggingIn: false
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case LOGIN_START:
            return {
                ...state,
                isLoggingIn: true,
                error: ''
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggingIn: false
            };
        case LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            };
        case FETCH_FRIENDS_START:
            return {
                ...state,
                fetchingData: true, 
                error: false
            };
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                fetchingData: false,
                error: '',
                friends: action.payload
            };
        default: 
            return state;
    }
};

export default reducer; 