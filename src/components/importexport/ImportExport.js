import React from 'react';
import styles from './ImportExport.module.css';

const ImportExport = (props) => {
    return (
        <div className={styles.UnitBox}>
            <div className={styles.Circle} style={{borderColor: props.color}}></div>
            <div className={styles.TextBox}>
                <h3>{ props.heading }</h3>
                <p>{ props.text }</p>
            </div>
        </div>
    )
}

export default ImportExport