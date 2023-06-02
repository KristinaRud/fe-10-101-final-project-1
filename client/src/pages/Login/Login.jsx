import { Button } from "@mui/material";
import LoginForm from "../../components/LoginForm/LoginForm";
import styles from "./Login.module.scss";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <h1 className={styles.login__title}>Customer Login</h1>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.col__inner}>
              <h6 className={styles.col__title}>Registered Customers</h6>
              <p className={styles.col__subtitle}>
                If you have an account, sign in with your email address.
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
              <Button variant="contained" size="large">
                Create An Account
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
