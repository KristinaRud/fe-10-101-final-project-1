import styles from "./Features.module.scss";

const Features = () => {
  return (
    <div className={styles.features}>
      <div className={styles.features__inner}>
        <div className={styles.features__header}>
          <h4 className={styles.features__title}>Featues</h4>
          <p className={styles.features__subtitle}>
            The MPG series brings out the best in gamers by allowing full
            expression in color with advanced RGB lighting control and
            synchronization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
