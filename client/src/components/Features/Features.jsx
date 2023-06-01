import { uid } from "react-uid";
import styles from "./Features.module.scss";
import { featuresConfig } from "./FeaturesConfig";

const Features = () => {
  const featuresList = featuresConfig.map((feature) => (
    <div className={styles.list__item} key={uid(feature)}>
      <div className={styles["list__item-heading"]}>
        <img
          src={feature.image}
          alt={feature.alt}
          className={styles["list__item-picture"]}
        />
      </div>
      <p className={styles["list__item-text"]}>{feature.text}</p>
    </div>
  ));

  return (
    <div className={styles.features}>
      <div className={styles.features__inner}>
        <div className={styles.features__header}>
          <h4 className={styles.features__title}>Features</h4>
          <p className={styles.features__subtitle}>
            The MPG series brings out the best in gamers by allowing full
            expression in color with advanced RGB lighting control and
            synchronization.
          </p>
        </div>
        <div className={styles.list}>{featuresList}</div>
      </div>
    </div>
  );
};

export default Features;
