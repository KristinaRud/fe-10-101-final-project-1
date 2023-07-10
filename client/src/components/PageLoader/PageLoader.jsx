import { Box, Container, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styles from "./PageLoader.module.scss";
import { ReactComponent as LogoBlue } from "../Header/icons/logo-blue.svg";

const PageLoader = () => {
  const [loaderVisible, setLoaderVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaderVisible(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loaderVisible && (
        <Container className={styles.loader}>
          <Box className={styles.loader__wrapper}>
            <LogoBlue className={styles.loader__logo} />
            <Typography className={styles.loader__text}>TechnoKit</Typography>
          </Box>
        </Container>
      )}
    </>
  );
};

export default PageLoader;
