//import React from 'react'
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Abhishek Chaurasia</h1>
        <p className={styles.description}>
          &ldquo;Aspiring Cloud and DevOps enthusiast with a keen interest in web development&rdquo;
        </p>
        <a href="mailto:abhishekchaurasia.avi@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Abhishek Chaurasia" className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero
