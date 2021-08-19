import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { usersSelector } from '../../store/users/users_selector';
import { fetchUsersStart } from "../../store/users/users_actions";
import { fetchUsersStartThunk } from '../../store/users/users_thunks';
import { Link } from 'react-router-dom';
import styles from './UsersList.module.css';
// import Spinner from '../../components/spinner/Spinner';



const UserContainer = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    // console.log(users.data)

    useEffect(() => {
        dispatch(fetchUsersStartThunk());
    }, [])
    return (
        <div className="mb-5 container px-5">
            <h3>
                Lista de Usuarios
            </h3>
            <hr />
            <div>
                {users.data.length > 0 &&
                    users.data.map((user, index) => (
                        <div key={user.id} className="row">
                            <div className="col-1  py-1">{index + 1}</div>
                            <div className="col-4 text-start py-1">{user.name}</div>
                            <div className="col-3 btn ">
                                <Link type="button" className={styles.link} to={`/users/delete/${user.id}`}>
                                    <button type="button" className={`${styles.boton} btn btn-outline-danger btn-sm px-5`}>Delete</button>
                                </Link></div>


                            <div className="col-4 btn">
                                <Link type="button" className={styles.link} to={`/users/edit/${user.id}`}>
                                    <button type="button" className={`${styles.boton} btn btn-outline-success btn-sm px-5`}>Edit</button>
                                </Link></div>
                        </div>
                    )
                    )
                }
            </div>
                {/* {
                    users.isFetching && <Spinner/>
                } */}
        </div>
    );
};
export default UserContainer;