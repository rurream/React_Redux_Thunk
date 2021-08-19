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

//*******************TRAER USERS */
export const fetchUsersStart = () => ({
    type: FETCH_USERS_START,
});
export const fetchUsersSuccess = (users) => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
});
export const fetchUsersFailure = (errorMessage) => ({
    type: FETCH_USERS_FAILURE,
    payload: errorMessage,
});

//******************* DELETE USER*/
export const USERdELETEStart = () => ({
    type: DELETE_USER_START,
});
export const USERdELETESuccess = (users) => ({
    type: DELETE_USER_SUCCESS,
    payload: users,
});
export const USERdELETEFailure = (errorMessage) => ({
    type: DELETE_USER_FAILURE,
    payload: errorMessage,
});

// ********************* CREATE USER
export const userCreateStart = () => ({
    type: CREATE_USER_START,
});
export const userCreateSuccess = (user) => ({
    type: CREATE_USER_SUCCESS,
    payload: user,
});
export const userCreateFailure = (errorMessage) => ({
    type: CREATE_USER_FAILURE,
    payload: errorMessage,
});


// ********************* EDIT USER
export const userEditStart = () => ({
    type: EDIT_USER_START,
});
export const userEditSuccess = (users) => ({
    type: EDIT_USER_SUCCESS,
    payload: users,
});
export const userEditFailure = (errorMessage) => ({
    type: EDIT_USER_FAILURE,
    payload: errorMessage,
});





