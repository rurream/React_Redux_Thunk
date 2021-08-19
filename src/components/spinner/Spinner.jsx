import React from 'react';
import styles from './Spinner.module.css'

function Spinner() {
    return (
        <div>
            <div className={`${styles.centrar} spinner-border text-center`} role="status">
                <span className="visually-hidden">Procesando ...</span>
            </div>
        </div>
    )
}

export default Spinner
