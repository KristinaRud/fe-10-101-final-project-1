import { uid } from "react-uid";
import styles from "./Support.module.scss";
import LinkItem from "./components/Link";

const SUPPORT_LINKS_DATA = ["Product Support", "FAQ", "Our Buyer Guide"];

const Support = () => {
  const linksList = SUPPORT_LINKS_DATA.map((linkTitle) => {
    return <LinkItem key={uid(linkTitle)} title={linkTitle} />;
  });

  return (
    <div className={styles.container}>
      <div className={styles.inner}>{linksList}</div>
    </div>
  );
};

export default Support;
