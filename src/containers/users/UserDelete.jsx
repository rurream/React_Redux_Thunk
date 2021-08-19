import { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userDeleteStartThunk } from '../../store/users/users_thunks';

function UserDelete() {
    const { id } = useParams();
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const history = useHistory();

    const handlerOnDelete = () => {
        dispatch(userDeleteStartThunk(parseInt(id)));
        history.push('/')
    }

    const [user, setUser] = useState('');

    useEffect(() => {
        let aux = users.data.filter(u => {
            return u.id === parseInt(id);
        });
        setUser(aux[0]);
    }, [])

    // useWaiting(()=>{
    //     useEffect(() => {
    //        console.log("/////////////////////////")
    //     }, [])
    // }, [users.isDeleting])

    return (

        <div className="pt-3">
            {user &&
                <div>
                    <h3>Confirmar eliminar Usuario</h3>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="my-4 col-8 text-start ">
                            <p>Nombre: {user.name}</p>
                            <p>Dirección: {user.address.street} - {user.address.city}</p>
                            <p>Correo: {user.email}</p>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-danger px-5" onClick={handlerOnDelete}>Eliminar</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default UserDelete
