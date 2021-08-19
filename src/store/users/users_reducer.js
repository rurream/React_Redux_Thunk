import {
    FETCH_USERS_START,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    DELETE_USER_START,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE,
    CREATE_USER_START,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    EDIT_USER_START,
    EDIT_USER_SUCCESS,
    EDIT_USER_FAILURE
} from './users_constants';

const initialState = {
    isProcesing:false,
    // isFetching: false,
    data: [],
    errorMessage: null,
    message: null,
    // isDeleting: false,
    // isCreating: false,
    // isEditing:false
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        // *********************************************
        //*******************TRAER USERS */
        case FETCH_USERS_START:
            return {
                ...state,
                // isFetching: true,
                isProcesing:true
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                // isFetching: false,
                isProcesing:false,
                data: action.payload,
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                // isFetching: false,
                isProcesing:false,
                data: [],
            };

        // *********************************************
        //******************* DELETE USER*/
        case DELETE_USER_START:
            return {
                ...state,
                // isDeleting: true,
                isProcesing:true
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                // isDeleting: false,
                isProcesing:false,
                data: action.payload,
            };
        case DELETE_USER_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                // isDeleting: false,
                isProcesing:false,
                // data: [],
            };

        // *********************************************
        // ********************* CREATE USER
        case CREATE_USER_START:
            return {
                ...state,
                // isCreating: true,
                isProcesing:true
            };
        case CREATE_USER_SUCCESS:
            // console.log(action.payload)
            return {
                ...state,
                // isCreating: false,
                isProcesing:false,
                // data: state.data.push(action.payload)
                data: action.payload
            };
        case CREATE_USER_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                // isCreating: false,
                isProcesing:false,
            };

        // *********************************************
        // ********************* EDIT USER
        case EDIT_USER_START:
            return {
                ...state,
                // isEditing:true,
                isProcesing:true
            };
        case EDIT_USER_SUCCESS:
            return {
                ...state,
                // isEditing:false,
                isProcesing:false,
                data: action.payload
            };
        case EDIT_USER_FAILURE:
            return {
                ...state,
                errorMessage: action.payload,
                // isEditing:false,
                isProcesing:false
            };
        default:
            return state;
    }
};
export default usersReducer;