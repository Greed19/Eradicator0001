import React from 'react';
import Header from '../Header/header';
import styles from './work.module.scss';
import {constant} from '../../index';
import {FiExternalLink} from 'react-icons/fi';
import {FaGithubAlt} from 'react-icons/fa';

const Work = () => {
  return (
    <section className={styles.work_container} id="Work">
    <Header num={"03"} title={"Some Things I've Built"}/>
    <div className={styles.second_container}>
      {constant.projects.map((item,index)=>(
        index % 2 == 0 ? 
        <div className={styles.container}>
          <div className={styles.left}>
            <img className={styles.img} src={item.image} alt=""  />
          </div>
          <div className={styles.right}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <div className={styles.skill_container}>
            {item.skills.map((skill)=>(
            <p className={styles.skills}>{skill}</p>      
            ))}
            </div>
            <div className={styles.link}>
              <a href="" target="_blank"><FaGithubAlt/></a>
              <a href="" target="_blank"><FiExternalLink/></a>                       
            </div>
          </div>
        </div>
        :
        <div className={styles.container}>
        <div className={styles.left}>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.desc}>{item.desc}</p>
          <div className={styles.skill_container}>
          {item.skills.map((skill)=>(
          <p className={styles.skills}>{skill}</p>      
          ))}
          </div>
          <div className={styles.link}>
            <a href="" target="_blank"><FaGithubAlt/></a>
            <a href="" target="_blank"><FiExternalLink/></a>                       
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.img} src={item.image} alt=""  />
        </div>
      </div>
      ))}
    </div>
    </section>
  )
}

export default Work