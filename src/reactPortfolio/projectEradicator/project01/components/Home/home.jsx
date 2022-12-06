import React from "react";
import styles from './home.module.scss';
import Typical from 'react-typical'

const Home = () => {
    return (
        <section className={styles.home_container}>
            <h4 className={styles.greet}>Greetings this is</h4>
            {/* <h1 className={styles.heading1}>Project Eradicator v0001</h1> */}
            {" "}
            <Typical 
                loop={Infinity}
                typeSpeed={200}
                backSpeed={150}
                steps = {[
                    "Project Eradicator v0001",3000,
                    "Check this out",3000,
                    "Enjoy ",2000,
                ]}
            />
            <h2 className={styles.heading2}>Build things for my career</h2>
            <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam delectus quos cupiditate debitis dicta molestiae voluptates? Vitae, exercitationem autem nisi perferendis illum atque. Quibusdam, debitis tempora. Saepe error molestiae praesentium!</p>
            <button className={styles.btn}>Check out my work!</button>
        </section>
    )
}
export default Home;