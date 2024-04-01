import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>About Agency</h2>
        <h1 className={styles.title}>
          I create digital ideas, stonger, higher, better
        </h1>
        <p className={styles.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          expedita dolores dignissimos doloremque!
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Hours of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Hours of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10K+</h1>
            <p>Hours of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="/about.png" alt="About Image" fill />
      </div>
    </div>
  );
};

export default AboutPage;
