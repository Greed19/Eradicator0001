import React from "react";
import styles from './navbar.module.scss';
import { navInfo} from '../../index'
const Navbar = () => {
    return (
        <nav className={`${styles.nav_container} ${styles.project_name}`}>
            <section className={styles.left}>
                <a href="" >Eradicator</a>
            </section>
            <section className={styles.right}>
                {navInfo.map((nav,index)=>(
                    <a href={`#${nav.nav}`}>
                        <span>{`0${nav.num} `}</span>
                        {nav.nav}
                    </a>
                ))}
                <button className={styles.btn}>
                    <a href="" download></a>
                    Resume</button>
            </section>

        </nav>
    )
} 

export default Navbar;