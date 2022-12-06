import React from "react";
import styles from './contactBar.module.scss';
import {AiOutlineLinkedin,AiFillGithub,AiOutlineInstagram,AiOutlineTwitter} from 'react-icons/ai';
import {icons} from '../../index';
const ContactBar = () => {
    return (
        <section className={styles.contactBar_container}>
            <aside className={styles.left}>
                {icons.map((item,index)=>(
                    <a href={`#${item.link}`} target='_blank' className={`${styles.icon} ${styles['icon'+index]}`}>
                        {item.icon}
               
                    </a>
                ))}
                <span className={styles.line}></span>
            </aside>
            <aside className={styles.right}>
                    <a href="" className={styles.email}>aldriep.antonio@gmail.com</a>
                    <span className={styles.line}></span>
            </aside>
        </section>
    )
}
export default ContactBar;