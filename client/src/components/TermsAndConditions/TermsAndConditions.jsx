import { uid } from "react-uid";
import parse from "html-react-parser";
import styles from "./TermsAndConditions.module.scss";
import TermsAndConditionsConfig from "./TermsAndConditionsConfig";
import TermsNavMenu from "./components/TermsNavMenu/TermsNavMenu";
import Selector from "./components/TermsSelector/TermsSelector";

const TermsAndConditions = () => {
  const TermsList = TermsAndConditionsConfig.map((term) => (
    <div className={styles.list__item} key={uid(term)} id={term.title}>
      <h3 className={styles.terms__itemTitle}>{term.title}</h3>
      <h1 className={styles.terms__itemText}>{parse(term.text)}</h1>
    </div>
  ));
  return (
    <div className={styles.terms}>
      <div className={styles.terms__container}>
        <h5 className={styles.terms__title}>Shop Terms & Conditions</h5>
        <div className={styles.selector__wrapper}>
          <Selector />
        </div>
        <h4 className={styles.terms__subtitle}>
          GENERAL TERMS AND CONDITIONS FOR SALE OF PRODUCTS AND SERVICES
        </h4>
        <div className={styles.terms__textWrapper}>
          <div>{TermsList}</div>
        </div>
      </div>
      <TermsNavMenu />
    </div>
  );
};

export default TermsAndConditions;
