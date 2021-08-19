import {
    fetchUsersStart,
    fetchUsersFailure,
    fetchUsersSuccess,
    USERdELETEStart,
    USERdELETESuccess,
    USERdELETEFailure,
    userCreateStart,
    userCreateSuccess,
    userCreateFailure,
    userEditStart,
    userEditSuccess,
    userEditFailure
} from "./users_actions";

//*******************TRAER USERS */
export const fetchUsersStartThunk = () => {
    
    return async (dispatch, getState) => {
        const { users } = getState();
        if (users.data.length > 10 || users.data.length > 0) { return; }
        dispatch(fetchUsersStart());
        try {
            const response = await
                fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            dispatch(fetchUsersSuccess(data));
        }
        catch (error) {
            dispatch(fetchUsersFailure(error.message));
        }
    };
};

//******************* DELETE USER*/
export const userDeleteStartThunk = (id) => {

    return async (dispatch, getState) => {
        const { users } = getState();

        dispatch(USERdELETEStart());
        try {
            const response = await
                fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
                    method: 'DELETE'
                })
            // console.log(users.data)
            if (response.status === 200) {
                let aux = users.data.filter(item => {
                    return item.id !== id
                })
                dispatch(USERdELETESuccess(aux));
            } else {
                throw new Error("Mal ...")
            }
        }
        catch (error) {
            dispatch(USERdELETEFailure(error.message));
        }
    };
};

// ********************* CREATE USER
export const userCreateStartThunk = (user) => {
    // console.log(user)
    return async (dispatch, getState) => {

        dispatch(userCreateStart());
        try {
            const response = await
                fetch(`https://jsonplaceholder.typicode.com/users`, {
                    method: 'POST',
                    body: JSON.stringify(user),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
            if (response.ok) {
                const data = await response.json();
                let { users } = getState();
                users.data.push(data);
                dispatch(userCreateSuccess(users.data));
            } else {
                throw new Error("Mal ...")
            }
        }
        catch (error) {
            // console.log(error.message)
            dispatch(userCreateFailure(error.message));
        }
    };
};

// ********************* EDIT USER
export const userEditStartThunk = (user) => {
   
    return async (dispatch, getState) => {
        dispatch(userEditStart());
        try {
            const response = await
                fetch(`https://jsonplaceholder.typicode.com/users/1`, {
                    method: 'PUT',
                    body: JSON.stringify(user),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
            if (response.ok) {
                let { users } = getState();
                users = users.data.map((item)=>{
                    return item.id === user.id ? user : item;
                });
                dispatch(userEditSuccess(users));
            } else {
                throw new Error("Mal ...")
            }
        }
        catch (error) {
            // console.log(error.message)
            dispatch(userEditFailure(error.message));
        }
    };
};

//*******************TRAER USERS */
export const refreshUsersStartThunk = () => {
    return async (dispatch) => {
        dispatch(fetchUsersStart());
        try {
            const response = await
                fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            dispatch(fetchUsersSuccess(data));
        }
        catch (error) {
            dispatch(fetchUsersFailure(error.message));
        }
    };
};

