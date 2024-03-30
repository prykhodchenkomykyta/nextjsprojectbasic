import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Prykhodchenko</div>
      <div className={styles.text}>Best webpage? © 2024</div>
    </div>
  );
};

export default Footer;
