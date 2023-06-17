import { uid } from "react-uid";
import styles from "./Support.module.scss";
import LinkItem from "./components/Link";

const SUPPORT_LINKS_DATA = [
  { title: "Our Support", url: "/contact" },
  { title: "Terms and Conditions", url: "/terms-of-use" },
];

const Support = () => {
  const linksList = SUPPORT_LINKS_DATA.map((link) => {
    return <LinkItem key={uid(link)} title={link.title} url={link.url} />;
  });

  return (
    <div className={styles.container}>
      <div className={styles.inner}>{linksList}</div>
    </div>
  );
};

export default Support;
