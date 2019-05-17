import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR, FETCH_FRIENDS_START, FETCH_FRIENDS_SUCCESS, ADD_FRIEND_START, ADD_FRIEND_SUCCESS, ADD_FRIEND_ERROR } from '../actions';

const initialState = {
    error:'',
    fetchingData: false,
    friends: [],
    isLoggingIn: false,
    addingFriend: false,
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
                error: ''
            };
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                fetchingData: false,
                error: '',
                friends: action.payload
            };
        case ADD_FRIEND_START:
            return {
                ...state,
                addingFriend: true,
            };
        case ADD_FRIEND_SUCCESS:
            return {
                ...state,
                addingFriend: false,
                error: '',
                friends: action.payload
            };
        default: 
            return state;
    }
};

export default reducer; 