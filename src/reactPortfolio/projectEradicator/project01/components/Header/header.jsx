import React from "react";
import styles from './header.module.scss';

const Header = ({num,title}) => {
    return (
        <section className={styles.header_container}>
            <header className={styles.header}>
            <h3 className={styles.heading1}>{num}</h3>
            <h1 className={styles.heading2}>{title}</h1>
            <span className={styles.line}></span>
            </header>
             
        </section>
    )
}
export default Header;