import styles from "@/styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <label className={styles.labelText}>Download our App</label>
        <label className={styles.labelText}>Store Locator</label>
        <label className={styles.labelText}>EN</label>
      </div>
    </div>
  );
};

export default Header;
