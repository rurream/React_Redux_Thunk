import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userEditStartThunk } from '../../store/users/users_thunks';
import useInputEdit from "../../hooks/useInputEdit";
import styles from './UserEdit.module.css';

function UserEdit() {
    const { id } = useParams();
    const users = useSelector((state) => state.users.data);
    const dispatch = useDispatch();
    const history = useHistory();
    const [name, setName, handlerInitialStateName] = useInputEdit('');
    const [direcc, setDirecc, handlerInitialStateDirecc] = useInputEdit('');
    const [ciudad, setCiudad, handlerInitialStateCiudad] = useInputEdit('');
    const [mail, setMail, handlerInitialStateMail] = useInputEdit('');

    const handlerSubmit = (event) => {
        event.preventDefault();

        let aux = {
            address: {
                city: ciudad,
                street: direcc
            },
            name: name,
            email: mail,
            id: parseInt(id)
        }
        
        dispatch(userEditStartThunk(aux));
        history.push('/')
    }

    useEffect(() => {
        let aux = users.filter(u => {
            return u.id == parseInt(id);
        });
        
        handlerInitialStateName(aux[0].name);
        handlerInitialStateDirecc(aux[0].address.street);
        handlerInitialStateCiudad(aux[0].address.city);
        handlerInitialStateMail(aux[0].email);
    }, []);

    const disabled = () => {
        return name.trim() === '' || direcc.trim() === '' || ciudad.trim() === '' || mail.trim() === '';
    }


    return (
        <div className="container px-5 mt-3">
            <h3>Editar Usuario</h3>
            <div className="w-50 mx-auto">
                <form onSubmit={handlerSubmit} className={styles.form}  className="text-start mt-3">
                    <label className="small">Nombre</label>
                    <input type="text" className="form-control py-0 mb-1" value={name} onChange={setName} />
                    <label className="small">Dirección</label>
                    <input type="text" className="form-control py-0 mb-1" value={direcc} onChange={setDirecc} />
                    <label className="small">Ciudad</label>
                    <input type="text" className="form-control py-0 mb-1" value={ciudad} onChange={setCiudad} />
                    <label className="small">Correo</label>
                    <input type="text" className="form-control py-0 mb-1" value={mail} onChange={setMail} />
                    <button className="btn btn-primary mt-2 px-5  mt-3" disabled={disabled()}>Registrar nuevo producto</button>
                </form>
            </div>
        </div>
    )
}

export default UserEdit
