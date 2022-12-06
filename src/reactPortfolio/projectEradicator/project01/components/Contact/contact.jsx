import React from 'react'
import Header from '../Header/header';
import styles from './contact.module.scss';

const Contact = () => {
  return (
    <section className={styles.contact_container} id="Contact">
        <Header num={"04"} title={"What's Next"}/>
        <div className={styles.container}>
            <h1 className={styles.heading}>Get in Touch</h1>
            <p className={styles.desc}>
                Feel Free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions
            </p>
            <a href="aldriep.antonio@gmail.com">
                <button className={styles.btn}>Say Hello</button>
            </a>
        </div>
    </section>
  )
}

export default Contact;