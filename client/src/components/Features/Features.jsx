import { useEffect, useRef, useState } from "react";
import { uid } from "react-uid";
import styles from "./Features.module.scss";
import { featuresConfig } from "./FeaturesConfig";

const Features = () => {
  const [animate, setAnimate] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const listElement = listRef.current;
      if (listElement) {
        const rect = listElement.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (rect.bottom <= windowHeight && !animate) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animate]);

  const featuresList = featuresConfig.map((feature, index) => (
    <div
      className={`${styles.list__item} ${
        animate && styles["list__item--animate"]
      }`}
      key={uid(feature)}
      style={{ transitionDelay: `${0.2 * index}s` }}
    >
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
        <div className={styles.list} ref={listRef}>
          {featuresList}
        </div>
      </div>
    </div>
  );
};

export default Features;
