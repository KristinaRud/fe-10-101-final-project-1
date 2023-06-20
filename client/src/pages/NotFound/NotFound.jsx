import { Link } from "react-router-dom";
import styles from "./NotFound.module.scss";
import notFoundImg from "../../assets/images/not-found.jpg";

const NotFoundPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.notFound}>
        <div className={styles.notFound__inner}>
          <div className={styles.notFound__box}>
            <img
              src={notFoundImg}
              alt="404"
              className={styles.notFound__picture}
            />
          </div>
          <h1 className={styles.notFound__title}>404</h1>
          <p className={styles.notFound__text}>
            Sorry, we were unable to find that page
          </p>
          <p className={styles.notFound__return}>
            Start from{" "}
            <Link to="/" className={styles["notFound__return-link"]}>
              home page
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
