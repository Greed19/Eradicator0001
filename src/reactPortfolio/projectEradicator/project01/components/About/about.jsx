import React from "react";
import styles from './about.module.scss';
import Header from "../Header/header";
import profile from '../images/zoro1.png'

const About = () => {
    return (
        <section className={styles.about_container} id="About">
            <Header num={'01'} title={'About Me'}/>
            <div className={styles.container}>
            <article className={styles.left}>
                <div className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis praesentium atque beatae ab itaque ad ratione modi quam distinctio dignissimos!
                </div>
                <div className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus labore sapiente voluptatibus iure ducimus nobis, atque consequuntur voluptas. Animi quas eaque voluptatum dolor porro labore, illum eos amet possimus cum.
                </div>
            </article>
            <article className={styles.right}>
                <img src={profile} alt="" className={styles.img} />
                <span className={styles.imgBorder}></span>
            </article>
            </div>
        </section>
    )
}
export default About;