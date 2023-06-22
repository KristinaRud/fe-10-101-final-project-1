import { List } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectPartners } from "../../../store/selectors/partners.selector";
import { fetchPartners } from "../../../store/actionCreator/partners.actionCreator";
import BrandItem from "../../LeftSidear/BrandList/BrandItem/BrandItem";
import s from "./PartnersList.module.scss";

const PartnersList = () => {
  const [limit] = useState(7);
  const partners = useSelector(selectPartners);
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    dispatch(fetchPartners());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const listElement = document.getElementById("partners-list");
      if (listElement) {
        const rect = listElement.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const isVisible = rect.bottom <= windowHeight && rect.bottom >= 0;

        if (isVisible && !animate) {
          setAnimate(true);
        } else if (!isVisible && animate) {
          setAnimate(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animate]);

  return (
    <List
      className={`${s.list} ${animate && s["list--animate"]}`}
      id="partners-list"
    >
      {partners.length > 0 &&
        partners
          .slice(0, limit)
          .map((partner, index) => (
            <BrandItem
              key={partner.customId}
              heightImg="80"
              url={partner.imageUrl}
              href={partner.url}
              className={`${s.brand} ${animate && s["brand--animate"]}`}
              style={{ transitionDelay: `${0.2 * index}s` }}
            />
          ))}
    </List>
  );
};

export default PartnersList;
