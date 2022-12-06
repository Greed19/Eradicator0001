import React,{useState} from 'react'
import styles from './experience.module.scss';
import {constant} from '../../index';
import {GiBulletBill} from 'react-icons/gi';
import Header from '../Header/header';

const Experience = () => {
    const [currIndex,setCurrIndex] = useState(0);
    return (
    <section className={styles.experience_container} id="Experience">
        <Header num={"02"} title={"Where I've Worked"}/>
        <div className={styles.container}>
        <article className={styles.left}>
            {constant.experiences.map((exp,index)=>(
                <div className={currIndex === index ? `${styles.tab} ${styles.activeTab}` : `${styles.tab}`} 
                onClick={()=> setCurrIndex(index)}>
                    {exp.company}
                </div>
            ))}
        </article>
        <article className={styles.right}>
                <h3>{constant.experiences[currIndex].title} 
                <span className={styles.company}>
                {` @ ${constant.experiences[currIndex].company}`}
                </span>
                </h3>
                
                <p>{constant.experiences[currIndex].duration}</p>
                {constant.experiences[currIndex].desc.map((desc,index)=>(
                    <div className={styles.desc}><GiBulletBill className={styles.arrow}/>{desc}</div>
                ))}
        </article>
        </div>
    </section>
    )
}

export default Experience;
