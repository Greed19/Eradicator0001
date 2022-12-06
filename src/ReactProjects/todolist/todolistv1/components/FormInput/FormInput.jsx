import React from 'react';
import styles from './FormInput.module.scss';
const FormInput = () => {
    return (
    <form autoComplete='off'>
        <input type="text" name='todos' id='todos'/>
        <button className={`${styles.btn} ${styles.create_btn}`}>Create</button>
    </form>
    )
}

export default FormInput;