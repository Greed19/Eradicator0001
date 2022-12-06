import React from 'react';
import styles from './button.module.scss'

const Button = ({box,index}) => {
  return (
    <div className={styles.btn}>{box}</div>
  )
}

export default Button