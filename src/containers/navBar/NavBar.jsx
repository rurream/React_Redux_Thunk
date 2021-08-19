import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { refreshUsersStartThunk } from '../../store/users/users_thunks';
import styles from './NavBar.module.css';

function NavBar() {
    const dispatch = useDispatch();
    const handlerLogOut = ()=>{
        dispatch(refreshUsersStartThunk());
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
                <div className="container-fluid">
                    <NavLink exact className="navbar-brand" to="/">Mantenedor-CRUD</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ps-5" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-5">
                            <li className="nav-item">
                                <NavLink exact activeClassName={styles.myActive} className="nav-link" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName={styles.myActive} className="nav-link" aria-current="page" to="/create">Create</NavLink>
                            </li>
                            <li className="nav-item">
                                <div className="nav-link" onClick={handlerLogOut}  type="button">refresh</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
