import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./Login.module.scss";
import BreadcrumbsApp from "../../components/BreadcrumbsApp/BreadcrumbsApp";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <BreadcrumbsApp />
      <div className={styles.login}>
        <h1 className={styles.login__title}>Customer Login</h1>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.col__inner}>
              <p className={styles.col__subtitle}>
                If you have an account, sign in with your email address or
                login.
              </p>
              <LoginForm />
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.col__inner}>
              <h6 className={styles.col__title}>New Customer?</h6>
              <p className={styles.col__subtitle}>
                Creating an account has many benefits:
              </p>
              <ul className={styles.list}>
                <li className={styles.list__item}>Check out faster</li>
                <li className={styles.list__item}>
                  Keep more than one address
                </li>
                <li className={styles.list__item}>Track orders and more</li>
              </ul>
              <Link to="/sign-up">
                <Button variant="contained" size="large" className={styles.btn}>
                  Create An Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
