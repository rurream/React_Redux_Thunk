import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useInput from "../../hooks/useInput";
import styles from './UserCreate.module.css';
import { userCreateStartThunk } from '../../store/users/users_thunks';;

function UserCreate() {
    const [name, setName] = useInput('');
    const [direcc, setDirecc] = useInput('');
    const [ciudad, setCiudad] = useInput('');
    const [mail, setMail] = useInput('');

    const dispatch = useDispatch();
    const history = useHistory();


    const validarText = (text) => {
        return text.trim().length > 0 ? true : false;
    }

    const handlerSubmit = (event) => {
        event.preventDefault();

        if (validarText(name) && validarText(direcc) && validarText(ciudad) && validarText(mail)) {
            let aux = {
                // userId: 1,
                address: {
                    city: ciudad,
                    street: direcc
                },
                name: name,
                email: mail,
            }

            dispatch(userCreateStartThunk(aux));
            history.push('/')
        } else {
            console.log("Error, los datos no son válidos");
        }

    }

    const disabled = () => {
        return name.trim() === '' || direcc.trim() === '' || ciudad.trim() === '' || mail.trim() === '';
    }

    return (
        <div className="container px-5 mt-3">
            <h3>Crear nuevo Usuario</h3>
            <div className="w-50 mx-auto">
                <form onSubmit={handlerSubmit} className={styles.form} className="text-start mt-3">
                    <label className="small">Nombre</label>
                    <input type="text" className="form-control py-0 mb-1" value={name} onChange={setName} />
                    <label className="small">Dirección</label>
                    <input type="text" className="form-control py-0 mb-1" value={direcc} onChange={setDirecc} />
                    <label className="small">Ciudad</label>
                    <input type="text" className="form-control py-0 mb-1" value={ciudad} onChange={setCiudad} />
                    <label className="small">Correo</label>
                    <input type="text" className="form-control py-0 mb-1" value={mail} onChange={setMail} />
                    <button className="btn btn-primary mt-2 px-5 mt-3" disabled={disabled()}>Registrar nuevo producto</button>
                </form>
            </div>
        </div>
    )
}

export default UserCreate
