// import React from 'react'
import styles from './About.module.css';
import { getImageUrl} from "../../utils";
const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="Me sitting with a laptop" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/cursorIcon.png")}  alt="Cursor Icon"/>
          <div className={styles.aboutItemText}>
            <h3>DevOps Engineer</h3>
            <p>I am Devops Engineer Experience in managing cloud and devops related stuffs</p>
          </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/serverIcon.png")}  alt="Server Icon"/>
          <div className={styles.aboutItemText}>
            <h3>Cloud Engineer</h3>
            <p>I am Cloud Engineer Experience in managing cloud resources</p>
          </div>
          </li>
          <li className={styles.aboutItem}>
          <img src={getImageUrl("about/uiIcon.png")}  alt="UI Icon"/>
          <div className={styles.aboutItemText}>
            <h3>Web Developer</h3>
            <p>Web Developer enthusiastics, managing and building Web Application</p>
          </div>
          </li>
        </ul>
      </div>
    </section>
    
    );
};

export default About
